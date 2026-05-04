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
  'Pembina': 'var(--color-navy-700)',
  'Pelatih': 'var(--color-olive-600)',
  'Ketua': 'var(--color-rust-500)',
  'Wakil': 'var(--color-rust-400)',
  'Sekretaris': 'var(--color-brown-500)',
  'Bendahara': 'var(--color-brown-600)'
}
</script>

<template>
  <section :id="`ekskul-${ekskulName.toLowerCase().replace(/\s+/g, '-')}`" class="py-20 bg-cream-50 retro-texture">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div>
          <div class="inline-flex items-center gap-3 mb-4">
            <UIcon v-if="ekskulIcon" :name="ekskulIcon" class="w-8 h-8 text-rust-500" />
            <h2 class="font-display text-4xl md:text-5xl text-navy-800 tracking-wider">
              {{ ekskulName.toUpperCase() }}
            </h2>
          </div>
          <div class="retro-divider w-24" />
        </div>
        <div class="retro-ticket px-4 py-2 text-xs font-display tracking-widest text-rust-700">
          UNIT KEGIATAN
        </div>
      </div>

      <div class="retro-card overflow-hidden">
        <!-- Cover photo if available -->
        <div v-if="coverPhoto" class="relative h-56 md:h-72">
          <img
            :src="coverPhoto"
            :alt="ekskulName"
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
          <div class="absolute bottom-4 left-4">
            <span class="sticker text-navy-900">Dokumentasi</span>
          </div>
        </div>

        <!-- Members grid -->
        <div class="p-6 md:p-8">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div
              v-for="(member, index) in members"
              :key="index"
              class="text-center"
            >
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

              <div class="mt-4 mb-2">
                <span
                  class="ribbon text-xs"
                  :style="{ '--ribbon-bg': roleColors[member.role] || 'var(--color-navy-600)', '--ribbon-text': 'var(--color-cream-50)' }"
                >
                  {{ member.role }}
                </span>
              </div>

              <h4 class="font-serif text-sm text-navy-800 font-medium leading-tight">{{ member.name }}</h4>

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
    </div>
  </section>
</template>
