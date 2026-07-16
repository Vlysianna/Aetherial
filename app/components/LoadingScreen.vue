<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isLoading = ref(true)
const progress = ref(0)
const isHiding = ref(false)

onMounted(() => {
  // Simulate progress
  const interval = setInterval(() => {
    if (progress.value < 90) {
      // Random increment between 2 and 15
      progress.value += Math.floor(Math.random() * 12) + 2
      if (progress.value > 90) progress.value = 90
    }
  }, 150)

  // When window is fully loaded (all images, etc.)
  const completeLoading = () => {
    clearInterval(interval)
    progress.value = 100
    
    // Wait for progress bar animation to complete
    setTimeout(() => {
      isHiding.value = true
      
      // Wait for fade out animation
      setTimeout(() => {
        isLoading.value = false
        document.body.style.overflow = ''
      }, 800) // matches fade-out duration
    }, 400)
  }

  // Prevent scrolling while loading
  document.body.style.overflow = 'hidden'

  if (document.readyState === 'complete') {
    completeLoading()
  } else {
    window.addEventListener('load', completeLoading)
  }
  
  // Fallback just in case load event takes too long or never fires
  // 10 seconds max loading screen
  const fallbackTimer = setTimeout(() => {
    if (isLoading.value) completeLoading()
  }, 10000)

  onUnmounted(() => {
    clearInterval(interval)
    clearTimeout(fallbackTimer)
    window.removeEventListener('load', completeLoading)
    document.body.style.overflow = ''
  })
})
</script>

<template>
  <Teleport to="body">
    <div 
      v-if="isLoading" 
      class="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-navy-950 transition-opacity duration-800 retro-texture"
      :class="isHiding ? 'opacity-0 pointer-events-none' : 'opacity-100'"
    >
      <div class="relative w-64 max-w-[80vw] flex flex-col items-center gap-8">
        
        <!-- Logo / Title -->
        <div class="text-center">
          <UIcon name="i-lucide-camera" class="w-12 h-12 text-rust-500 mb-4 mx-auto animate-bounce-slow" />
          <h1 class="font-display text-4xl text-cream-100 tracking-wider">
            AETHERIAL
          </h1>
          <p class="font-display text-xs tracking-[0.3em] text-brown-400 mt-2">CLASS OF 2026</p>
        </div>
        
        <!-- Progress Bar Container -->
        <div class="w-full space-y-3 mt-4">
          <div class="flex justify-between items-center text-xs">
            <span class="text-brown-300 font-serif italic">Menyiapkan kenangan...</span>
            <span class="text-rust-400 font-display font-bold">{{ progress }}%</span>
          </div>
          
          <div class="w-full h-1.5 bg-navy-900 rounded-full overflow-hidden border border-navy-800 shadow-inner">
            <div 
              class="h-full bg-gradient-to-r from-rust-600 to-rust-400 rounded-full transition-all duration-300 ease-out relative"
              :style="{ width: `${progress}%` }"
            >
              <div class="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.animate-bounce-slow {
  animation: bounce 3s infinite;
}
.duration-800 {
  transition-duration: 800ms;
}
</style>
