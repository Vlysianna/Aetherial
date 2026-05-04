<script setup lang="ts">
interface SekbidMember {
  name: string
  formalPhoto: string
  activityPhoto: string
  casualPhoto: string
  role: string
  instagram?: string
  tiktok?: string
}

interface Props {
  sekbidNumber: number
  sekbidName: string
  members: SekbidMember[]
}

defineProps<Props>()

const sekbidDescriptions: Record<number, string> = {
  1: 'Ketakwaan Terhadap Tuhan Yang Maha Esa',
  2: 'Kehidupan Berbangsa dan Bernegara',
  3: 'Pendidikan Pendahuluan Bela Negara',
  4: 'Kepribadian dan Budi Pekerti Luhur',
  5: 'Berorganisasi, Pendidikan Politik dan Kepemimpinan',
  6: 'Keterampilan dan Kewirausahaan'
}
</script>

<template>
  <section
    :id="`sekbid-${sekbidNumber}`"
    class="py-20 retro-texture relative overflow-hidden"
    :class="sekbidNumber % 2 === 0 ? 'bg-cream-50' : 'bg-navy-50'"
  >
    <div class="absolute inset-0 bg-retro-grid" :class="sekbidNumber % 2 === 0 ? 'opacity-20' : 'opacity-10'" />
    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
        <div class="flex items-center gap-4">
          <div class="retro-ticket px-5 py-3">
            <span class="font-display text-rust-600 text-2xl tracking-wider">SEKBID {{ sekbidNumber }}</span>
          </div>
          <div>
            <h3 class="font-serif text-2xl md:text-3xl text-navy-700 italic">
              {{ sekbidName || sekbidDescriptions[sekbidNumber] }}
            </h3>
            <div class="retro-divider w-24 mt-3" />
          </div>
        </div>
        <div class="sticker text-navy-900">Program Kerja</div>
      </div>

      <!-- Members -->
      <div class="space-y-10">
        <div
          v-for="(member, index) in members"
          :key="index"
          class="paper-stack retro-card p-6 md:p-8"
        >
          <div class="grid lg:grid-cols-[0.35fr_0.65fr] gap-6 items-center">
            <!-- Member info -->
            <div class="text-center lg:text-left">
              <span
                class="ribbon text-sm"
                style="--ribbon-bg: var(--color-navy-700); --ribbon-text: var(--color-cream-50);"
              >
                {{ member.role }}
              </span>
              <h4 class="font-serif text-xl text-navy-800 font-medium mt-3">{{ member.name }}</h4>

              <div class="flex justify-center lg:justify-start gap-3 mt-3">
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

            <!-- 3 Photos -->
            <div class="grid grid-cols-3 gap-4">
              <div class="polaroid" style="--rotation: -2deg;">
                <div class="aspect-[3/4] bg-cream-200 overflow-hidden">
                  <img
                    v-if="member.formalPhoto"
                    :src="member.formalPhoto"
                    :alt="`${member.name} - Formal`"
                    class="w-full h-full object-cover"
                  >
                  <div v-else class="w-full h-full flex items-center justify-center text-brown-300">
                    <UIcon name="i-lucide-user" class="w-12 h-12" />
                  </div>
                </div>
                <p class="text-xs text-center mt-2 text-brown-500 font-serif">Formal</p>
              </div>

              <div class="polaroid" style="--rotation: 0deg;">
                <div class="aspect-[3/4] bg-cream-200 overflow-hidden">
                  <img
                    v-if="member.activityPhoto"
                    :src="member.activityPhoto"
                    :alt="`${member.name} - Aktivitas`"
                    class="w-full h-full object-cover"
                  >
                  <div v-else class="w-full h-full flex items-center justify-center text-brown-300">
                    <UIcon name="i-lucide-activity" class="w-12 h-12" />
                  </div>
                </div>
                <p class="text-xs text-center mt-2 text-brown-500 font-serif">Aktivitas</p>
              </div>

              <div class="polaroid" style="--rotation: 2deg;">
                <div class="aspect-[3/4] bg-cream-200 overflow-hidden">
                  <img
                    v-if="member.casualPhoto"
                    :src="member.casualPhoto"
                    :alt="`${member.name} - Bebas`"
                    class="w-full h-full object-cover"
                  >
                  <div v-else class="w-full h-full flex items-center justify-center text-brown-300">
                    <UIcon name="i-lucide-smile" class="w-12 h-12" />
                  </div>
                </div>
                <p class="text-xs text-center mt-2 text-brown-500 font-serif">Gaya Bebas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
