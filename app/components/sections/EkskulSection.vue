<script setup lang="ts">
import { useMouseParallax } from '~/composables/useMouseParallax'
import { computed } from 'vue'

interface EkskulMember {
  name: string
  photo: string
  role: 'Pembina' | 'Pelatih' | 'Ketua' | 'Wakil' | 'Sekretaris' | 'Bendahara'
  instagram?: string
  tiktok?: string
}

interface Props {
  ekskulName: string
  ekskulIcon?: string
  members: EkskulMember[]
  groupPhotos?: string[]
}

const props = defineProps<Props>()

const { mouseX, mouseY, resetMouse } = useMouseParallax()

const pembinas = computed(() => props.members.filter(m => m.role === 'Pembina'))
const pelatihs = computed(() => props.members.filter(m => m.role === 'Pelatih'))

const interactiveStyle = computed(() => {
  const rotateX = -mouseY.value * 2
  const rotateY = mouseX.value * 2
  return {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    transition: 'transform 0.1s ease-out'
  }
})
</script>

<template>
  <section 
    :id="`ekskul-${ekskulName.toLowerCase().replace(/\s+/g, '-')}`" 
    class="py-20 bg-cream-50 retro-texture relative overflow-hidden perspective-1000 border-t-2 border-brown-100"
    @mouseleave="resetMouse"
  >
    <div 
      class="absolute inset-0 bg-retro-grid opacity-10 transition-transform duration-700 pointer-events-none scale-110"
      :style="{ transform: `translate(${mouseX * -20}px, ${mouseY * -20}px)` }"
    />
    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <div class="inline-flex items-center gap-3 mb-4">
            <UIcon v-if="ekskulIcon" :name="ekskulIcon" class="w-10 h-10 text-rust-500" />
            <h2 class="font-display text-4xl md:text-5xl text-navy-800 tracking-wider">
              {{ ekskulName.toUpperCase() }}
            </h2>
          </div>
          <div class="retro-divider w-24" />
        </div>
        <div class="retro-ticket px-4 py-2 text-xs font-display tracking-widest text-rust-700 shadow-md">
          UNIT KEGIATAN
        </div>
      </div>

      <div class="space-y-10 transition-transform duration-300" :style="interactiveStyle">

        <!-- Pembina & Pelatih row -->
        <div
          v-if="pembinas.length > 0 || pelatihs.length > 0"
          class="grid gap-6"
          :class="[
            (pembinas.length + pelatihs.length) === 1 ? 'grid-cols-1 max-w-sm' :
            (pembinas.length + pelatihs.length) <= 2 ? 'sm:grid-cols-2 max-w-2xl mx-auto' :
            (pembinas.length + pelatihs.length) <= 3 ? 'sm:grid-cols-2 lg:grid-cols-3' :
            'sm:grid-cols-2 lg:grid-cols-4'
          ]"
        >
          <!-- All Pembina -->
          <div
            v-for="(p, i) in pembinas"
            :key="`pembina-${i}`"
            class="retro-card p-6 flex items-center gap-5 group hover:shadow-xl transition-shadow bg-white"
          >
            <div class="photo-frame flex-shrink-0 w-24">
              <div class="aspect-[3/4] bg-cream-200 overflow-hidden">
                <img v-if="p.photo" :src="p.photo" :alt="p.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <div v-else class="w-full h-full flex items-center justify-center text-brown-300">
                  <UIcon name="i-lucide-user" class="w-10 h-10" />
                </div>
              </div>
            </div>
            <div>
              <span class="ribbon text-xs mb-2" style="--ribbon-bg: var(--color-navy-700); --ribbon-text: var(--color-cream-50);">PEMBINA</span>
              <h4 class="font-serif text-base text-navy-800 font-medium leading-tight mt-1">{{ p.name }}</h4>
            </div>
          </div>

          <!-- All Pelatih -->
          <div
            v-for="(p, i) in pelatihs"
            :key="`pelatih-${i}`"
            class="retro-card p-6 flex items-center gap-5 group hover:shadow-xl transition-shadow bg-white"
          >
            <div class="photo-frame flex-shrink-0 w-24">
              <div class="aspect-[3/4] bg-cream-200 overflow-hidden">
                <img v-if="p.photo" :src="p.photo" :alt="p.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <div v-else class="w-full h-full flex items-center justify-center text-brown-300">
                  <UIcon name="i-lucide-user" class="w-10 h-10" />
                </div>
              </div>
            </div>
            <div>
              <span class="ribbon text-xs mb-2" style="--ribbon-bg: var(--color-olive-600); --ribbon-text: var(--color-cream-50);">PELATIH</span>
              <h4 class="font-serif text-base text-navy-800 font-medium leading-tight mt-1">{{ p.name }}</h4>
            </div>
          </div>
        </div>

        <!-- Landscape Group Photos (3) -->
        <div v-if="groupPhotos && groupPhotos.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(photo, idx) in groupPhotos.slice(0, 3)" :key="idx" class="retro-card p-2 bg-white hover:shadow-xl transition-shadow group">
            <div class="aspect-[16/9] bg-cream-200 overflow-hidden relative rounded-sm border border-brown-100">
              <img v-if="photo" :src="photo" alt="Foto Bersama Ekskul" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <div v-else class="w-full h-full flex items-center justify-center text-brown-300">
                <UIcon name="i-lucide-users" class="w-16 h-16" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <p class="text-sm text-center mt-3 text-brown-600 font-serif italic">Momen Bersama {{ idx + 1 }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
</style>
