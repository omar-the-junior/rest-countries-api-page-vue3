import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('themeStore', () => {
  const currentTheme = ref<'light' | 'dark'>('light')

  const switchThemeTo = (theme: 'dark' | 'light') => {
    localStorage.setItem('theme', theme)
    currentTheme.value = theme
  }

  const toggleTheme = () => {
    const newTheme = currentTheme.value === 'dark' ? 'light' : 'dark'
    switchThemeTo(newTheme)
  }

  return { currentTheme, switchThemeTo, toggleTheme }
})
