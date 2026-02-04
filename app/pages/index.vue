<script setup lang="ts">
import { classesData, osisBPH, sekbidData, ekskulData } from '~/data/yearbook-data'
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
      <!-- Section divider -->
      <div class="py-16 bg-navy-800 text-center">
        <span class="font-display text-rust-400 text-lg tracking-[0.3em]">BAGIAN</span>
        <h2 class="font-display text-5xl md:text-7xl text-cream-50 tracking-wider mt-2">KELAS</h2>
        <div class="w-24 h-1 bg-rust-500 mx-auto mt-6" />
      </div>

      <SectionsClassSection
        v-for="classData in classesData"
        :key="classData.classCode"
        :class-code="classData.classCode"
        :class-name="classData.className"
        :students="classData.students"
        :teacher="classData.teacher"
        :officers="classData.officers"
        :retro-photos="classData.retroPhotos"
      />
    </div>

    <!-- OSIS Section -->
    <div id="osis">
      <!-- Section divider -->
      <div class="py-16 bg-rust-600 text-center">
        <span class="font-display text-cream-200 text-lg tracking-[0.3em]">ORGANISASI</span>
        <h2 class="font-display text-5xl md:text-7xl text-cream-50 tracking-wider mt-2">OSIS</h2>
        <div class="w-24 h-1 bg-cream-50 mx-auto mt-6" />
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
      <div class="py-16 bg-olive-700 text-center">
        <span class="font-display text-cream-200 text-lg tracking-[0.3em]">KEGIATAN</span>
        <h2 class="font-display text-5xl md:text-7xl text-cream-50 tracking-wider mt-2">EKSTRAKURIKULER</h2>
        <div class="w-24 h-1 bg-cream-50 mx-auto mt-6" />
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

