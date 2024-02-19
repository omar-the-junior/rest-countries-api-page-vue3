import { ref, type Ref } from 'vue'
type Theme = 'dark' | 'light'
export const switchDocumentThemeClass = (theme: Ref<Theme> | Theme) => {
  const themeRef = ref(theme)
  if (themeRef.value === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
