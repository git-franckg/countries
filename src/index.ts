import Countries from './metadata.js'

export type Countries = typeof Countries
export type Country = Countries[number]
export type CountryIso2 = Country['iso2']
export type CountryIso3 = Country['iso3']
export type CountryIso4 = Exclude<Country['iso4'], null>
export type CountryIsoNum = Exclude<Country['isoNum'], null>
export type CountryName = Country['name']['FRA']
export { Countries }

function error(selector: "ISO2" | "ISO3" | "ISO4" | "ISONUM", value: string | number): never {
  throw new Error(`Country not found by ${selector}: ${JSON.stringify(value)}`)
}

export function getByIso2(iso2: CountryIso2): Country {
  return Countries.find((it) => it.iso2 == iso2) ?? error("ISO2", iso2)
}

export function getByIso3(iso3: CountryIso3): Country {
  return Countries.find((it) => it.iso3 == iso3) ?? error("ISO3", iso3)
}

export function getByIso4(iso4: CountryIso4): Country {
  return Countries.find((it) => it.iso4 == iso4) ?? error("ISO4", iso4)
}

export function getByIsoNum(isoNum: CountryIsoNum): Country {
  return Countries.find((it) => it.isoNum == isoNum) ?? error("ISONUM", isoNum)
}
