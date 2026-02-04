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
</script>

<template>
  <div class="group">
    <div class="photo-frame transition-all duration-300 group-hover:shadow-lg">
      <!-- Photo 3:4 aspect ratio -->
      <div class="aspect-[3/4] bg-cream-200 overflow-hidden">
        <img 
          v-if="photo"
          :src="photo" 
          :alt="name"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        >
        <div v-else class="w-full h-full flex items-center justify-center text-brown-300">
          <UIcon name="i-lucide-user" class="w-16 h-16" />
        </div>
      </div>
    </div>
    
    <!-- Info -->
    <div class="mt-3 text-center">
      <p class="font-serif text-navy-800 font-medium text-sm md:text-base leading-tight">{{ name }}</p>
      <p v-if="role" class="text-xs text-rust-500 font-display tracking-wider mt-1">{{ role }}</p>
      
      <!-- Social media -->
      <div class="flex justify-center gap-2 mt-2">
        <a 
          v-if="instagram" 
          :href="`https://instagram.com/${instagram}`"
          target="_blank"
          class="text-brown-400 hover:text-rust-500 transition-colors"
        >
          <UIcon name="i-simple-icons-instagram" class="w-4 h-4" />
        </a>
        <a 
          v-if="tiktok" 
          :href="`https://tiktok.com/@${tiktok}`"
          target="_blank"
          class="text-brown-400 hover:text-navy-600 transition-colors"
        >
          <UIcon name="i-simple-icons-tiktok" class="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
</template>
