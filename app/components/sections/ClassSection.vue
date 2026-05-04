<script setup lang="ts">
import { classesData } from '~/data/yearbook-data'

const currentYear = new Date().getFullYear()

const deptStyles = {
  rust: {
    ribbonBg: 'var(--color-rust-500)',
    ribbonText: 'var(--color-cream-50)',
    iconBg: 'bg-rust-100',
    iconText: 'text-rust-600',
    accent: 'text-rust-600',
    glow: 'from-rust-200/40'
  },
  navy: {
    ribbonBg: 'var(--color-navy-700)',
    ribbonText: 'var(--color-cream-50)',
    iconBg: 'bg-navy-100',
    iconText: 'text-navy-700',
    accent: 'text-navy-700',
    glow: 'from-navy-200/35'
  },
  olive: {
    ribbonBg: 'var(--color-olive-600)',
    ribbonText: 'var(--color-cream-50)',
    iconBg: 'bg-olive-100',
    iconText: 'text-olive-700',
    accent: 'text-olive-700',
    glow: 'from-olive-200/40'
  },
  brown: {
    ribbonBg: 'var(--color-brown-600)',
    ribbonText: 'var(--color-cream-50)',
    iconBg: 'bg-brown-100',
    iconText: 'text-brown-600',
    accent: 'text-brown-600',
    glow: 'from-brown-200/45'
  }
} as const

// Group classes by department
const departments = [
  { name: 'Usaha Layanan Wisata', classes: classesData.filter(c => c.classCode.startsWith('Ulw')), style: deptStyles.rust },
  { name: 'Rekayasa Perangkat Lunak', classes: classesData.filter(c => c.classCode.startsWith('RPL')), style: deptStyles.navy },
  { name: 'Tata Busana', classes: classesData.filter(c => c.classCode.startsWith('TBS')), style: deptStyles.olive },
  { name: 'Tata Boga', classes: classesData.filter(c => c.classCode.startsWith('Boga')), style: deptStyles.brown },
  { name: 'Perhotelan', classes: classesData.filter(c => c.classCode.startsWith('PH')), style: deptStyles.rust }
]
</script>

<template>
  <section id="classes" class="py-24 bg-cream-50 retro-texture relative overflow-hidden">
    <div class="absolute inset-0 bg-retro-grid opacity-25" />
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-4 retro-ticket px-6 py-3 mb-6 animate-fade-in-up">
          <UIcon name="i-lucide-layout-grid" class="w-6 h-6 text-rust-500" />
          <span class="font-display text-2xl text-navy-800 tracking-wider">PERKELAS</span>
        </div>
        <p class="font-serif text-xl text-brown-600 italic mt-2 animate-fade-in-up stagger-1">
          Pilih kelas untuk melihat siswa
        </p>
        <div class="retro-divider w-32 mx-auto mt-6 animate-scale-in stagger-2" />
      </div>

      <!-- Classes grid by department -->
      <div class="space-y-16">
        <div
          v-for="(dept, deptIndex) in departments"
          :key="dept.name"
          class="animate-fade-in-up"
          :class="`stagger-${deptIndex + 1}`"
        >
          <!-- Department header -->
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div class="flex items-center gap-4">
              <span
                class="ribbon"
                :style="{ '--ribbon-bg': dept.style.ribbonBg, '--ribbon-text': dept.style.ribbonText }"
              >
                Jurusan
              </span>
              <h3 class="font-display text-2xl text-navy-700 tracking-wider whitespace-nowrap">
                {{ dept.name.toUpperCase() }}
              </h3>
            </div>
            <div class="flex items-center gap-3 text-sm text-brown-500">
              <span class="font-display tracking-wider">{{ dept.classes.length }} Kelas</span>
              <span class="w-1.5 h-1.5 rounded-full bg-brown-400" />
              <span class="font-serif italic">Angkatan {{ currentYear }}</span>
            </div>
          </div>

          <!-- Classes in department -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink
              v-for="classData in dept.classes"
              :key="classData.classCode"
              :to="`/kelas/${classData.classCode.toLowerCase().replace(/\s+/g, '-')}`"
              class="group"
            >
              <div class="retro-card p-6 h-full hover-lift relative overflow-hidden">
                <div
                  class="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br to-transparent opacity-60 blur-2xl"
                  :class="dept.style.glow"
                />

                <div class="flex items-start justify-between gap-3 relative z-10">
                  <span
                    class="ribbon text-sm"
                    :style="{ '--ribbon-bg': dept.style.ribbonBg, '--ribbon-text': dept.style.ribbonText }"
                  >
                    {{ classData.classCode }}
                  </span>
                  <div class="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center group-hover:bg-rust-500 transition-all duration-300">
                    <UIcon
                      name="i-lucide-arrow-right"
                      class="w-6 h-6 text-brown-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                    />
                  </div>
                </div>

                <h4 class="font-serif text-lg text-navy-800 mt-4 mb-4 relative z-10 group-hover:text-rust-600 transition-colors duration-300">
                  {{ classData.className }}
                </h4>

                <div class="flex items-center gap-4 text-sm text-brown-500 mb-4 relative z-10">
                  <div class="flex items-center gap-2 group-hover:text-rust-600 transition-colors duration-300">
                    <div
                      class="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300"
                      :class="dept.style.iconBg"
                    >
                      <UIcon name="i-lucide-users" class="w-4 h-4" :class="dept.style.iconText" />
                    </div>
                    <span class="font-medium">{{ classData.students.length }} Siswa</span>
                  </div>
                  <div class="flex items-center gap-2 group-hover:text-olive-600 transition-colors duration-300">
                    <div class="w-9 h-9 rounded-full bg-cream-200 flex items-center justify-center group-hover:bg-olive-100 transition-colors duration-300">
                      <UIcon name="i-lucide-user-check" class="w-4 h-4" />
                    </div>
                    <span class="font-medium">1 Wali</span>
                  </div>
                </div>

                <div class="flex -space-x-3 mt-5 mb-4 relative z-10">
                  <div
                    v-for="n in Math.min(5, classData.students.length)"
                    :key="n"
                    class="w-10 h-10 rounded-full border-3 border-cream-50 bg-cream-200 flex items-center justify-center overflow-hidden shadow-sm hover:scale-110 hover:z-10 transition-transform duration-300"
                  >
                    <UIcon name="i-lucide-user" class="w-5 h-5 text-brown-400" />
                  </div>
                  <div
                    v-if="classData.students.length > 5"
                    class="w-10 h-10 rounded-full border-3 border-cream-50 bg-navy-600 flex items-center justify-center shadow-sm hover:scale-110 hover:z-10 transition-transform duration-300"
                  >
                    <span class="text-xs text-white font-display">+{{ classData.students.length - 5 }}</span>
                  </div>
                </div>

                <div class="pt-4 border-t-2 border-brown-200 group-hover:border-rust-400 transition-colors duration-300 relative z-10">
                  <div class="flex items-center justify-between">
                    <span class="font-display text-sm tracking-wider transition-colors duration-300" :class="dept.style.accent">
                      LIHAT DETAIL
                    </span>
                    <div class="w-8 h-0.5 bg-rust-400 group-hover:w-16 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
