import { ref, onMounted, onUnmounted } from 'vue'

export const useMouseParallax = () => {
  const mouseX = ref(0)
  const mouseY = ref(0)

  const handleMouseMove = (e: MouseEvent) => {
    if (typeof window === 'undefined') return
    mouseX.value = (e.clientX / window.innerWidth) * 2 - 1
    mouseY.value = (e.clientY / window.innerHeight) * 2 - 1
  }

  const resetMouse = () => {
    mouseX.value = 0
    mouseY.value = 0
  }

  onMounted(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove)
    }
  })

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  })

  return { mouseX, mouseY, resetMouse }
}
