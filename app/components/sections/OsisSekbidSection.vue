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
  <section :id="`sekbid-${sekbidNumber}`" class="py-20" :class="sekbidNumber % 2 === 0 ? 'bg-cream-50' : 'bg-navy-50'">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <div class="text-center mb-12">
        <div class="inline-block px-6 py-2 border-2 border-rust-400 mb-4">
          <span class="font-display text-rust-600 text-2xl tracking-wider">SEKBID {{ sekbidNumber }}</span>
        </div>
        <h3 class="font-serif text-2xl md:text-3xl text-navy-700 italic">
          {{ sekbidName || sekbidDescriptions[sekbidNumber] }}
        </h3>
        <div class="retro-divider w-24 mx-auto mt-6" />
      </div>

      <!-- Members -->
      <div class="space-y-12">
        <div 
          v-for="(member, index) in members" 
          :key="index"
          class="retro-card p-6 md:p-8"
        >
          <div class="grid md:grid-cols-4 gap-6">
            <!-- Member info -->
            <div class="md:col-span-1 text-center md:text-left">
              <span class="inline-block px-3 py-1 bg-navy-700 text-cream-50 font-display tracking-wider text-sm mb-3">
                {{ member.role }}
              </span>
              <h4 class="font-serif text-xl text-navy-800 font-medium">{{ member.name }}</h4>
              
              <!-- Social -->
              <div class="flex justify-center md:justify-start gap-3 mt-3">
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
            <div class="md:col-span-3 grid grid-cols-3 gap-4">
              <!-- Formal photo -->
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

              <!-- Activity photo -->
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

              <!-- Casual photo -->
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
