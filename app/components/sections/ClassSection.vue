<script setup lang="ts">
interface Student {
  name: string
  photo: string
  instagram?: string
  tiktok?: string
}

interface ClassOfficer extends Student {
  role: 'Ketua' | 'Wakil' | 'Sekretaris' | 'Bendahara'
}

interface Teacher {
  name: string
  photo: string
  subject?: string
}

interface Props {
  className: string
  classCode: string
  students: Student[]
  teacher: Teacher
  officers: ClassOfficer[]
  retroPhotos: string[] // 3 landscape photos
}

defineProps<Props>()
</script>

<template>
  <section :id="`class-${classCode.toLowerCase()}`" class="py-20 bg-cream-50">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Class header -->
      <div class="text-center mb-16">
        <span class="stamp text-rust-600 mb-4">Kelas</span>
        <h2 class="font-display text-6xl md:text-8xl text-navy-800 tracking-wider mt-4">
          {{ classCode }}
        </h2>
        <p class="font-serif text-xl text-brown-600 italic mt-2">{{ className }}</p>
        <div class="retro-divider w-24 mx-auto mt-6" />
      </div>

      <!-- Page 1: All students grid -->
      <div class="mb-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="font-display text-2xl text-navy-600 tracking-wider">ANGGOTA KELAS</div>
          <div class="h-[2px] flex-grow bg-brown-200" />
        </div>
        
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          <StudentCard
            v-for="(student, index) in students"
            :key="index"
            :name="student.name"
            :photo="student.photo"
            :instagram="student.instagram"
            :tiktok="student.tiktok"
          />
        </div>
      </div>

      <!-- Page 2: Teacher & Officers -->
      <div class="mb-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="font-display text-2xl text-navy-600 tracking-wider">WALI KELAS & PENGURUS</div>
          <div class="h-[2px] flex-grow bg-brown-200" />
        </div>

        <div class="grid md:grid-cols-5 gap-8">
          <!-- Teacher (larger) -->
          <div class="md:col-span-2 flex justify-center">
            <div class="max-w-xs">
              <div class="polaroid" style="--rotation: -1deg;">
                <div class="aspect-[3/4] bg-cream-200 overflow-hidden">
                  <img 
                    v-if="teacher.photo"
                    :src="teacher.photo" 
                    :alt="teacher.name"
                    class="w-full h-full object-cover"
                  >
                  <div v-else class="w-full h-full flex items-center justify-center text-brown-300">
                    <UIcon name="i-lucide-user" class="w-20 h-20" />
                  </div>
                </div>
                <div class="mt-4 text-center">
                  <p class="font-serif text-navy-800 font-medium">{{ teacher.name }}</p>
                  <p class="text-sm text-rust-500 font-display tracking-wider">WALI KELAS</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Officers grid -->
          <div class="md:col-span-3">
            <div class="grid grid-cols-2 gap-6">
              <StudentCard
                v-for="(officer, index) in officers"
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
      </div>

      <!-- Page 3: Retro themed photos -->
      <div>
        <div class="flex items-center gap-4 mb-8">
          <div class="font-display text-2xl text-navy-600 tracking-wider">MOMEN BERSAMA</div>
          <div class="h-[2px] flex-grow bg-brown-200" />
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div 
            v-for="(photo, index) in retroPhotos" 
            :key="index"
            class="polaroid"
            :style="{ '--rotation': `${(index - 1) * 2}deg` }"
          >
            <div class="aspect-video bg-cream-200 overflow-hidden">
              <img 
                v-if="photo"
                :src="photo" 
                :alt="`Momen kelas ${classCode} - ${index + 1}`"
                class="w-full h-full object-cover"
              >
              <div v-else class="w-full h-full flex items-center justify-center text-brown-300">
                <UIcon name="i-lucide-image" class="w-16 h-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
