<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentYear = new Date().getFullYear()
const scrollY = ref(0)
const isVisible = ref(false)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Trigger entrance animations
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="relative min-h-screen bg-retro-warm retro-texture overflow-hidden">
    <div class="absolute inset-0 bg-paper opacity-70" />

    <!-- Sunburst + shapes -->
    <div
      class="absolute -top-24 right-[-140px] w-[420px] h-[420px] rounded-full opacity-30"
      :style="{
        backgroundImage: 'repeating-conic-gradient(var(--color-cream-100) 0 12deg, var(--color-cream-200) 12deg 24deg)',
        border: '4px solid var(--color-cream-200)',
        transform: `translateY(${scrollY * 0.08}px) rotate(${scrollY * 0.03}deg)`
      }"
    />
    <div
      class="absolute bottom-[-80px] left-[-60px] w-64 h-64 border-4 border-olive-300 opacity-20"
      :style="{ transform: `rotate(${12 - scrollY * 0.04}deg) translateY(${scrollY * -0.12}px)` }"
    />
    <div
      class="absolute top-24 left-1/2 w-24 h-24 border-4 border-navy-300 opacity-15"
      :style="{ transform: `translateX(-50%) translateY(${scrollY * 0.1}px) rotate(${45 + scrollY * 0.05}deg)` }"
    />

    <!-- Main content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-[0.6fr_0.4fr] gap-12 items-center">
      <div>
        <div
          class="flex flex-wrap items-center gap-3 opacity-0"
          :class="{ 'animate-fade-in-up stagger-1': isVisible }"
        >
          <span class="retro-ticket px-4 py-2">
            <span class="font-display text-navy-800 tracking-wider text-sm">Yearbook {{ currentYear }}</span>
          </span>
          <span
            class="ribbon text-sm"
            style="--ribbon-bg: var(--color-rust-500); --ribbon-text: var(--color-cream-50);"
          >
            Angkatan {{ 51 }}
          </span>
          <span class="font-serif text-brown-600 italic text-sm">Tema Retro</span>
        </div>

        <div
          class="mt-6 flex items-start gap-5 opacity-0"
          :class="{ 'animate-fade-in-up stagger-2': isVisible }"
        >
          <div class="w-2 h-24 bg-rust-500" />
          <div>
            <p class="font-serif text-navy-700 italic">SMK Negeri 24 Jakarta</p>
            <h1 class="font-display text-6xl md:text-8xl lg:text-[9rem] text-navy-900 leading-none tracking-[0.15em]">
              <span class="block">BUKU</span>
              <span class="block text-rust-600">TAHUNAN</span>
            </h1>
            <div class="retro-divider w-40 mt-4" />
          </div>
        </div>

        <div
          class="retro-card note-card p-6 mt-6 opacity-0"
          :class="{ 'animate-fade-in-up stagger-3': isVisible }"
        >
          <p class="font-serif text-lg md:text-xl text-navy-700 italic leading-relaxed">
            Mengabadikan perjalanan, menyusun cerita, dan merayakan setiap momen yang tak terlupakan.
          </p>
          <div class="mt-4 flex flex-wrap items-center gap-3 text-sm text-brown-600">
            <span class="sticker text-navy-900">Aetherial</span>
            <span class="font-serif italic">Kenangan tiga tahun kebersamaan</span>
          </div>
        </div>

        <div
          class="flex flex-wrap gap-4 mt-8 opacity-0"
          :class="{ 'animate-fade-in-up stagger-4': isVisible }"
        >
          <a
            href="#classes"
            class="px-6 py-3 bg-rust-500 text-cream-50 font-display tracking-wider hover:bg-rust-600 transition-colors"
          >
            Jelajahi Kelas
          </a>
          <a
            href="#ekskul"
            class="px-6 py-3 border-2 border-navy-700 text-navy-800 font-display tracking-wider hover:bg-navy-700 hover:text-cream-50 transition-colors"
          >
            OSIS dan Ekskul
          </a>
        </div>
      </div>

      <div class="relative flex justify-center lg:justify-end">
        <div
          class="absolute -top-6 right-6 w-52 h-52 rounded-full bg-navy-900 border-4 border-navy-700 items-center justify-center opacity-90 hidden md:flex"
          :class="{ 'animate-scale-in stagger-4': isVisible }"
          :style="{ transform: `translateY(${scrollY * 0.12}px)` }"
        >
          <div class="w-16 h-16 rounded-full border-4 border-cream-200" />
        </div>

        <div
          class="paper-stack retro-card p-6 md:p-8 w-full max-w-sm opacity-0"
          :class="{ 'animate-rotate-in stagger-3': isVisible }"
        >
          <div class="flex items-center justify-between">
            <span
              class="ribbon text-sm"
              style="--ribbon-bg: var(--color-navy-700); --ribbon-text: var(--color-cream-50);"
            >
              Album
            </span>
            <span class="font-display text-navy-700 text-xs tracking-[0.35em]">SIDE A</span>
          </div>

          <div class="mt-5 bg-cream-200 aspect-[3/4] flex items-center justify-center">
            <UIcon name="i-lucide-image" class="w-12 h-12 text-brown-400" />
          </div>

          <div class="mt-5">
            <p class="font-display text-xs tracking-[0.3em] text-navy-700">DAFTAR ISI</p>
            <ul class="mt-3 space-y-2 text-sm text-brown-600 font-serif">
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 bg-rust-400 rounded-full inline-block" />
                Sambutan
              </li>
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 bg-olive-400 rounded-full inline-block" />
                Perkelas
              </li>
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 bg-navy-400 rounded-full inline-block" />
                OSIS dan Sekbid
              </li>
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 bg-brown-400 rounded-full inline-block" />
                Ekstrakurikuler
              </li>
            </ul>
          </div>
        </div>

        <div
          class="absolute -bottom-6 left-6 retro-ticket px-4 py-2 text-xs font-display tracking-widest text-rust-700 opacity-0"
          :class="{ 'animate-fade-in-up stagger-6': isVisible }"
        >
          ALBUM 2026
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
      <UIcon name="i-lucide-chevron-down" class="w-8 h-8 text-navy-400 animate-pulse-subtle" />
    </div>
  </section>
</template>
