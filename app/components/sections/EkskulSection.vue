<script setup lang="ts">
interface EkskulMember {
  name: string
  photo: string
  role: 'Pembina' | 'Pelatih' | 'Ketua' | 'Wakil' | 'Sekretaris' | 'Bendahara'
  instagram?: string
  tiktok?: string
}

interface Props {
  ekskulName: string
  ekskulIcon?: string
  members: EkskulMember[]
  coverPhoto?: string
}

defineProps<Props>()

const roleColors: Record<string, string> = {
  'Pembina': 'bg-navy-700',
  'Pelatih': 'bg-olive-600',
  'Ketua': 'bg-rust-500',
  'Wakil': 'bg-rust-400',
  'Sekretaris': 'bg-brown-500',
  'Bendahara': 'bg-brown-600'
}
</script>

<template>
  <section :id="`ekskul-${ekskulName.toLowerCase().replace(/\s+/g, '-')}`" class="py-20 bg-cream-50 retro-texture">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-3 mb-4">
          <UIcon v-if="ekskulIcon" :name="ekskulIcon" class="w-8 h-8 text-rust-500" />
          <h2 class="font-display text-4xl md:text-5xl text-navy-800 tracking-wider">
            {{ ekskulName.toUpperCase() }}
          </h2>
        </div>
        <div class="retro-divider w-24 mx-auto" />
      </div>

      <div class="retro-card p-6 md:p-10">
        <!-- Cover photo if available -->
        <div v-if="coverPhoto" class="mb-10">
          <div class="polaroid mx-auto max-w-3xl" style="--rotation: 0deg;">
            <div class="aspect-video bg-cream-200 overflow-hidden">
              <img 
                :src="coverPhoto" 
                :alt="ekskulName"
                class="w-full h-full object-cover"
              >
            </div>
          </div>
        </div>

        <!-- Members grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div 
            v-for="(member, index) in members" 
            :key="index"
            class="text-center"
          >
            <!-- Photo -->
            <div class="photo-frame mx-auto">
              <div class="aspect-[3/4] bg-cream-200 overflow-hidden">
                <img 
                  v-if="member.photo"
                  :src="member.photo" 
                  :alt="member.name"
                  class="w-full h-full object-cover"
                >
                <div v-else class="w-full h-full flex items-center justify-center text-brown-300">
                  <UIcon name="i-lucide-user" class="w-12 h-12" />
                </div>
              </div>
            </div>

            <!-- Role badge -->
            <div class="mt-4 mb-2">
              <span 
                class="inline-block px-3 py-1 text-white font-display tracking-wider text-xs"
                :class="roleColors[member.role] || 'bg-navy-600'"
              >
                {{ member.role }}
              </span>
            </div>

            <!-- Name -->
            <h4 class="font-serif text-sm text-navy-800 font-medium leading-tight">{{ member.name }}</h4>

            <!-- Social -->
            <div class="flex justify-center gap-2 mt-2">
              <a 
                v-if="member.instagram" 
                :href="`https://instagram.com/${member.instagram}`"
                target="_blank"
                class="text-brown-400 hover:text-rust-500 transition-colors"
              >
                <UIcon name="i-simple-icons-instagram" class="w-4 h-4" />
              </a>
              <a 
                v-if="member.tiktok" 
                :href="`https://tiktok.com/@${member.tiktok}`"
                target="_blank"
                class="text-brown-400 hover:text-navy-600 transition-colors"
              >
                <UIcon name="i-simple-icons-tiktok" class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
