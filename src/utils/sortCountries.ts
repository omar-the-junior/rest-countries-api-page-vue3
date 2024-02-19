import type { Country } from '@/api/types'

export default function sortCountries(countries: Array<Country>) {
  return countries.sort((a, b) => {
    // Palestine and Egypt come first
    if (['Palestine', 'Egypt'].includes(a.name.common)) return -1
    if (['Palestine', 'Egypt'].includes(b.name.common)) return 1

    // Then countries that speak Arabic
    const aSpeaksArabic = a.languages && Object.values(a.languages).includes('Arabic')
    const bSpeaksArabic = b.languages && Object.values(b.languages).includes('Arabic')

    if (aSpeaksArabic && !bSpeaksArabic) return -1
    if (bSpeaksArabic && !aSpeaksArabic) return 1

    // Then sort by country name
    return a.name.common.localeCompare(b.name.common)
  })
}
