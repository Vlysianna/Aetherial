<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface NavItem {
  label: string
  to: string
  icon?: string
}

const isMenuOpen = ref(false)
const scrolled = ref(false)
const activeSection = ref('#hero')

const navItems: NavItem[] = [
  { label: 'Home', to: '#hero', icon: 'i-lucide-home' },
  { label: 'Sambutan', to: '#welcome', icon: 'i-lucide-message-circle' },
  { label: 'Kelas', to: '#classes', icon: 'i-lucide-users' },
  { label: 'OSIS', to: '#osis', icon: 'i-lucide-award' },
  { label: 'Ekskul', to: '#ekskul', icon: 'i-lucide-trophy' },
  { label: 'Penutup', to: '#closing', icon: 'i-lucide-heart' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
  
  // Update active section based on scroll position
  const sections = navItems.map(item => item.to)
  for (const section of sections) {
    const element = document.querySelector(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = section
        break
      }
    }
  }
}

const scrollToSection = (id: string) => {
  const element = document.querySelector(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-cream-50/98 backdrop-blur-md shadow-md border-b-2 border-brown-200' : 'bg-cream-50/95 backdrop-blur-sm border-b-2 border-brown-200'"
  >
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo with hover effect -->
        <a 
          href="#hero" 
          class="flex items-center gap-2 group" 
          @click.prevent="scrollToSection('#hero')"
        >
          <span class="font-display text-2xl text-navy-800 tracking-wider group-hover:text-rust-500 transition-colors">BTS</span>
          <span class="text-rust-500 text-xl group-hover:scale-110 transition-transform inline-block">|</span>
          <span class="font-serif text-sm text-brown-600 italic hidden sm:inline group-hover:text-rust-600 transition-colors">Yearbook</span>
        </a>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-1">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.to"
            class="relative px-4 py-2 font-display text-sm tracking-wider rounded transition-all duration-300"
            :class="activeSection === item.to 
              ? 'text-rust-500 bg-rust-50' 
              : 'text-navy-700 hover:text-rust-500 hover:bg-cream-100'"
            @click.prevent="scrollToSection(item.to)"
          >
            {{ item.label }}
            <!-- Active indicator -->
            <span 
              v-if="activeSection === item.to"
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-rust-500 rounded-full"
            />
          </a>
        </div>

        <!-- Mobile menu button -->
        <button 
          class="md:hidden p-2 text-navy-700 hover:text-rust-500 hover:bg-cream-100 rounded-lg transition-colors"
          @click="isMenuOpen = !isMenuOpen"
        >
          <UIcon :name="isMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile nav -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="isMenuOpen" class="md:hidden py-4 border-t border-brown-200">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.to"
            class="flex items-center gap-3 px-4 py-3 font-display text-sm tracking-wider rounded transition-all duration-200"
            :class="activeSection === item.to 
              ? 'text-rust-500 bg-rust-50' 
              : 'text-navy-700 hover:text-rust-500 hover:bg-cream-100'"
            @click.prevent="scrollToSection(item.to)"
          >
            <UIcon v-if="item.icon" :name="item.icon" class="w-5 h-5" />
            {{ item.label }}
          </a>
        </div>
      </Transition>
    </div>
  </nav>
</template>
