<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <section class="py-24 bg-sunset retro-texture relative overflow-hidden">
    <div class="absolute inset-0 bg-retro-grid opacity-10" />
    <div class="max-w-5xl mx-auto px-6 relative z-10">
      <div class="paper-stack bg-cream-50 border-2 border-brown-300 p-10 md:p-14 text-center">
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

        <div class="mt-12">
          <span class="stamp text-rust-600 text-2xl border-rust-600">
            {{ currentYear }}
          </span>
        </div>

        <div class="mt-14 pt-8 border-t border-brown-200">
          <p class="font-display text-navy-700 tracking-wider text-sm">
            BUKU TAHUNAN SEKOLAH
          </p>
          <p class="font-serif text-brown-600 text-sm mt-2">
            Dibuat dengan penuh cinta oleh Tim Yearbook
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
