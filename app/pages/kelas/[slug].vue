<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { classesData } from '~/data/yearbook-data'

const route = useRoute()
const classSlug = route.params.slug as string
const isVisible = ref(false)
const scrollY = ref(0)

// Mouse tracking for interactivity (same as HeroSection)
const mouseX = ref(0)
const mouseY = ref(0)
const isHoveringTeacher = ref(false)

const handleMouseMove = (e: MouseEvent) => {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  mouseX.value = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
  mouseY.value = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
}

const resetMouse = () => {
  mouseX.value = 0
  mouseY.value = 0
}

const handleScroll = () => {
  scrollY.value = window.scrollY
}

// Find class data by slug
const classData = computed(() => {
  return classesData.find(c =>
    c.classCode.toLowerCase().replace(/\s+/g, '-') === classSlug
  )
})

// 404 if class not found
if (!classData.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Kelas tidak ditemukan'
  })
}

// SEO
useHead({
  title: `Kelas ${classData.value.classCode} - Aetherial Yearbook`,
  meta: [
    { name: 'description', content: `Halaman detail kelas ${classData.value.className} — wali kelas, foto bersama, dan seluruh siswa.` }
  ]
})

// Navigation
const classIndex = computed(() => classesData.findIndex(c => c.classCode === classData.value?.classCode))
const prevClass = computed(() => classIndex.value > 0 ? classesData[classIndex.value - 1] : null)
const nextClass = computed(() => classIndex.value < classesData.length - 1 ? classesData[classIndex.value + 1] : null)

