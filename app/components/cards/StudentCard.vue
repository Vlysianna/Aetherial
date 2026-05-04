<script setup lang="ts">
interface Student {
  name: string
  photo: string
  instagram?: string
  tiktok?: string
}

interface Props {
  photo: string
  name: string
  instagram?: string
  tiktok?: string
  role?: string
}

const props = defineProps<Props>()
const isHovered = ref(false)
const imageError = ref(false)
const showPhoto = computed(() => Boolean(props.photo) && !imageError.value)

watch(
  () => props.photo,
  () => {
    imageError.value = false
  }
)
</script>

<template>
  <div 
    class="group"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="photo-frame hover-lift">
      <!-- Photo 3:4 aspect ratio -->
      <div class="aspect-[3/4] bg-cream-200 overflow-hidden relative">
        <img 
          v-if="showPhoto"
          :src="photo" 
          :alt="name"
          class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105"
          @error="imageError = true"
        >
        <div v-else class="w-full h-full flex items-center justify-center text-brown-300">
          <UIcon name="i-lucide-user" class="w-16 h-16 transition-transform duration-500 group-hover:scale-110" />
        </div>
        
        <!-- Overlay on hover -->
        <div class="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div class="absolute bottom-0 left-0 right-0 p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <!-- Social media icons in overlay -->
            <div class="flex justify-center gap-3">
              <a 
                v-if="instagram" 
                :href="`https://instagram.com/${instagram}`"
                target="_blank"
                class="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-navy-800 hover:bg-rust-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <UIcon name="i-simple-icons-instagram" class="w-5 h-5" />
              </a>
              <a 
                v-if="tiktok" 
                :href="`https://tiktok.com/@${tiktok}`"
                target="_blank"
                class="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-navy-800 hover:bg-navy-700 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <UIcon name="i-simple-icons-tiktok" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Info -->
    <div class="mt-3 text-center">
      <p class="font-serif text-navy-800 font-medium text-sm md:text-base leading-tight transition-colors duration-300 group-hover:text-rust-600">
        {{ name }}
      </p>
      <p 
        v-if="role" 
        class="text-xs text-rust-500 font-display tracking-wider mt-1 uppercase opacity-90 group-hover:opacity-100 transition-opacity duration-300"
      >
        {{ role }}
      </p>
      
      <!-- Social media handles (desktop only) -->
      <div class="hidden sm:flex justify-center gap-2 mt-2 text-xs text-brown-400">
        <span v-if="instagram" class="group-hover:text-rust-500 transition-colors duration-300">
          @{{ instagram }}
        </span>
        <span v-if="instagram && tiktok" class="text-brown-300">•</span>
        <span v-if="tiktok" class="group-hover:text-navy-600 transition-colors duration-300">
          @{{ tiktok }}
        </span>
      </div>
    </div>
  </div>
</template>
