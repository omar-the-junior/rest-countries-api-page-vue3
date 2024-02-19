import { mount } from '@vue/test-utils'
import NavBar from '../NavBar.vue'
import { createTestingPinia } from '@pinia/testing'
import { useThemeStore } from '@/stores/theme'

vi.mock('window')
describe('NavBar', () => {
  it('renders properly', () => {
    const pinia = createTestingPinia()
    const themeStore = useThemeStore()

    themeStore.currentTheme = 'dark'
    const element = mount(NavBar, {
      global: { plugins: [pinia] }
    })
    expect(element.text()).toContain(/Where in the world/i)
  })
})