// Teacher card interactive style
const teacherCardStyle = computed(() => {
  if (!isHoveringTeacher.value) {
    return {
      transform: 'perspective(1000px) rotateX(2deg) rotateY(-3deg)',
      transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)'
    }
  }
  const rotX = -mouseY.value * 12
  const rotY = mouseX.value * 12
  return {
    transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.04) translateZ(15px)`,
    transition: 'transform 0.1s ease-out'
  }
})

// Parallax style for photo sections
const parallaxStyle1 = computed(() => ({
  transform: `translate(${mouseX.value * -20}px, ${mouseY.value * -20}px)`
}))
const parallaxStyle2 = computed(() => ({
  transform: `translate(${mouseX.value * 30}px, ${mouseY.value * 30}px)`
}))

// Dept color from class code
const deptColor = computed(() => {
  const code = classData.value?.classCode ?? ''
  if (code.startsWith('RPL')) return { bg: 'var(--color-navy-700)', light: 'var(--color-navy-100)', text: 'var(--color-navy-800)', ribbon: '#3F4F63', accent: 'navy' }
  if (code.startsWith('TBS')) return { bg: 'var(--color-olive-600)', light: 'var(--color-olive-100)', text: 'var(--color-olive-800)', ribbon: '#636D3B', accent: 'olive' }
  if (code.startsWith('TBG')) return { bg: 'var(--color-brown-600)', light: 'var(--color-brown-100)', text: 'var(--color-brown-800)', ribbon: '#A3694F', accent: 'brown' }
  if (code.startsWith('PH')) return { bg: 'var(--color-rust-600)', light: 'var(--color-rust-100)', text: 'var(--color-rust-800)', ribbon: '#C44A1F', accent: 'rust' }
  return { bg: 'var(--color-rust-500)', light: 'var(--color-cream-100)', text: 'var(--color-navy-800)', ribbon: '#D95A2B', accent: 'rust' }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  setTimeout(() => { isVisible.value = true }, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    class="min-h-screen bg-cream-50 retro-texture overflow-x-hidden"
    @mousemove="handleMouseMove"
    @mouseleave="resetMouse"
  >
    <!-- ─── STICKY NAV ─── -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-cream-50/95 backdrop-blur-sm border-b-2 border-brown-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <NuxtLink
          to="/#classes"
          class="flex items-center gap-2 font-display text-navy-700 hover:text-rust-500 transition-colors tracking-wider group"
        >
          <div class="w-8 h-8 rounded-full bg-cream-100 flex items-center justify-center group-hover:bg-rust-500 transition-colors duration-300">
            <UIcon name="i-lucide-arrow-left" class="w-4 h-4 group-hover:text-white group-hover:-translate-x-0.5 transition-all duration-300" />
          </div>
          KEMBALI
        </NuxtLink>

        <!-- Class code center -->
        <div class="flex items-center gap-3">
          <span
            class="ribbon text-sm"
            :style="{ '--ribbon-bg': deptColor.bg, '--ribbon-text': 'var(--color-cream-50)' }"
          >
            {{ classData?.classCode }}
          </span>
          <span class="font-serif text-navy-700 italic hidden sm:block">{{ classData?.className }}</span>
        </div>

        <!-- Class navigation -->
        <div class="flex items-center gap-1">
          <NuxtLink
            v-if="prevClass"
            :to="`/kelas/${prevClass.classCode.toLowerCase().replace(/\s+/g, '-')}`"
            class="p-2 rounded-full text-brown-400 hover:text-rust-500 hover:bg-rust-50 transition-all duration-300"
            :title="prevClass.classCode"
          >
            <UIcon name="i-lucide-chevron-left" class="w-5 h-5" />
          </NuxtLink>
          <NuxtLink
            v-if="nextClass"
            :to="`/kelas/${nextClass.classCode.toLowerCase().replace(/\s+/g, '-')}`"
            class="p-2 rounded-full text-brown-400 hover:text-rust-500 hover:bg-rust-50 transition-all duration-300"
            :title="nextClass.classCode"
          >
            <UIcon name="i-lucide-chevron-right" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- ─── HERO BANNER ─── -->
    <section class="relative min-h-[55vh] flex items-end overflow-hidden pt-16" :style="{ background: `linear-gradient(135deg, ${deptColor.bg} 0%, var(--color-navy-950) 100%)` }">
      <!-- Animated background grid -->
      <div
        class="absolute inset-0 bg-retro-grid opacity-20 transition-transform duration-700 pointer-events-none scale-110"
        :style="{ transform: `translate(${mouseX * -25}px, ${mouseY * -25}px)` }"
      />
      <!-- Decorative circles (parallax) -->
      <div
        class="absolute top-8 right-16 w-48 h-48 border-2 border-cream-200/20 rounded-full pointer-events-none transition-transform duration-700"
        :style="parallaxStyle1"
      />
      <div
        class="absolute bottom-8 left-10 w-72 h-72 border-2 border-rust-400/15 rounded-full pointer-events-none transition-transform duration-700"
        :style="parallaxStyle2"
      />
      <div
        class="absolute top-1/2 left-1/4 w-24 h-24 border border-cream-200/15 pointer-events-none transition-transform duration-1000"
        :style="{ transform: `rotate(${45 + mouseX.value * 10}deg) translate(${mouseX * -15}px, ${mouseY * -15}px)` }"
      />

      <!-- Scrolling tape marquee -->
      <div class="absolute top-20 left-0 w-full overflow-hidden bg-cream-50/10 backdrop-blur-sm py-2 border-y border-cream-200/20 rotate-[-1deg] scale-110">
        <div class="flex whitespace-nowrap animate-marquee-slow">
          <div class="flex items-center gap-4 text-xs font-display tracking-[0.2em] text-cream-200/70" v-for="i in 2" :key="i">
            <span v-for="j in 8" :key="j" class="flex items-center gap-4">
              <UIcon name="i-lucide-star" class="w-3 h-3 text-rust-300/70" />
              {{ classData?.classCode }} · {{ classData?.className?.toUpperCase() }} · CLASS OF 2026
            </span>
          </div>
        </div>
      </div>

      <div class="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 pt-24">
        <div class="max-w-3xl">
          <span class="stamp text-rust-300 border-rust-400 text-sm inline-block mb-6 animate-fade-in-up">Kelas</span>

          <h1
            class="font-display text-[5rem] sm:text-[7rem] md:text-[9rem] text-cream-50 tracking-wider leading-[0.85] animate-scale-in stagger-1 relative"
            :style="{ transition: 'all 0.3s ease' }"
          >
            {{ classData?.classCode }}
            <!-- Shadow layer for 3D feel -->
            <span
              class="absolute top-0 left-0 text-cream-200/20 pointer-events-none font-display text-[5rem] sm:text-[7rem] md:text-[9rem] leading-[0.85] tracking-wider"
              :style="{ transform: `translate(${mouseX * -15 + 6}px, ${mouseY * -15 + 6}px)` }"
              aria-hidden="true"
            >{{ classData?.classCode }}</span>
          </h1>

          <p class="font-serif text-xl md:text-2xl text-cream-200 italic mt-4 animate-fade-in-up stagger-2">
            {{ classData?.className }}
          </p>

          <!-- Stats badges -->
          <div class="flex flex-wrap items-center gap-4 mt-8 animate-fade-in-up stagger-3">
            <div class="glass-effect px-5 py-2.5 rounded-full flex items-center gap-2">
              <UIcon name="i-lucide-users" class="w-4 h-4 text-cream-300" />
              <span class="font-display text-cream-50 tracking-wider">{{ classData?.students.length }} SISWA</span>
            </div>
            <div class="glass-effect px-5 py-2.5 rounded-full flex items-center gap-2">
              <UIcon name="i-lucide-user-check" class="w-4 h-4 text-cream-300" />
              <span class="font-display text-cream-50 tracking-wider">1 WALI KELAS</span>
            </div>
            <div class="glass-effect px-5 py-2.5 rounded-full flex items-center gap-2">
              <UIcon name="i-lucide-camera" class="w-4 h-4 text-cream-300" />
              <span class="font-display text-cream-50 tracking-wider">FOTO BERSAMA</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Wave divider -->
      <div class="absolute bottom-0 left-0 right-0 h-12 pointer-events-none">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" preserveAspectRatio="none">
          <path d="M0 48L1440 48L1440 12C1080 48 720 0 360 24L0 12L0 48Z" fill="#FFFDF7"/>
        </svg>
      </div>
    </section>

    <!-- ─── MAIN CONTENT ─── -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 pb-24">

      <!-- ══════════════════════════════════════════
           SECTION 1 · WALI KELAS
           ══════════════════════════════════════════ -->
      <section class="py-20 relative">
        <!-- Section label -->
        <div class="flex items-center gap-4 mb-14 animate-fade-in-right">
          <div class="w-1.5 h-14 rounded-full" :style="{ background: deptColor.bg }" />
          <div>
            <div class="font-display text-4xl text-navy-800 tracking-wider">WALI KELAS</div>
            <span class="text-brown-500 font-serif italic text-sm">Guru Pengampu · {{ classData?.teacher?.subject }}</span>
          </div>
          <div class="h-[2px] flex-grow bg-gradient-to-r from-brown-200 to-transparent rounded ml-2" />
        </div>

        <div class="grid lg:grid-cols-12 gap-12 items-center">
          <!-- Interactive teacher photo card -->
          <div class="lg:col-span-5 flex justify-center">
            <div
              class="relative cursor-crosshair group perspective-1000"
              :style="teacherCardStyle"
              @mouseenter="isHoveringTeacher = true"
              @mouseleave="isHoveringTeacher = false"
            >
              <!-- Book-spine accent -->
              <div
                class="absolute left-0 top-0 bottom-0 w-5 rounded-l-lg z-20"
                :style="{ background: deptColor.bg }"
              />

              <!-- Main card -->
              <div class="relative w-72 sm:w-80 bg-white rounded-xl border border-brown-200 shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden ml-5">
                <!-- Photo area -->
                <div class="aspect-[3/4] bg-cream-200 overflow-hidden relative">
                  <img
                    v-if="classData?.teacher?.photo"
                    :src="classData.teacher.photo"
                    :alt="classData.teacher.name"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  >
                  <div v-else class="w-full h-full flex flex-col items-center justify-center gap-4 text-brown-300">
                    <UIcon name="i-lucide-user-round" class="w-24 h-24 transition-transform duration-500 group-hover:scale-110" />
                    <span class="font-serif text-sm italic text-brown-400">Foto belum tersedia</span>
                  </div>

                  <!-- Gradient overlay + hover hint -->
                  <div class="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <div class="absolute bottom-4 left-0 right-0 text-center">
                      <span class="font-display text-xs text-cream-200 tracking-widest">WALI KELAS</span>
                    </div>
                  </div>

                  <!-- Vintage stamp -->
                  <div class="absolute top-4 right-4 w-14 h-14 border-2 border-cream-50/60 rounded-full flex flex-col items-center justify-center opacity-80 rotate-[12deg] group-hover:rotate-[180deg] transition-transform duration-1000">
                    <span class="font-display text-[9px] text-white leading-none">WALI</span>
                    <span class="font-display text-xs text-white font-bold leading-none">KELAS</span>
                  </div>
                </div>

                <!-- Teacher info -->
                <div class="p-5 border-t-4" :style="{ borderColor: deptColor.bg }">
                  <p class="font-serif text-navy-800 font-semibold text-lg leading-tight">{{ classData?.teacher?.name }}</p>
                  <div class="flex items-center gap-2 mt-2">
                    <div class="w-2 h-2 rounded-full" :style="{ background: deptColor.bg }" />
                    <p class="font-display text-sm tracking-wider" :style="{ color: deptColor.text }">{{ classData?.teacher?.subject?.toUpperCase() }}</p>
                  </div>
                  <div class="mt-3 pt-3 border-t border-brown-100 flex items-center gap-2 text-xs text-brown-400 font-serif italic">
                    <UIcon name="i-lucide-school" class="w-3.5 h-3.5" />
                    SMK Negeri 24 Jakarta
                  </div>
                </div>
              </div>

              <!-- Decorative floating badge -->
              <div
                class="absolute -bottom-4 -right-4 retro-card p-3 shadow-lg z-30 group-hover:scale-110 transition-transform duration-300"
                :style="{ background: deptColor.light }"
              >
                <UIcon name="i-lucide-award" class="w-8 h-8" :style="{ color: deptColor.bg }" />
              </div>
            </div>
          </div>

          <!-- Teacher info + officers -->
          <div class="lg:col-span-7 space-y-8 animate-fade-in-right stagger-2">
            <!-- Quote card -->
            <div class="retro-card p-6 md:p-8 border-l-4 relative overflow-hidden" :style="{ borderLeftColor: deptColor.bg }">
              <UIcon name="i-lucide-quote" class="absolute top-4 right-4 w-10 h-10 text-brown-100" />
              <p class="font-serif text-lg md:text-xl text-navy-800 italic leading-relaxed relative z-10">
                "Setiap siswa adalah cahaya yang bersinar dengan caranya sendiri. Bersama kelas ini, kita menulis cerita yang tak terlupakan."
              </p>
              <div class="mt-4 pt-4 border-t border-brown-100 flex items-center gap-3">
                <div class="w-8 h-[2px] rounded" :style="{ background: deptColor.bg }" />
                <span class="font-display text-sm tracking-wider text-brown-500">{{ classData?.teacher?.name }}</span>
              </div>
            </div>

            <!-- Officers section -->
            <div>
              <div class="flex items-center gap-3 mb-5">
                <span class="font-display text-lg text-navy-700 tracking-wider">PENGURUS KELAS</span>
                <div class="h-[1px] flex-grow bg-brown-200" />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div
                  v-for="(officer, i) in classData?.officers"
                  :key="i"
                  class="retro-card p-4 flex items-center gap-3 group hover-lift cursor-default animate-fade-in-up"
                  :class="`stagger-${i + 1}`"
                >
                  <div class="w-12 h-12 rounded-full bg-cream-200 overflow-hidden border-2 border-brown-200 flex-shrink-0 group-hover:border-rust-300 transition-colors duration-300">
                    <img v-if="officer.photo" :src="officer.photo" :alt="officer.name" class="w-full h-full object-cover" >
                    <div v-else class="w-full h-full flex items-center justify-center text-brown-300">
                      <UIcon name="i-lucide-user" class="w-6 h-6" />
                    </div>
                  </div>
                  <div class="min-w-0">
                    <p class="font-serif text-navy-800 text-sm font-medium leading-tight group-hover:text-rust-600 transition-colors truncate">{{ officer.name }}</p>
                    <p class="font-display text-xs tracking-wider mt-0.5" :style="{ color: deptColor.bg }">{{ officer.role?.toUpperCase() }}</p>
                    <p v-if="officer.instagram" class="text-xs text-brown-400 mt-0.5 font-sans">@{{ officer.instagram }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════
           SECTION 2 · FOTO BERSAMA (2 FOTO)
           ══════════════════════════════════════════ -->
      <section class="py-20 border-t-2 border-brown-100 relative overflow-hidden">
        <!-- Parallax background decor -->
        <div
          class="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 pointer-events-none transition-transform duration-700"
          :style="{ background: deptColor.bg, transform: `translate(${mouseX * 40}px, ${mouseY * 40}px)` }"
        />
        <div
          class="absolute bottom-0 -left-16 w-48 h-48 border-4 border-brown-200 opacity-20 pointer-events-none transition-transform duration-700"
          :style="{ transform: `translate(${mouseX * -30}px, ${mouseY * -30}px) rotate(${20 + mouseX * 8}deg)` }"
        />

        <div class="flex items-center gap-4 mb-14 animate-fade-in-right">
          <div class="w-1.5 h-14 rounded-full bg-rust-500" />
          <div>
            <div class="font-display text-4xl text-navy-800 tracking-wider">FOTO BERSAMA</div>
            <span class="text-brown-500 font-serif italic text-sm">Momen Kelas · Tema Retro</span>
          </div>
          <div class="h-[2px] flex-grow bg-gradient-to-r from-brown-200 to-transparent rounded ml-2" />
        </div>

        <!-- Two photos layout -->
        <div class="grid md:grid-cols-2 gap-10 lg:gap-16">
          <!-- Photo 1 – main (tilted left) -->
          <div
            class="polaroid hover-tilt group animate-fade-in-left stagger-1 cursor-pointer"
            style="--rotation: -2deg;"
          >
            <div class="aspect-[4/3] bg-cream-200 overflow-hidden relative">
              <img
                v-if="classData?.retroPhotos?.[0]"
                :src="classData.retroPhotos[0]"
                :alt="`Foto bersama 1 kelas ${classData?.classCode}`"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
              <div v-else class="w-full h-full flex flex-col items-center justify-center gap-3 text-brown-300">
                <UIcon name="i-lucide-users" class="w-20 h-20 transition-transform duration-500 group-hover:scale-110" />
                <span class="font-serif text-sm italic text-brown-400">Foto bersama 1</span>
              </div>

              <!-- Film-strip sprocket holes -->
              <div class="absolute top-0 left-0 bottom-0 w-5 bg-black/30 flex flex-col justify-around items-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span v-for="h in 6" :key="h" class="w-3 h-2 bg-white/70 rounded-sm" />
              </div>
              <div class="absolute top-0 right-0 bottom-0 w-5 bg-black/30 flex flex-col justify-around items-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span v-for="h in 6" :key="h" class="w-3 h-2 bg-white/70 rounded-sm" />
              </div>

              <!-- Label overlay on hover -->
              <div class="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-3 left-3">
                  <span class="font-display text-xs text-cream-200 tracking-wider bg-black/30 px-2 py-0.5 rounded">FOTO 01 · CLASS OF 2026</span>
                </div>
              </div>
            </div>
            <div class="mt-4 text-center">
              <p class="font-serif text-sm text-brown-600 italic group-hover:text-rust-600 transition-colors duration-300">Kelas {{ classData?.classCode }} · Foto Bersama</p>
              <p class="font-display text-xs text-brown-400 tracking-wider mt-1">2025 / 2026</p>
            </div>
          </div>

          <!-- Photo 2 – secondary (tilted right) -->
          <div
            class="polaroid hover-tilt group animate-fade-in-right stagger-2 cursor-pointer"
            style="--rotation: 2.5deg;"
          >
            <div class="aspect-[4/3] bg-cream-200 overflow-hidden relative">
              <img
                v-if="classData?.retroPhotos?.[1]"
                :src="classData.retroPhotos[1]"
                :alt="`Foto bersama 2 kelas ${classData?.classCode}`"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
              <div v-else class="w-full h-full flex flex-col items-center justify-center gap-3 text-brown-300">
                <UIcon name="i-lucide-camera" class="w-20 h-20 transition-transform duration-500 group-hover:scale-110" />
                <span class="font-serif text-sm italic text-brown-400">Foto bersama 2</span>
              </div>

              <!-- Vintage color overlay on hover -->
              <div class="absolute inset-0 bg-amber-700/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <!-- Label overlay on hover -->
              <div class="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-3 left-3">
                  <span class="font-display text-xs text-cream-200 tracking-wider bg-black/30 px-2 py-0.5 rounded">FOTO 02 · CLASS OF 2026</span>
                </div>
              </div>
            </div>
            <div class="mt-4 text-center">
              <p class="font-serif text-sm text-brown-600 italic group-hover:text-rust-600 transition-colors duration-300">Kelas {{ classData?.classCode }} · Foto Bersama</p>
              <p class="font-display text-xs text-brown-400 tracking-wider mt-1">2025 / 2026</p>
            </div>
          </div>
        </div>

        <!-- Decorative post-it note -->
        <div class="hidden md:block absolute bottom-16 right-4 w-28 h-28 bg-yellow-200 shadow-md p-3 rotate-[12deg] z-20 hover:rotate-[8deg] hover:scale-110 transition-all duration-300 cursor-default">
          <div class="w-full h-3 bg-red-400/20 absolute top-0 left-0" />
          <p class="font-serif text-sm text-navy-800 leading-tight mt-3">Kenangan<br/>terbaik! 📸</p>
        </div>
      </section>

      <!-- ══════════════════════════════════════════
           SECTION 3 · FOTO MURID / ANGGOTA KELAS
           ══════════════════════════════════════════ -->
      <section class="py-20 border-t-2 border-brown-100 relative">
        <!-- Animated top-right decor -->
        <div
          class="absolute top-10 right-0 w-40 h-40 border-4 border-dashed border-brown-200/50 rounded-full pointer-events-none transition-transform duration-700"
          :style="{ transform: `translate(${mouseX * 20}px, ${mouseY * 20}px) rotate(${scrollY * 0.1}deg)` }"
        />

        <div class="flex items-center gap-4 mb-12 animate-fade-in-right">
          <div class="w-1.5 h-14 rounded-full" :style="{ background: deptColor.bg }" />
          <div>
            <div class="font-display text-4xl text-navy-800 tracking-wider">ANGGOTA KELAS</div>
            <span class="text-brown-500 font-serif text-sm">{{ classData?.students.length }} Siswa Aktif</span>
          </div>
          <div class="h-[2px] flex-grow bg-gradient-to-r from-brown-200 to-transparent rounded ml-2" />
        </div>

        <!-- Quick search hint -->
        <div class="inline-flex items-center gap-2 retro-ticket px-4 py-2 mb-10 text-brown-500 font-serif text-sm italic animate-fade-in-up stagger-1">
          <UIcon name="i-lucide-mouse-pointer-click" class="w-4 h-4 text-rust-400 animate-bounce" />
          Hover foto siswa untuk melihat profil
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-6">
          <div
            v-for="(student, index) in classData?.students"
            :key="index"
            class="animate-fade-in-up"
            :class="`stagger-${Math.min(index % 6 + 1, 6)}`"
          >
            <CardsStudentCard
              :name="student.name"
              :photo="student.photo"
              :instagram="student.instagram"
              :tiktok="student.tiktok"
            />
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════
           NAVIGATION · KELAS LAIN
           ══════════════════════════════════════════ -->
      <section class="py-16 border-t-2 border-brown-100">
        <div class="text-center mb-10">
          <NuxtLink
            to="/#classes"
            class="stamp text-rust-600 border-rust-400 hover:scale-110 transition-transform inline-block cursor-pointer animate-scale-in"
          >
            SEMUA KELAS
          </NuxtLink>
        </div>

        <div class="flex items-stretch justify-between gap-4 flex-wrap">
          <!-- Prev -->
          <NuxtLink
            v-if="prevClass"
            :to="`/kelas/${prevClass.classCode.toLowerCase().replace(/\s+/g, '-')}`"
            class="retro-card p-5 flex items-center gap-4 group hover-lift animate-fade-in-left flex-1 min-w-0 max-w-xs"
          >
            <div class="w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center group-hover:bg-rust-500 transition-colors duration-300 flex-shrink-0">
              <UIcon name="i-lucide-arrow-left" class="w-6 h-6 text-brown-400 group-hover:text-white group-hover:-translate-x-1 transition-all duration-300" />
            </div>
            <div class="min-w-0">
              <p class="text-xs text-brown-400 font-display tracking-wider">SEBELUMNYA</p>
              <p class="font-serif text-lg text-navy-800 group-hover:text-rust-600 transition-colors truncate">{{ prevClass.classCode }}</p>
              <p class="text-xs text-brown-400 font-sans italic truncate">{{ prevClass.className }}</p>
            </div>
          </NuxtLink>
          <div v-else class="flex-1 max-w-xs" />

          <!-- Next -->
          <NuxtLink
            v-if="nextClass"
            :to="`/kelas/${nextClass.classCode.toLowerCase().replace(/\s+/g, '-')}`"
            class="retro-card p-5 flex items-center gap-4 group hover-lift animate-fade-in-right flex-1 min-w-0 max-w-xs text-right ml-auto justify-end"
          >
            <div class="min-w-0">
              <p class="text-xs text-brown-400 font-display tracking-wider">SELANJUTNYA</p>
              <p class="font-serif text-lg text-navy-800 group-hover:text-rust-600 transition-colors truncate">{{ nextClass.classCode }}</p>
              <p class="text-xs text-brown-400 font-sans italic truncate">{{ nextClass.className }}</p>
            </div>
            <div class="w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center group-hover:bg-rust-500 transition-colors duration-300 flex-shrink-0">
              <UIcon name="i-lucide-arrow-right" class="w-6 h-6 text-brown-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </NuxtLink>
          <div v-else class="flex-1 max-w-xs" />
        </div>
      </section>
    </div>

    <!-- ─── FOOTER ─── -->
    <footer class="bg-navy-900 retro-texture py-10 text-center relative overflow-hidden">
      <div
        class="absolute inset-0 opacity-10 bg-retro-grid pointer-events-none"
        :style="{ transform: `translate(${mouseX * -10}px, ${mouseY * -10}px)` }"
      />
      <div class="relative z-10">
        <p class="font-display text-cream-300 tracking-[0.3em] text-sm">AETHERIAL · BUKU TAHUNAN</p>
        <p class="font-serif text-cream-500 text-xs italic mt-2">© {{ new Date().getFullYear() }} SMK Negeri 24 Jakarta · Angkatan 51</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

@keyframes marquee-slow {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee-slow {
  animation: marquee-slow 30s linear infinite;
  width: max-content;
}

/* Ensure photo section transitions are smooth */
.polaroid {
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
              box-shadow 0.4s ease;
}

.polaroid:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18);
}
</style>
