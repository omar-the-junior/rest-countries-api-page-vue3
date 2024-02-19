import type { Country, FormattedCountry } from '@/api/types'
import type { CountriesByCode } from '@/stores/countries'

export const formatCountry = (
  country: Country,
  allCountries: CountriesByCode
): FormattedCountry => {
  const languages = Object.values(country.languages)
  const singleLanuageKey = Object.keys(country.languages)[0]
  const nativeName = country.name.nativeName[singleLanuageKey]?.common
  const currenciesObjectsArray = Object.values(country.currencies)
  const currenciesStringArray = currenciesObjectsArray.map((currency) => currency.name)
  const borderCountries = getCountriesNameByCca3(country.borders, allCountries)

  return {
    name: {
      common: country.name.common,
      nativeName
    },
    flags: country.flags,
    population: country.population.toLocaleString(),
    region: country.region,
    subRegion: country.subregion,
    capital: country.capital,
    tld: country.tld,
    currencies: currenciesStringArray,
    languages: languages,
    borderCountries
  }
}

export const getCountriesNameByCca3 = (countriesArray: string[], allCountries: CountriesByCode) =>
  countriesArray.reduce((previousValue: { name: string; code: string }[], countryCode) => {
    const name = allCountries[countryCode]?.name.common
    if (name) {
      previousValue.push({
        name,
        code: countryCode
      })
    }
    return previousValue
  }, [])
