export interface Country {
  name: {
    common: string
    official: string
    nativeName: Record<
      string,
      {
        official: string
        common: string
      }
    >
  }
  tld: Array<string>
  currencies: Record<
    string,
    {
      name: string
      symbol: string
    }
  >

  capital: Array<string>
  flags: {
    png: string
    svg: string
    alt: string
  }
  region: string
  subregion: string
  languages: Record<string, string>
  borders: Array<string>
  population: number
  cca3: string
}

export interface FormattedCountry {
  name: {
    common: string
    nativeName: string
  }
  flags: {
    png: string
    svg: string
    alt: string
  }
  population: string
  region: string
  subRegion: string
  capital: string[]
  tld: string[]
  currencies: string[]
  languages: string[]
  borderCountries: {
    name: string
    code: string
  }[]
}
