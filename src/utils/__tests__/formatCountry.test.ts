import type { Country, FormattedCountry } from '@/api/types'
import type { CountriesByCode } from '@/stores/countries'
import { formatCountry } from '../formatCountry'

describe('formatCountry', () => {
  it('should format the country', () => {
    const mockCountry: Country = {
      name: {
        common: 'Mock Country',
        official: 'Mock Country',
        nativeName: {
          eng: {
            official: 'Mock Country',
            common: 'Mock Country'
          }
        }
      },
      tld: ['.mc'],
      currencies: {
        MOCK: {
          name: 'Mock Currency',
          symbol: 'M'
        }
      },
      capital: ['Mock Capital'],
      flags: {
        png: 'mock.png',
        svg: 'mock.svg',
        alt: 'Flag of Mock Country'
      },
      region: 'Mock Region',
      subregion: 'Mock Subregion',
      languages: {
        eng: 'English',
        mock: 'Mock Language'
      },
      borders: ['B1', 'B2', 'B3'],
      population: 1000000,
      cca3: 'MCK'
    }

    const formattedMockCountry: FormattedCountry = {
      name: {
        common: 'Mock Country',
        nativeName: 'Mock Country'
      },
      flags: {
        png: 'mock.png',
        svg: 'mock.svg',
        alt: 'Flag of Mock Country'
      },
      population: '1,000,000',
      region: 'Mock Region',
      subRegion: 'Mock Subregion',
      capital: ['Mock Capital'],
      tld: ['.mc'],
      currencies: ['Mock Currency'],
      languages: ['English', 'Mock Language'],
      borderCountries: [
        {
          code: 'B1',
          name: 'Mock Country'
        },
        {
          code: 'B2',
          name: 'Mock Country'
        },
        {
          code: 'B3',
          name: 'Mock Country'
        }
      ]
    }

    const allCountriesMock = {
      B1: {
        name: {
          common: 'Mock Country',
          official: 'Mock Country',
          nativeName: {
            eng: {
              official: 'Mock Country',
              common: 'Mock Country'
            }
          }
        },
        tld: ['.mc'],
        currencies: {
          MOCK: {
            name: 'Mock Currency',
            symbol: 'M'
          }
        },
        capital: ['Mock Capital'],
        flags: {
          png: 'mock.png',
          svg: 'mock.svg',
          alt: 'Flag of Mock Country'
        },
        region: 'Mock Region',
        subregion: 'Mock Subregion',
        languages: {
          eng: 'English',
          mock: 'Mock Language'
        },
        borders: ['B3'],
        population: 1000000,
        cca3: 'MCK'
      },
      B2: {
        name: {
          common: 'Mock Country',
          official: 'Mock Country',
          nativeName: {
            eng: {
              official: 'Mock Country',
              common: 'Mock Country'
            }
          }
        },
        tld: ['.mc'],
        currencies: {
          MOCK: {
            name: 'Mock Currency',
            symbol: 'M'
          }
        },
        capital: ['Mock Capital'],
        flags: {
          png: 'mock.png',
          svg: 'mock.svg',
          alt: 'Flag of Mock Country'
        },
        region: 'Mock Region',
        subregion: 'Mock Subregion',
        languages: {
          eng: 'English',
          mock: 'Mock Language'
        },
        borders: ['B1'],
        population: 1000000,
        cca3: 'MCK'
      },
      B3: {
        name: {
          common: 'Mock Country',
          official: 'Mock Country',
          nativeName: {
            eng: {
              official: 'Mock Country',
              common: 'Mock Country'
            }
          }
        },
        tld: ['.mc'],
        currencies: {
          MOCK: {
            name: 'Mock Currency',
            symbol: 'M'
          }
        },
        capital: ['Mock Capital'],
        flags: {
          png: 'mock.png',
          svg: 'mock.svg',
          alt: 'Flag of Mock Country'
        },
        region: 'Mock Region',
        subregion: 'Mock Subregion',
        languages: {
          eng: 'English',
          mock: 'Mock Language'
        },
        borders: ['B1', 'B2'],
        population: 1000000,
        cca3: 'MCK'
      }
    } satisfies CountriesByCode

    const result = formatCountry(mockCountry, allCountriesMock)

    expect(result).toEqual(formattedMockCountry)
  })
})

describe('getCountriesNameByCca3', () => {
  it('Should get the country by CCA3', () => {})
})
