<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <section class="py-24 bg-navy-800 retro-texture text-cream-50">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <!-- Decorative top -->
      <div class="flex justify-center mb-8">
        <div class="w-20 h-20 border-2 border-rust-400 flex items-center justify-center rotate-45">
          <UIcon name="i-lucide-heart" class="w-8 h-8 text-rust-400 -rotate-45" />
        </div>
      </div>

      <!-- Title -->
      <h2 class="font-display text-5xl md:text-7xl tracking-wider mb-6">
        TERIMA KASIH
      </h2>
      
      <div class="h-[2px] w-32 bg-rust-400 mx-auto mb-10" />

      <!-- Closing message -->
      <div class="space-y-6 font-serif text-lg md:text-xl text-cream-200 leading-relaxed italic">
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

      <!-- Quote -->
      <div class="mt-12 p-8 border-2 border-cream-300/30">
        <UIcon name="i-lucide-quote" class="w-10 h-10 text-rust-400 mb-4" />
        <p class="font-serif text-2xl md:text-3xl text-cream-100 italic">
          "Perpisahan bukanlah akhir, melainkan awal dari perjalanan baru"
        </p>
      </div>

      <!-- Year -->
      <div class="mt-16">
        <span class="stamp text-rust-400 text-2xl border-rust-400">
          {{ currentYear }}
        </span>
      </div>

      <!-- Credits -->
      <div class="mt-16 pt-10 border-t border-cream-50/20">
        <p class="font-display text-cream-300 tracking-wider text-sm">
          BUKU TAHUNAN SEKOLAH
        </p>
        <p class="font-serif text-cream-400 text-sm mt-2">
          Dibuat dengan penuh cinta oleh Tim Yearbook
        </p>
      </div>
    </div>
  </section>
</template>
