<script setup lang="ts">
import { classesData } from '~/data/yearbook-data'

const route = useRoute()
const classSlug = route.params.slug as string
const isLoading = ref(true)
const isVisible = ref(false)

// Find class data by slug
const classData = computed(() => {
  return classesData.find(c => 
    c.classCode.toLowerCase().replace(/\s+/g, '-') === classSlug
  )
})

// Simulate loading and trigger animations
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
    setTimeout(() => {
      isVisible.value = true
    }, 100)
  }, 300)
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
  title: `Kelas ${classData.value.classCode} - Buku Tahunan Sekolah`
})

// Navigation
const classIndex = computed(() => classesData.findIndex(c => c.classCode === classData.value?.classCode))
const prevClass = computed(() => classIndex.value > 0 ? classesData[classIndex.value - 1] : null)
const nextClass = computed(() => classIndex.value < classesData.length - 1 ? classesData[classIndex.value + 1] : null)
</script>

<template>
  <div class="min-h-screen bg-cream-50">
    <!-- Back navigation -->
    <div class="fixed top-0 left-0 right-0 z-50 bg-cream-50/95 backdrop-blur-sm border-b-2 border-brown-200">
      <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <NuxtLink 
          to="/#classes" 
          class="flex items-center gap-2 font-display text-navy-700 hover:text-rust-500 transition-colors"
        >
          <UIcon name="i-lucide-arrow-left" class="w-5 h-5" />
          <span class="tracking-wider">KEMBALI</span>
        </NuxtLink>

        <span class="font-display text-2xl text-navy-800 tracking-wider">{{ classData?.classCode }}</span>

        <div class="flex items-center gap-2">
          <NuxtLink 
            v-if="prevClass"
            :to="`/kelas/${prevClass.classCode.toLowerCase().replace(/\\s+/g, '-')}`"
            class="p-2 text-brown-400 hover:text-rust-500 transition-colors"
          >
            <UIcon name="i-lucide-chevron-left" class="w-5 h-5" />
          </NuxtLink>
          <NuxtLink 
            v-if="nextClass"
            :to="`/kelas/${nextClass.classCode.toLowerCase().replace(/\\s+/g, '-')}`"
            class="p-2 text-brown-400 hover:text-rust-500 transition-colors"
          >
            <UIcon name="i-lucide-chevron-right" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="pt-20 pb-24">
      <!-- Header -->
      <div class="py-20 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 text-center retro-texture relative overflow-hidden">
        <!-- Decorative elements -->
        <div class="absolute top-10 left-10 w-32 h-32 border-2 border-cream-200/20 rotate-12" />
        <div class="absolute bottom-10 right-10 w-40 h-40 border-2 border-rust-400/20 -rotate-6" />
        
        <div class="relative z-10">
          <span class="stamp text-rust-400 border-rust-400 mb-4 inline-block animate-fade-in-up">Kelas</span>
          <h1 class="font-display text-6xl md:text-9xl text-cream-50 tracking-wider mt-6 animate-scale-in stagger-1">
            {{ classData?.classCode }}
          </h1>
          <p class="font-serif text-xl md:text-2xl text-cream-200 italic mt-6 animate-fade-in-up stagger-2">{{ classData?.className }}</p>
          
          <!-- Stats badges -->
          <div class="flex items-center justify-center gap-6 mt-8 animate-fade-in-up stagger-3">
            <div class="glass-effect px-6 py-3 rounded-full">
              <span class="font-display text-cream-50 tracking-wider">{{ classData?.students.length }} SISWA</span>
            </div>
            <div class="glass-effect px-6 py-3 rounded-full">
              <span class="font-display text-cream-50 tracking-wider">{{ classData?.officers.length }} PENGURUS</span>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-6">
        <!-- Page 1: All students -->
        <section class="py-20">
          <div class="flex items-center gap-4 mb-10 animate-fade-in-right">
            <div class="w-1 h-12 bg-rust-500 rounded-full" />
            <div>
              <div class="font-display text-3xl text-navy-800 tracking-wider">ANGGOTA KELAS</div>
              <span class="text-brown-500 font-serif text-sm">{{ classData?.students.length }} Siswa</span>
            </div>
            <div class="h-[3px] flex-grow bg-gradient-to-r from-brown-200 to-transparent rounded" />
          </div>
          
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
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

        <!-- Page 2: Teacher & Officers -->
        <section class="py-20 border-t-2 border-brown-200">
          <div class="flex items-center gap-4 mb-12 animate-fade-in-right">
            <div class="w-1 h-12 bg-olive-500 rounded-full" />
            <div class="font-display text-3xl text-navy-800 tracking-wider">WALI KELAS & PENGURUS</div>
            <div class="h-[3px] flex-grow bg-gradient-to-r from-brown-200 to-transparent rounded" />
          </div>

          <div class="grid md:grid-cols-5 gap-8">
            <!-- Teacher (larger) -->
            <div class="md:col-span-2 flex justify-center">
              <div class="max-w-xs w-full">
                <div class="polaroid" style="--rotation: -1deg;">
                  <div class="aspect-[3/4] bg-cream-200 overflow-hidden">
                    <img 
                      v-if="classData?.teacher.photo"
                      :src="classData?.teacher.photo" 
                      :alt="classData?.teacher.name"
                      class="w-full h-full object-cover"
                    >
                    <div v-else class="w-full h-full flex items-center justify-center text-brown-300">
                      <UIcon name="i-lucide-user" class="w-20 h-20" />
                    </div>
                  </div>
                  <div class="mt-4 text-center">
                    <p class="font-serif text-navy-800 font-medium">{{ classData?.teacher.name }}</p>
                    <p class="text-sm text-rust-500 font-display tracking-wider">WALI KELAS</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Officers grid -->
            <div class="md:col-span-3">
              <div class="grid grid-cols-2 gap-6">
                <CardsStudentCard
                  v-for="(officer, index) in classData?.officers"
                  :key="index"
                  :name="officer.name"
                  :photo="officer.photo"
                  :role="officer.role"
                  :instagram="officer.instagram"
                  :tiktok="officer.tiktok"
                />
              </div>
            </div>
          </div>
        </section>

        <!-- Page 3: Retro themed photos -->
        <section class="py-20 border-t-2 border-brown-200">
          <div class="flex items-center gap-4 mb-12 animate-fade-in-right">
            <div class="w-1 h-12 bg-rust-500 rounded-full" />
            <div>
              <div class="font-display text-3xl text-navy-800 tracking-wider">MOMEN BERSAMA</div>
              <span class="text-brown-500 font-serif italic text-sm">Tema Retro</span>
            </div>
            <div class="h-[3px] flex-grow bg-gradient-to-r from-brown-200 to-transparent rounded" />
          </div>

          <div class="grid md:grid-cols-3 gap-8 lg:gap-10">
            <div 
              v-for="(photo, index) in classData?.retroPhotos" 
              :key="index"
              class="polaroid hover-tilt group animate-fade-in-up"
              :class="`stagger-${index + 1}`"
              :style="{ '--rotation': `${(index - 1) * 2}deg` }"
            >
              <div class="aspect-video bg-cream-200 overflow-hidden relative">
                <img 
                  v-if="photo"
                  :src="photo" 
                  :alt="`Momen kelas ${classData?.classCode} - ${index + 1}`"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                <div v-else class="w-full h-full flex items-center justify-center text-brown-300">
                  <UIcon name="i-lucide-image" class="w-20 h-20" />
                </div>
              </div>
              <p class="text-center mt-4 font-serif text-sm text-brown-600 italic group-hover:text-rust-600 transition-colors">
                Foto {{ index + 1 }}
              </p>
            </div>
          </div>
        </section>

        <!-- Navigation to other classes -->
        <section class="py-20 border-t-2 border-brown-200">
          <div class="flex items-center justify-between gap-4 flex-wrap">
            <NuxtLink 
              v-if="prevClass"
              :to="`/kelas/${prevClass.classCode.toLowerCase().replace(/\\s+/g, '-')}`"
              class="retro-card p-5 flex items-center gap-4 group hover-lift animate-fade-in-left"
            >
              <div class="w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center group-hover:bg-rust-500 transition-colors">
                <UIcon name="i-lucide-arrow-left" class="w-6 h-6 text-brown-400 group-hover:text-white group-hover:-translate-x-1 transition-all" />
              </div>
              <div>
                <p class="text-xs text-brown-500 font-display tracking-wider">SEBELUMNYA</p>
                <p class="font-serif text-lg text-navy-800 group-hover:text-rust-600 transition-colors">{{ prevClass.classCode }}</p>
              </div>
            </NuxtLink>
            <div v-else class="w-48" />

            <NuxtLink 
              to="/#classes"
              class="stamp text-rust-600 text-sm hover:scale-110 transition-transform animate-scale-in stagger-2"
            >
              SEMUA KELAS
            </NuxtLink>

            <NuxtLink 
              v-if="nextClass"
              :to="`/kelas/${nextClass.classCode.toLowerCase().replace(/\\s+/g, '-')}`"
              class="retro-card p-5 flex items-center gap-4 group hover-lift animate-fade-in-right"
            >
              <div class="text-right">
                <p class="text-xs text-brown-500 font-display tracking-wider">SELANJUTNYA</p>
                <p class="font-serif text-lg text-navy-800 group-hover:text-rust-600 transition-colors">{{ nextClass.classCode }}</p>
              </div>
              <div class="w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center group-hover:bg-rust-500 transition-colors">
                <UIcon name="i-lucide-arrow-right" class="w-6 h-6 text-brown-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </NuxtLink>
            <div v-else class="w-48" />
          </div>
        </section>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-navy-900 py-8 text-center">
      <p class="font-display text-cream-300 tracking-wider text-sm">
        © {{ new Date().getFullYear() }} BUKU TAHUNAN SEKOLAH
      </p>
    </footer>
  </div>
</template>
