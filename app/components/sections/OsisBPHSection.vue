<script setup lang="ts">
import { useMouseParallax } from '~/composables/useMouseParallax'
import { computed } from 'vue'

interface BPHMember {
  name: string
  photo: string
  role: 'Ketua' | 'Wakil Ketua' | 'Sekretaris 1' | 'Sekretaris 2' | 'Bendahara 1' | 'Bendahara 2'
  instagram?: string
  tiktok?: string
}

interface Props {
  members: BPHMember[]
}

const props = defineProps<Props>()

const leaders = computed(() => props.members.filter(m => m.role === 'Ketua' || m.role === 'Wakil Ketua'))
const staff = computed(() => props.members.filter(m => m.role.startsWith('Sekretaris') || m.role.startsWith('Bendahara')))

const { mouseX, mouseY, resetMouse } = useMouseParallax()

const interactiveCardStyle = computed(() => {
  const rotateX = -mouseY.value * 5
  const rotateY = mouseX.value * 5
  return {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    transition: 'transform 0.1s ease-out'
  }
})
</script>

<template>
  <section 
    id="osis" 
    class="py-24 bg-navy-50 retro-texture relative overflow-hidden perspective-1000"
    @mouseleave="resetMouse"
  >
    <div 
      class="absolute inset-0 bg-retro-grid opacity-20 transition-transform duration-700 pointer-events-none scale-110" 
      :style="{ transform: `translate(${mouseX * -20}px, ${mouseY * -20}px)` }"
    />
    <div class="max-w-6xl mx-auto px-6 relative z-10">
      
      <!-- Section header -->
      <div class="text-center mb-16 max-w-2xl mx-auto">
        <span class="font-display text-rust-500 text-sm tracking-[0.3em] uppercase retro-ticket px-4 py-2 inline-block shadow-md">Organisasi Siswa</span>
        <h2 class="font-display text-5xl md:text-6xl text-navy-900 mt-6 tracking-wide">
          OSIS
        </h2>
        <p class="font-serif text-xl text-brown-600 italic mt-4">Badan Pengurus Harian</p>
        <div class="retro-divider w-24 mx-auto mt-6" />
        <p class="font-serif text-sm text-brown-600 mt-6">
          Tim inti yang menjaga ritme kegiatan, memimpin program, dan memastikan semangat organisasi tetap hidup.
        </p>
      </div>

      <div class="space-y-12">
        <!-- Leaders Row (Ketua & Wakil) -->
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            v-for="(member, index) in leaders"
            :key="index"
            class="flex justify-center transition-transform duration-300 hover:z-10"
            :style="interactiveCardStyle"
          >
            <div class="paper-stack retro-card p-6 w-full text-center hover:shadow-2xl transition-shadow bg-white">
              <div class="photo-frame mx-auto w-48">
                <div class="aspect-[3/4] bg-cream-200 overflow-hidden">
                  <img
                    v-if="member.photo"
                    :src="member.photo"
                    :alt="member.name"
                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  >
                  <div v-else class="w-full h-full flex items-center justify-center text-brown-300">
                    <UIcon name="i-lucide-user" class="w-16 h-16" />
                  </div>
                </div>
              </div>

              <div class="mt-6 mb-3">
                <span
                  class="ribbon text-sm font-bold"
                  style="--ribbon-bg: var(--color-rust-600); --ribbon-text: var(--color-cream-50);"
                >
                  {{ member.role.toUpperCase() }}
                </span>
              </div>

              <h3 class="font-serif text-2xl text-navy-800 font-medium">{{ member.name }}</h3>

              <div class="flex justify-center gap-4 mt-5 pt-4 border-t border-brown-100">
                <a
                  v-if="member.instagram"
                  :href="`https://instagram.com/${member.instagram}`"
                  target="_blank"
                  class="text-brown-400 hover:text-rust-500 transition-colors"
                >
                  <UIcon name="i-simple-icons-instagram" class="w-5 h-5" />
                </a>
                <a
                  v-if="member.tiktok"
                  :href="`https://tiktok.com/@${member.tiktok}`"
                  target="_blank"
                  class="text-brown-400 hover:text-navy-600 transition-colors"
                >
                  <UIcon name="i-simple-icons-tiktok" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Staff Row (Sekretaris & Bendahara) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div
            v-for="(member, index) in staff"
            :key="index"
            class="flex justify-center transition-transform duration-300 hover:z-10"
            :style="interactiveCardStyle"
          >
            <div class="retro-card p-5 w-full text-center hover:shadow-xl transition-shadow bg-white/90 backdrop-blur-sm">
              <div class="photo-frame mx-auto w-32 md:w-36">
                <div class="aspect-[3/4] bg-cream-200 overflow-hidden">
                  <img
                    v-if="member.photo"
                    :src="member.photo"
                    :alt="member.name"
                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  >
                  <div v-else class="w-full h-full flex items-center justify-center text-brown-300">
                    <UIcon name="i-lucide-user" class="w-12 h-12" />
                  </div>
                </div>
              </div>

              <div class="mt-4 mb-2">
                <span
                  class="ribbon text-xs"
                  style="--ribbon-bg: var(--color-navy-700); --ribbon-text: var(--color-cream-50);"
                >
                  {{ member.role }}
                </span>
              </div>

              <h3 class="font-serif text-lg text-navy-800 font-medium leading-tight px-1">{{ member.name }}</h3>

              <div class="flex justify-center gap-3 mt-3">
                <a
                  v-if="member.instagram"
                  :href="`https://instagram.com/${member.instagram}`"
                  target="_blank"
                  class="text-brown-400 hover:text-rust-500 transition-colors"
                >
                  <UIcon name="i-simple-icons-instagram" class="w-4 h-4" />
                </a>
                <a
                  v-if="member.tiktok"
                  :href="`https://tiktok.com/@${member.tiktok}`"
                  target="_blank"
                  class="text-brown-400 hover:text-navy-600 transition-colors"
                >
                  <UIcon name="i-simple-icons-tiktok" class="w-4 h-4" />
                </a>
              </div>
            </div>
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
