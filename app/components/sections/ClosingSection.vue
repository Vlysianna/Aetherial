<script setup lang="ts">
import { useMouseParallax } from '~/composables/useMouseParallax'
import { computed } from 'vue'

const currentYear = new Date().getFullYear()

const { mouseX, mouseY, resetMouse } = useMouseParallax()

const interactiveCardStyle = computed(() => {
  const rotateX = -mouseY.value * 5
  const rotateY = mouseX.value * 5
  return {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
    transition: 'transform 0.1s ease-out'
  }
})
</script>

<template>
  <section 
    class="py-24 bg-sunset retro-texture relative overflow-hidden perspective-1000"
    @mouseleave="resetMouse"
  >
    <div 
      class="absolute inset-0 bg-retro-grid opacity-10 transition-transform duration-700 pointer-events-none scale-110" 
      :style="{ transform: `translate(${mouseX * -20}px, ${mouseY * -20}px)` }"
    />
    <div class="max-w-5xl mx-auto px-6 relative z-10 flex justify-center">
      <div 
        class="paper-stack bg-cream-50 border-2 border-brown-300 p-10 md:p-14 text-center transition-transform duration-300 hover:shadow-2xl max-w-3xl w-full"
        :style="interactiveCardStyle"
      >
        <div class="flex justify-center mb-8">
          <span class="sticker text-navy-900">Terima Kasih</span>
        </div>

        <h2 class="font-display text-5xl md:text-7xl tracking-wider text-navy-800 mb-6">
          TERIMA KASIH
        </h2>
        <div class="h-[2px] w-32 bg-rust-400 mx-auto mb-10" />

        <div class="space-y-6 font-serif text-lg md:text-xl text-navy-700 leading-relaxed italic">
          <p>
            Tiga tahun telah berlalu dengan segala suka dan duka,
            tawa dan tangis, keberhasilan dan pembelajaran.
          </p>

          <p>
            Kepada para guru yang telah membimbing dengan penuh kesabaran,
            kepada teman-teman yang telah menjadi keluarga kedua,
            dan kepada sekolah yang telah menjadi rumah untuk bertumbuh.
          </p>

          <p>
            Semoga kenangan indah ini akan selalu terpatri dalam hati,
            menjadi bekal untuk melangkah ke masa depan yang lebih cerah.
          </p>
        </div>

        <div class="mt-12 retro-ticket note-card p-6 md:p-8">
          <UIcon name="i-lucide-quote" class="w-10 h-10 text-rust-500 mb-4" />
          <p class="font-serif text-2xl md:text-3xl text-navy-800 italic">
            "Perpisahan bukanlah akhir, melainkan awal dari perjalanan baru"
          </p>
        </div>

        <div class="mt-12 transition-transform duration-300 hover:scale-110 inline-block cursor-pointer">
          <span class="stamp text-rust-600 text-2xl border-rust-600 hover:bg-rust-50 transition-colors">
            {{ currentYear }}
          </span>
        </div>

        <div class="mt-14 pt-8 border-t border-brown-200">
          <p class="font-display text-navy-700 tracking-wider text-sm">
            BUKU TAHUNAN SEKOLAH
          </p>
          <p class="font-serif text-brown-600 text-sm mt-2">
           Dibuat oleh Tim Buku Tahunan
          </p>
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
