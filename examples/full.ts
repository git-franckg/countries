import { getByIso2, getByIso3, getByIsoNum } from '../src/index'

console.info("France using iso-3166 alpha-2", getByIso2("FR"))
console.info("France using iso-3166 alpha-3", getByIso3("FRA"))
// La france n'a pas d'ISO4, comme beaucoup de pays.
console.info("France using iso-3166 number", getByIsoNum("250"))

const { hasPhone, obsolete, iso2, iso3, iso4, isoNum, name: { FRA } } = getByIso3("FRA")
console.info({ hasPhone, obsolete, iso2, iso3, iso4, isoNum, name: { FRA } })
// {
//   hasPhone: true,
//   obsolete: false,
//   iso2: 'FR',
//   iso3: 'FRA',
//   iso4: null,
//   isoNum: '250',
//   name: { FRA: 'France' }
// }

