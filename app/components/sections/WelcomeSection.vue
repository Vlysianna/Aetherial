<script setup lang="ts">
interface Props {
  principalName?: string
  principalPhoto?: string
  message?: string
}

withDefaults(defineProps<Props>(), {
  principalName: 'Nama Kepala Sekolah',
  principalPhoto: '/images/principal.jpg',
  message: 'Selamat datang di Buku Tahunan Sekolah kami. Tiga tahun perjalanan telah kita lalui bersama, penuh dengan pembelajaran, persahabatan, dan kenangan yang tak terlupakan. Buku ini adalah saksi bisu dari setiap momen berharga yang telah kita ukir bersama. Semoga kenangan indah ini akan selalu menjadi bekal dalam perjalanan kalian selanjutnya.'
})
</script>

<template>
  <section class="py-24 bg-cream-50 retro-texture">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <div class="text-center mb-16">
        <span class="font-display text-rust-500 text-lg tracking-[0.3em] uppercase">Selamat Datang</span>
        <h2 class="font-display text-5xl md:text-7xl text-navy-800 mt-2 tracking-wide">
          WELCOMING MESSAGE
        </h2>
        <div class="retro-divider w-32 mx-auto mt-6" />
      </div>

      <!-- Content grid -->
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Principal photo -->
        <div class="flex justify-center">
          <div class="polaroid" style="--rotation: -2deg;">
            <div class="aspect-[3/4] w-64 md:w-80 bg-cream-200 overflow-hidden">
              <img 
                :src="principalPhoto" 
                :alt="principalName"
                class="w-full h-full object-cover"
                onerror="this.style.display='none'"
              >
              <div class="w-full h-full flex items-center justify-center text-brown-400">
                <UIcon name="i-lucide-user" class="w-24 h-24" />
              </div>
            </div>
            <p class="text-center mt-4 font-serif text-lg text-navy-700">{{ principalName }}</p>
            <p class="text-center font-sans text-sm text-brown-500">Kepala Sekolah</p>
          </div>
        </div>

        <!-- Welcome message -->
        <div class="retro-card p-8 md:p-12">
          <div class="mb-6">
            <UIcon name="i-lucide-quote" class="w-12 h-12 text-rust-400 opacity-50" />
          </div>
          
          <p class="font-serif text-lg md:text-xl text-navy-700 leading-relaxed mb-8 italic">
            {{ message }}
          </p>

          <div class="flex items-center gap-4">
            <div class="h-[2px] flex-grow bg-brown-200" />
            <span class="font-display text-brown-500 tracking-wider">{{ new Date().getFullYear() }}</span>
            <div class="h-[2px] flex-grow bg-brown-200" />
          </div>

          <div class="mt-8 text-right">
            <p class="font-serif text-navy-600 italic">Salam hangat,</p>
            <p class="font-display text-xl text-navy-800 tracking-wide mt-1">{{ principalName }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
