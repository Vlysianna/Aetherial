<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useMouseParallax } from '~/composables/useMouseParallax'

const currentYear = new Date().getFullYear()
const scrollY = ref(0)
const isVisible = ref(false)
const isHoveringCard = ref(false)

// Mouse tracking for interactivity
const { mouseX, mouseY, resetMouse } = useMouseParallax()
const heroRef = ref<HTMLElement | null>(null)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

// Interactive 3D Card Style
const interactiveCardStyle = computed(() => {
  if (!isHoveringCard.value) {
    return {
      transform: `perspective(1000px) rotateX(2deg) rotateY(-5deg) rotateZ(2deg)`,
      transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)'
    }
  }
  
  const rotateX = -mouseY.value * 15
  const rotateY = mouseX.value * 15
  
  return {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05) translateZ(20px)`,
    transition: 'transform 0.1s ease-out'
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section 
    ref="heroRef"
    class="relative min-h-[100svh] bg-retro-warm retro-texture overflow-hidden flex items-center pt-16"
    @mouseleave="resetMouse"
  >
    <!-- Base Background -->
    <div class="absolute inset-0 bg-paper opacity-80 mix-blend-multiply" />

    <!-- Interactive Parallax Background Elements -->
    <div
      class="absolute -top-32 -right-32 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full opacity-40 bg-cream-100 pointer-events-none transition-transform duration-700 ease-out"
      :style="{
        border: '8px solid var(--color-cream-200)',
        transform: `translate(${mouseX * -30}px, ${mouseY * -30 + scrollY * 0.05}px) scale(1.1)`
      }"
    />
    
    <div
      class="absolute bottom-20 -left-10 w-64 h-64 border-[8px] border-olive-200 opacity-30 pointer-events-none transition-transform duration-700 ease-out"
      :style="{ 
        transform: `translate(${mouseX * 40}px, ${mouseY * 40 + scrollY * -0.1}px) rotate(${15 + mouseX * 10}deg)` 
      }"
    />

    <div
      class="absolute top-40 left-1/3 w-32 h-32 border-[4px] border-rust-300 rounded-full opacity-20 pointer-events-none transition-transform duration-1000 ease-out"
      :style="{ 
        transform: `translate(${mouseX * -50}px, ${mouseY * -20 + scrollY * 0.15}px)` 
      }"
    />

    <!-- Scrolling Marquee Tape (Vintage style) -->
    <div class="absolute top-20 left-0 w-full overflow-hidden bg-rust-700 text-cream-50 py-2 border-y-2 border-rust-900 z-0 transform -rotate-2 scale-110 opacity-0 shadow-lg" :class="{ 'animate-fade-in-up stagger-1 opacity-100': isVisible }">
      <div class="flex whitespace-nowrap animate-marquee">
        <div class="flex items-center gap-4 text-xs md:text-sm font-display tracking-[0.2em] uppercase">
          <span v-for="i in 10" :key="i" class="flex items-center gap-4">
            <UIcon name="i-lucide-star" class="w-4 h-4 text-rust-300" />
            CLASS OF 2026
            <UIcon name="i-lucide-aperture" class="w-4 h-4 text-rust-300" />
            AETHERIAL YEARBOOK
          </span>
        </div>
      </div>
    </div>

    <!-- Main Content Container -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
      
      <!-- LEFT COLUMN: Typography & Actions -->
      <div class="lg:col-span-6 flex flex-col justify-center relative z-20">
        
        <!-- Interactive Floating Badges -->
        <div
          class="flex flex-wrap items-center gap-4 opacity-0 mb-8 transition-transform duration-500 ease-out"
          :class="{ 'animate-fade-in-up stagger-2': isVisible }"
          :style="{ transform: `translate(${mouseX * -10}px, ${mouseY * -10}px)` }"
        >
          <div class="retro-ticket px-4 py-2 flex items-center justify-center bg-cream-50 border-2 border-navy-800 border-dashed hover:bg-navy-50 cursor-pointer transition-colors hover:scale-105">
            <span class="font-display text-navy-800 tracking-widest text-sm font-bold">EST. {{ currentYear }}</span>
          </div>
          <span
            class="ribbon text-sm shadow-md hover:-translate-y-1 transition-transform cursor-pointer"
            style="--ribbon-bg: var(--color-olive-600); --ribbon-text: var(--color-cream-50);"
          >
            ANGKATAN 51
          </span>
        </div>

        <!-- Dynamic Title -->
        <div
          class="relative opacity-0 transition-transform duration-700 ease-out"
          :class="{ 'animate-fade-in-up stagger-3': isVisible }"
          :style="{ transform: `translate(${mouseX * 15}px, ${mouseY * 15}px)` }"
        >
          <p class="font-serif text-rust-700 font-bold text-lg md:text-xl mb-2 flex items-center gap-3">
            <span class="w-8 h-[2px] bg-rust-500 inline-block"></span>
            SMK Negeri 24 Jakarta
          </p>
          
          <h1 class="font-display text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[9rem] leading-[0.85] tracking-normal text-navy-900 group cursor-default relative">
            <span class="block relative z-10 drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-2 group-hover:text-navy-700">
              BUKU
            </span>
            <span class="block text-rust-600 relative z-10 drop-shadow-md transition-transform duration-300 group-hover:translate-x-4">
              TAHUNAN
            </span>
            <!-- Text shadow layer for 3D effect -->
            <span 
              class="absolute top-0 left-0 text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[9rem] leading-[0.85] tracking-normal text-cream-300 z-0 pointer-events-none"
              :style="{ transform: `translate(${mouseX * -20 + 8}px, ${mouseY * -20 + 8}px)` }"
              aria-hidden="true"
            >
              <span class="block">BUKU</span>
              <span class="block">TAHUNAN</span>
            </span>
          </h1>
        </div>

        <!-- Note Card -->
        <div
          class="retro-card bg-cream-50 p-6 md:p-8 mt-10 opacity-0 max-w-xl relative shadow-xl border-t-8 border-t-navy-800 transition-transform duration-500 ease-out hover:scale-[1.02] cursor-text"
          :class="{ 'animate-fade-in-up stagger-4': isVisible }"
          :style="{ transform: `translate(${mouseX * -5}px, ${mouseY * -5}px)` }"
        >
          <UIcon name="i-lucide-quote" class="absolute -top-4 -right-4 w-10 h-10 text-rust-200 bg-white rounded-full p-1 border-2 border-rust-100" />
          <p class="font-serif text-lg md:text-xl text-navy-800 italic leading-relaxed">
            Menyatukan ribuan cerita dalam satu ruang waktu. Aetherial membawa kembali momen klasik dengan sentuhan interaktif masa kini.
          </p>
        </div>

        <!-- Interactive Buttons -->
        <div
          class="flex flex-col sm:flex-row flex-wrap gap-4 mt-10 opacity-0"
          :class="{ 'animate-fade-in-up stagger-5': isVisible }"
        >
          <a
            href="#classes"
            class="group relative px-8 py-4 bg-navy-800 text-cream-50 font-display text-xl tracking-wider text-center rounded-sm overflow-hidden shadow-lg transition-transform hover:-translate-y-1 active:translate-y-0"
          >
            <span class="absolute inset-0 w-full h-full bg-navy-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span class="relative z-10 flex items-center justify-center gap-2">
              JELAJAHI KELAS
              <UIcon name="i-lucide-arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a
            href="#ekskul"
            class="group px-8 py-4 bg-transparent border-2 border-rust-600 text-rust-700 font-display text-xl tracking-wider text-center rounded-sm transition-all hover:bg-rust-50 hover:shadow-md hover:-translate-y-1 active:translate-y-0"
          >
            <span class="flex items-center justify-center gap-2">
              OSIS & EKSKUL
            </span>
          </a>
        </div>
      </div>

      <!-- RIGHT COLUMN: Interactive 3D Collage -->
      <div class="lg:col-span-6 relative flex justify-center items-center mt-16 lg:mt-0 perspective-1000">
        
        <!-- Interactive 3D Card Stack -->
        <div 
          class="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[360px] lg:max-w-[400px] aspect-[3/4] opacity-0 z-20 cursor-crosshair group"
          :class="{ 'animate-fade-in stagger-3': isVisible }"
          :style="interactiveCardStyle"
          @mouseenter="isHoveringCard = true"
          @mouseleave="isHoveringCard = false"
        >
          <!-- Main Album Cover (Top Layer) -->
          <div class="absolute inset-0 bg-cream-50 rounded-lg p-3 md:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-brown-200 z-30 transition-transform duration-300 ease-out group-hover:translate-z-10 group-hover:-translate-y-4">
            
            <!-- Book Spine Effect -->
            <div class="absolute left-0 top-0 bottom-0 w-4 md:w-6 bg-rust-800 rounded-l-lg border-r-2 border-rust-950 shadow-inner overflow-hidden">
               <!-- Texture on spine -->
               <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] mix-blend-overlay"></div>
               <div class="h-full flex flex-col justify-center items-center py-8">
                 <span class="writing-vertical font-display text-cream-200 tracking-widest text-xs rotate-180 opacity-50">VOL. 51</span>
               </div>
            </div>

            <!-- Cover Content -->
            <div class="ml-4 md:ml-6 h-full border-4 border-brown-800 border-double p-2 flex flex-col relative bg-cream-100 overflow-hidden group/inner">
              
              <div class="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] mix-blend-multiply pointer-events-none"></div>
              
              <!-- Vintage Stamp -->
              <div class="absolute top-4 right-4 w-16 h-16 border-2 border-rust-500 rounded-full flex flex-col items-center justify-center opacity-70 rotate-[15deg] group-hover/inner:rotate-[180deg] transition-transform duration-1000">
                <span class="font-display text-[10px] text-rust-600 leading-none">EST</span>
                <span class="font-display text-sm text-rust-600 font-bold leading-none">2026</span>
              </div>

              <div class="flex-1 flex flex-col items-center justify-center text-center mt-8">
                <UIcon name="i-lucide-camera-retro" class="w-16 h-16 md:w-20 md:h-20 text-navy-800 mb-6 drop-shadow-md group-hover/inner:scale-110 transition-transform" />
                
                <h2 class="font-display text-4xl md:text-5xl text-navy-900 tracking-widest leading-none drop-shadow-sm">AETHERIAL</h2>
                <div class="w-24 h-1 bg-rust-500 my-4 shadow-sm"></div>
                <p class="font-serif italic text-navy-700 text-sm md:text-base">The Golden Era</p>
              </div>

              <!-- Interactive Hint -->
              <div class="mt-auto pt-4 border-t border-brown-300 text-center relative z-10 flex items-center justify-center gap-2 text-rust-700 font-display text-xs tracking-widest bg-cream-50/50 py-2 rounded">
                 <UIcon name="i-lucide-mouse-pointer-click" class="w-4 h-4 animate-bounce" />
                 HOVER ME
              </div>
            </div>
          </div>

          <!-- Layer 2: Polaroid 1 (Behind main cover) -->
          <div class="absolute -top-4 -right-6 md:-top-8 md:-right-12 w-32 md:w-48 aspect-[3/4] bg-white p-2 md:p-3 pb-8 md:pb-12 shadow-xl border border-gray-200 rotate-[15deg] z-20 transition-all duration-500 group-hover:translate-x-6 md:group-hover:translate-x-12 group-hover:-translate-y-4 md:group-hover:-translate-y-8 group-hover:rotate-[25deg]">
            <div class="w-full h-full bg-olive-200 flex items-center justify-center overflow-hidden relative">
               <div class="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
               <UIcon name="i-lucide-image" class="w-10 h-10 text-olive-700 opacity-50" />
            </div>
            <p class="font-serif text-sm mt-3 text-center text-gray-600 rotate-[-2deg] font-bold handwriting">Class of '26</p>
          </div>

          <!-- Layer 3: Film Strip (Behind) -->
          <div class="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-8 w-48 md:w-64 h-16 md:h-24 bg-black p-1.5 md:p-2 flex gap-2 shadow-2xl rotate-[-10deg] z-10 transition-all duration-500 group-hover:-translate-x-6 md:group-hover:-translate-x-12 group-hover:translate-y-4 md:group-hover:translate-y-8 group-hover:rotate-[-20deg]">
            <div v-for="i in 3" :key="i" class="flex-1 bg-white/10 rounded-sm flex items-center justify-center relative overflow-hidden">
               <div class="absolute top-0 bottom-0 left-1 w-[2px] border-l border-r border-white/30 flex flex-col justify-between py-1">
                 <span v-for="j in 6" :key="`h1-${j}`" class="w-full h-1 bg-white/50"></span>
               </div>
               <div class="absolute top-0 bottom-0 right-1 w-[2px] border-l border-r border-white/30 flex flex-col justify-between py-1">
                 <span v-for="j in 6" :key="`h2-${j}`" class="w-full h-1 bg-white/50"></span>
               </div>
            </div>
          </div>
          
          <!-- Layer 4: Post-it note -->
          <div class="absolute top-1/2 -left-8 md:-left-16 w-24 h-24 md:w-32 md:h-32 bg-yellow-200 shadow-md p-3 md:p-4 rotate-[-15deg] z-40 transition-all duration-500 group-hover:-translate-x-4 md:group-hover:-translate-x-8 group-hover:scale-110">
            <div class="w-full h-4 bg-red-400/20 absolute top-0 left-0"></div> <!-- tape -->
            <p class="font-serif text-lg text-navy-800 leading-tight mt-2 handwriting">Don't forget<br/>to smile! :)</p>
          </div>

        </div>

        <!-- Decorative Scattered Items -->
        <div 
          class="absolute top-10 right-0 w-16 h-16 opacity-0 transition-transform duration-700 ease-out pointer-events-none"
          :class="{ 'animate-rotate-in stagger-5': isVisible }"
          :style="{ transform: `translate(${mouseX * 30}px, ${mouseY * 30}px) rotate(${scrollY * 0.2}deg)` }"
        >
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z' fill='%23E8734A'/></svg>" alt="Star" class="w-full h-full drop-shadow-md" />
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-30 transition-transform" :style="{ transform: `translateY(${mouseY * 10}px)` }">
      <span class="font-display text-[10px] md:text-xs text-navy-600 tracking-[0.3em] mb-2 uppercase bg-cream-50/80 px-3 py-1 rounded-full backdrop-blur-sm border border-navy-200">Scroll to Explore</span>
      <div class="w-[2px] h-12 bg-gradient-to-b from-navy-800 to-transparent">
        <div class="w-full h-4 bg-rust-500 animate-slide-down"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

.writing-vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.handwriting {
  font-family: 'Caveat', 'Comic Sans MS', cursive; /* Generic fallback for handwriting feel */
}

/* Custom Animation for Marquee */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
  width: max-content;
}

/* Custom Animation for Scroll Indicator */
@keyframes slide-down {
  0% { transform: translateY(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(300%); opacity: 0; }
}

.animate-slide-down {
  animation: slide-down 1.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}

.translate-z-10 {
  transform: translateZ(30px);
}
</style>
