<script setup lang="ts">
interface Props {
  principalName?: string
  principalPhoto?: string
  message?: string
}

withDefaults(defineProps<Props>(), {
  principalName: 'DRA. ISFARIANI',
  principalPhoto: '/images/principal.jpg',
  message: 'Selamat datang di Buku Tahunan Sekolah kami. Tiga tahun perjalanan telah kita lalui bersama, penuh dengan pembelajaran, persahabatan, dan kenangan yang tak terlupakan. Buku ini adalah saksi bisu dari setiap momen berharga yang telah kita ukir bersama. Semoga kenangan indah ini akan selalu menjadi bekal dalam perjalanan kalian selanjutnya.'
})
</script>

<template>
  <section class="py-24 bg-cream-100 retro-texture relative overflow-hidden">
    <div class="absolute inset-0 bg-paper opacity-60" />
    <div class="absolute top-10 right-10 w-48 h-48 bg-rust-200/20 rounded-full blur-3xl" />
    <div class="absolute bottom-20 left-10 w-48 h-48 bg-olive-200/20 rounded-full blur-3xl" />

    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-14 animate-fade-in-up">
        <span
          class="ribbon"
          style="--ribbon-bg: var(--color-rust-500); --ribbon-text: var(--color-cream-50);"
        >
          Selamat Datang
        </span>
        <h2 class="font-display text-5xl md:text-7xl text-navy-800 mt-4 tracking-wide">
          Pesan Kepala Sekolah
        </h2>
        <p class="font-serif text-xl text-brown-600 italic mt-3">
          Catatan pembuka untuk perjalanan kita bersama
        </p>
        <div class="retro-divider w-32 mx-auto mt-6" />
      </div>

      <!-- Content grid -->
      <div class="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
        <!-- Principal photo -->
        <div class="flex justify-center animate-fade-in-left stagger-2">
          <div class="relative paper-stack retro-card p-5 md:p-6 bg-cream-50">
            <div class="relative">
              <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-cream-200/80 border border-brown-200 rotate-2" />
              <div class="polaroid">
                <div class="aspect-[3/4] w-64 md:w-80 bg-cream-200 overflow-hidden relative">
                  <img
                    :src="principalPhoto"
                    :alt="principalName"
                    class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    onerror="this.style.display='none'"
                  >
                  <div class="w-full h-full flex items-center justify-center text-brown-400">
                    <UIcon name="i-lucide-user" class="w-24 h-24" />
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6 text-center">
              <p class="font-serif text-lg text-navy-700 font-medium">{{ principalName }}</p>
              <p class="font-sans text-sm text-brown-500 mt-1">Kepala Sekolah</p>
            </div>
          </div>
        </div>

        <!-- Welcome message -->
        <div class="animate-fade-in-right stagger-3">
          <div class="retro-ticket note-card p-8 md:p-10">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-full bg-rust-100 flex items-center justify-center">
                <UIcon name="i-lucide-quote" class="w-6 h-6 text-rust-500" />
              </div>
              <div>
                <p class="font-display text-rust-600 tracking-wider text-sm">SAMBUTAN</p>
                <p class="font-serif text-navy-700 italic text-sm">Dari Kepala Sekolah</p>
              </div>
            </div>

            <p class="font-serif text-lg md:text-xl text-navy-700 leading-relaxed italic">
              {{ message }}
            </p>

            <div class="mt-8 pt-6 border-t border-brown-200/70 text-right">
              <p class="font-serif text-navy-600 italic text-sm">Salam hangat,</p>
              <p class="font-display text-xl text-navy-800 tracking-wide mt-2">{{ principalName }}</p>
              <div class="flex justify-end mt-2">
                <div class="w-32 h-1 bg-rust-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
