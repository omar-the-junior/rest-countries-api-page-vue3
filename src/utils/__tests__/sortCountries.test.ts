// import the necessary modules
import { expect } from 'vitest'
import sortCountries from '@/utils/sortCountries'
import type { Country } from '@/api/types'

// define a test suite for the sortCountries function
describe('sortCountries', () => {
  // define a test case for the sorting logic
  test('should sort countries correctly', () => {
    // define some mock data
    const countries = [
      {
        name: {
          common: 'France'
        },
        languages: { fr: 'French' }
      },
      {
        name: {
          common: 'Egypt'
        },
        languages: { ar: 'Arabic' }
      },
      {
        name: {
          common: 'Palestine'
        },
        languages: { ar: 'Arabic' }
      },
      {
        name: {
          common: 'Germany'
        },
        languages: { de: 'German' }
      },
      {
        name: {
          common: 'Saudi Arabia'
        },
        languages: { ar: 'Arabic' }
      }
    ] as unknown as Array<Country>

    // call the function with the mock data
    const sortedCountries = sortCountries(countries)

    // assert that the countries are sorted correctly
    expect(sortedCountries[0].name.common).toBe('Palestine')
    expect(sortedCountries[1].name.common).toBe('Egypt')
    expect(sortedCountries[2].name.common).toBe('Saudi Arabia')
    expect(sortedCountries[3].name.common).toBe('France')
    expect(sortedCountries[4].name.common).toBe('Germany')
  })
})
