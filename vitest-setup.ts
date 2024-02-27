// In your own vitest-setup.js (or any other name)
import '@testing-library/jest-dom/vitest'

import { cleanup } from '@testing-library/vue'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})
