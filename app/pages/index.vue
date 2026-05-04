<script setup lang="ts">
import { osisBPH, sekbidData, ekskulData } from '~/data/yearbook-data'
</script>

<template>
  <div class="min-h-screen bg-cream-50">
    <!-- Navigation -->
    <NavigationBar />

    <!-- Hero Section -->
    <div id="hero">
      <SectionsHeroSection />
    </div>

    <!-- Welcome Section -->
    <div id="welcome">
      <SectionsWelcomeSection
        principal-name="Drs. H. Nama Kepala Sekolah, M.Pd."
        principal-photo=""
        message="Selamat datang di Buku Tahunan Sekolah kami. Tiga tahun perjalanan telah kita lalui bersama, penuh dengan pembelajaran, persahabatan, dan kenangan yang tak terlupakan. Buku ini adalah saksi bisu dari setiap momen berharga yang telah kita ukir bersama. Semoga kenangan indah ini akan selalu menjadi bekal dalam perjalanan kalian selanjutnya. Sukses selalu untuk masa depan kalian!"
      />
    </div>

    <!-- Classes Section -->
    <div id="classes">
      <!-- Use landing section that links to individual class pages -->
      <SectionsClassSection />
    </div>

    <!-- OSIS Section -->
    <div id="osis">
      <!-- Section divider -->
      <div class="py-16 bg-rust-600 text-center relative overflow-hidden">
        <div class="absolute inset-0 bg-retro-grid opacity-20" />
        <div class="relative z-10 max-w-5xl mx-auto px-6">
          <div class="inline-flex items-center gap-4 retro-ticket px-6 py-3">
            <span class="font-display text-rust-600 text-sm tracking-[0.3em]">ORGANISASI</span>
            <span class="h-4 w-px bg-brown-300" />
            <span class="font-display text-navy-900 text-3xl tracking-wider">OSIS</span>
          </div>
          <p class="font-serif text-cream-200 italic mt-6">Gerak bersama, cerita bersama</p>
          <div class="retro-divider w-32 mx-auto mt-6" />
        </div>
      </div>

      <!-- BPH OSIS -->
      <SectionsOsisBPHSection :members="osisBPH" />

      <!-- Sekbid 1-6 -->
      <SectionsOsisSekbidSection
        v-for="sekbid in sekbidData"
        :key="sekbid.sekbidNumber"
        :sekbid-number="sekbid.sekbidNumber"
        :sekbid-name="sekbid.sekbidName"
        :members="sekbid.members"
      />
    </div>

    <!-- Ekskul Section -->
    <div id="ekskul">
      <!-- Section divider -->
      <div class="py-16 bg-olive-700 text-center relative overflow-hidden">
        <div class="absolute inset-0 bg-retro-grid opacity-20" />
        <div class="relative z-10 max-w-5xl mx-auto px-6">
          <div class="inline-flex items-center gap-4 retro-ticket px-6 py-3">
            <span class="font-display text-olive-700 text-sm tracking-[0.3em]">KEGIATAN</span>
            <span class="h-4 w-px bg-brown-300" />
            <span class="font-display text-navy-900 text-3xl tracking-wider">EKSKUL</span>
          </div>
          <p class="font-serif text-cream-200 italic mt-6">Panggung kreativitas di luar kelas</p>
          <div class="retro-divider w-32 mx-auto mt-6" />
        </div>
      </div>

      <SectionsEkskulSection
        v-for="ekskul in ekskulData"
        :key="ekskul.ekskulName"
        :ekskul-name="ekskul.ekskulName"
        :ekskul-icon="ekskul.ekskulIcon"
        :members="ekskul.members"
        :cover-photo="ekskul.coverPhoto"
      />
    </div>

    <!-- Closing Section -->
    <div id="closing">
      <SectionsClosingSection />
    </div>

    <!-- Footer -->
    <footer class="bg-navy-900 py-8 text-center">
      <p class="font-display text-cream-300 tracking-wider text-sm">
        © {{ new Date().getFullYear() }} BUKU TAHUNAN SEKOLAH
      </p>
      <p class="font-serif text-cream-400 text-xs mt-2 italic">
        Made with ♥ by Yearbook Team
      </p>
    </footer>
  </div>
</template>

