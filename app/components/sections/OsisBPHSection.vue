<script setup lang="ts">
interface BPHMember {
  name: string
  photo: string
  role: 'Ketua' | 'Wakil Ketua' | 'Sekretaris 1' | 'Sekretaris 2' | 'Bendahara 1' | 'Bendahara 2'
  instagram?: string
  tiktok?: string
}

interface Props {
  members: BPHMember[]
}

defineProps<Props>()

const roleOrder = ['Ketua', 'Wakil Ketua', 'Sekretaris 1', 'Sekretaris 2', 'Bendahara 1', 'Bendahara 2']
</script>

<template>
  <section id="osis" class="py-24 bg-navy-50 retro-texture">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <div class="text-center mb-16">
        <span class="font-display text-rust-500 text-lg tracking-[0.3em] uppercase">Organisasi Siswa</span>
        <h2 class="font-display text-5xl md:text-7xl text-navy-800 mt-2 tracking-wide">
          OSIS
        </h2>
        <p class="font-serif text-xl text-brown-600 italic mt-4">Badan Pengurus Harian</p>
        <div class="retro-divider w-32 mx-auto mt-6" />
      </div>

      <!-- BPH Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(member, index) in members" 
          :key="index"
          class="flex justify-center"
        >
          <div class="retro-card p-6 max-w-xs w-full text-center">
            <!-- Photo -->
            <div class="photo-frame mx-auto w-48">
              <div class="aspect-[3/4] bg-cream-200 overflow-hidden">
                <img 
                  v-if="member.photo"
                  :src="member.photo" 
                  :alt="member.name"
                  class="w-full h-full object-cover"
                >
                <div v-else class="w-full h-full flex items-center justify-center text-brown-300">
                  <UIcon name="i-lucide-user" class="w-16 h-16" />
                </div>
              </div>
            </div>

            <!-- Role badge -->
            <div class="mt-6 mb-3">
              <span class="inline-block px-4 py-1 bg-rust-500 text-white font-display tracking-wider text-sm">
                {{ member.role }}
              </span>
            </div>

            <!-- Name -->
            <h3 class="font-serif text-xl text-navy-800 font-medium">{{ member.name }}</h3>

            <!-- Social -->
            <div class="flex justify-center gap-3 mt-4">
              <a 
                v-if="member.instagram" 
                :href="`https://instagram.com/${member.instagram}`"
                target="_blank"
                class="text-brown-400 hover:text-rust-500 transition-colors"
              >
                <UIcon name="i-simple-icons-instagram" class="w-5 h-5" />
              </a>
              <a 
                v-if="member.tiktok" 
                :href="`https://tiktok.com/@${member.tiktok}`"
                target="_blank"
                class="text-brown-400 hover:text-navy-600 transition-colors"
              >
                <UIcon name="i-simple-icons-tiktok" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
