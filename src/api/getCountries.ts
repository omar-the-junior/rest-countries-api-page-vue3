import axios from 'axios'
import type { Country } from './types'
import sortCountries from '@/utils/sortCountries'

export const getAllCountries = async () => {
  const url =
    'https://restcountries.com/v3.1/all?fields=name,tld,population,currencies,region,languages,subregion,capital,borders,flags,cca3'

  const response = await axios.get<Country[]>(url)

  const countries = response.data.filter((country) => country.cca3 !== 'ISR')
  return sortCountries(countries)
}
