<script setup lang="ts">
import { useMouseParallax } from '~/composables/useMouseParallax'
import { computed } from 'vue'

interface Props {
  sekbidNumber: number
  sekbidName: string
  groupPhotos?: string[]
}

const props = defineProps<Props>()

const sekbidDescriptions: Record<number, string> = {
  1: 'Ketakwaan Terhadap Tuhan Yang Maha Esa',
  2: 'Kehidupan Berbangsa dan Bernegara',
  3: 'Pendidikan Pendahuluan Bela Negara',
  4: 'Kepribadian dan Budi Pekerti Luhur',
  5: 'Berorganisasi, Pendidikan Politik dan Kepemimpinan',
  6: 'Keterampilan dan Kewirausahaan'
}

const { mouseX, mouseY, resetMouse } = useMouseParallax()

const interactiveCardStyle = computed(() => {
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
    :id="`sekbid-${sekbidNumber}`"
    class="py-20 retro-texture relative overflow-hidden perspective-1000"
    :class="sekbidNumber % 2 === 0 ? 'bg-cream-50' : 'bg-navy-50'"
    @mouseleave="resetMouse"
  >
    <div 
      class="absolute inset-0 bg-retro-grid transition-transform duration-700 pointer-events-none scale-110" 
      :class="sekbidNumber % 2 === 0 ? 'opacity-20' : 'opacity-10'"
      :style="{ transform: `translate(${mouseX * -20}px, ${mouseY * -20}px)` }"
    />
    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
        <div class="flex items-center gap-4">
          <div class="retro-ticket px-5 py-3 shadow-md">
            <span class="font-display text-rust-600 text-2xl tracking-wider">SEKBID {{ sekbidNumber }}</span>
          </div>
          <div>
            <h3 class="font-serif text-2xl md:text-3xl text-navy-700 italic">
              {{ sekbidName || sekbidDescriptions[sekbidNumber] }}
            </h3>
            <div class="retro-divider w-24 mt-3" />
          </div>
        </div>
        <div class="sticker text-navy-900 bg-yellow-200">Dokumentasi</div>
      </div>

      <!-- Landscape Group Photos -->
      <div class="grid md:grid-cols-2 gap-10" :style="interactiveCardStyle">
        <div 
          v-for="idx in 2" 
          :key="idx" 
          class="retro-card p-3 bg-white hover:shadow-xl transition-shadow group" 
        >
          <div class="aspect-[16/9] bg-cream-200 overflow-hidden relative rounded-sm border border-brown-100">
            <img 
              v-if="groupPhotos && groupPhotos[idx - 1]" 
              :src="groupPhotos[idx - 1]" 
              :alt="`Foto Bersama Sekbid ${sekbidNumber} - ${idx}`" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            >
            <div v-else class="w-full h-full flex flex-col items-center justify-center text-brown-300 gap-2">
              <UIcon name="i-lucide-camera" class="w-12 h-12 opacity-50" />
              <span class="font-serif italic text-sm">Foto belum tersedia</span>
            </div>
            
            <div class="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div class="mt-4 flex justify-between items-center px-2">
            <p class="text-sm text-brown-600 font-serif italic">Momen Sekbid {{ sekbidNumber }}</p>
            <span class="text-xs text-brown-400 font-display tracking-widest">0{{ idx }}</span>
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
