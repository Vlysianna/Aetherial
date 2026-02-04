<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center bg-retro-warm retro-texture overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-10 left-10 w-32 h-32 border-4 border-rust-300 opacity-20 rotate-12" />
    <div class="absolute bottom-20 right-20 w-48 h-48 border-4 border-olive-400 opacity-20 -rotate-6" />
    <div class="absolute top-1/4 right-1/4 w-24 h-24 border-4 border-navy-300 opacity-15 rotate-45" />
    
    <!-- Main content -->
    <div class="relative z-10 text-center px-6 max-w-5xl mx-auto">
      <!-- Year badge -->
      <div class="mb-8">
        <span class="stamp text-rust-600 text-lg">
          Yearbook {{ currentYear }}
        </span>
      </div>

      <!-- Main title -->
      <h1 class="font-display text-7xl md:text-9xl lg:text-[12rem] text-navy-800 leading-none tracking-wider mb-4">
        BUKU TAHUNAN
      </h1>
      
      <div class="flex items-center justify-center gap-4 mb-6">
        <div class="h-[2px] w-16 md:w-32 bg-rust-400" />
        <span class="font-serif text-2xl md:text-3xl text-rust-600 italic">Sekolah</span>
        <div class="h-[2px] w-16 md:w-32 bg-rust-400" />
      </div>

      <!-- School name placeholder -->
      <h2 class="font-serif text-3xl md:text-5xl text-navy-700 mb-12">
        SMK Negeri 1 Contoh
      </h2>

      <!-- Decorative line -->
      <div class="retro-divider w-64 mx-auto mb-12" />

      <!-- Tagline -->
      <p class="font-serif text-xl md:text-2xl text-brown-600 italic max-w-2xl mx-auto">
        "Mengabadikan Kenangan, Merayakan Perjalanan"
      </p>

      <!-- Scroll indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <UIcon name="i-lucide-chevron-down" class="w-8 h-8 text-navy-400" />
      </div>
    </div>
  </section>
</template>
