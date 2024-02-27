import NavBar from '../NavBar.vue'
import { createTestingPinia } from '@pinia/testing'
import { useThemeStore } from '@/stores/theme'
import { render, screen } from '@testing-library/vue'
import { RouterLinkStub } from '@vue/test-utils'

beforeEach(() => {
  const pinia = createTestingPinia()
  const themeStore = useThemeStore()

  themeStore.currentTheme = 'dark'
  render(NavBar, {
    global: {
      stubs: {
        RouterLink: RouterLinkStub
      },
      plugins: [pinia]
    }
  })
})

describe('NavBar', () => {
  it('renders properly', () => {
    // Assert that the NavBar component is rendered
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('contains phrase "Where in the World?"', () => {
    const phrase = screen.getByRole('link', { name: /Where in the World?/i })
    expect(phrase).toBeInTheDocument()
  })

  it('contains dark mode button', () => {
    const button = screen.getByRole('button', { name: /dark mode/i })
    expect(button).toBeInTheDocument()
  })
})
