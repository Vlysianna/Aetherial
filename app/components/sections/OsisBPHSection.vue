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
  <section id="osis" class="py-24 bg-navy-50 retro-texture relative overflow-hidden">
    <div class="absolute inset-0 bg-retro-grid opacity-20" />
    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <div class="grid lg:grid-cols-[0.35fr_0.65fr] gap-10 items-start">
        <!-- Section header -->
        <div class="retro-ticket p-6 md:p-8">
          <span class="font-display text-rust-500 text-sm tracking-[0.3em] uppercase">Organisasi Siswa</span>
          <h2 class="font-display text-5xl md:text-6xl text-navy-900 mt-2 tracking-wide">
            OSIS
          </h2>
          <p class="font-serif text-xl text-brown-600 italic mt-4">Badan Pengurus Harian</p>
          <div class="retro-divider w-24 mt-6" />
          <p class="font-serif text-sm text-brown-600 mt-6">
            Tim inti yang menjaga ritme kegiatan, memimpin program, dan memastikan semangat organisasi tetap hidup.
          </p>
          <div class="mt-6">
            <span class="sticker text-navy-900">BPH</span>
          </div>
        </div>

        <!-- BPH Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(member, index) in members"
            :key="index"
            class="flex justify-center"
          >
            <div class="paper-stack retro-card p-6 max-w-xs w-full text-center">
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

              <div class="mt-6 mb-3">
                <span
                  class="ribbon text-sm"
                  style="--ribbon-bg: var(--color-rust-500); --ribbon-text: var(--color-cream-50);"
                >
                  {{ member.role }}
                </span>
              </div>

              <h3 class="font-serif text-xl text-navy-800 font-medium">{{ member.name }}</h3>

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
    </div>
  </section>
</template>
