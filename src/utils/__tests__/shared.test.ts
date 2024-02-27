import { switchDocumentThemeClass } from '../shared'

describe('switchDocumentThemeClass', () => {
  afterEach(() => {
    // Cleanup the HTML tag classname after finishing
    document.documentElement.classList.remove('dark')
  })

  describe('If "the argument was "dark"', () => {
    it('Should add "dark" class to the HTML tag', () => {
      switchDocumentThemeClass('dark')
      expect(document.documentElement).toHaveClass('dark')
    })
  })

  describe('If the argument was "light"', () => {
    it('Should remove "dark" class from the HTML tag', () => {
      document.documentElement.classList.add('dark')
      switchDocumentThemeClass('light')
      expect(document.documentElement).not.toHaveClass('dark')
    })
  })
})
