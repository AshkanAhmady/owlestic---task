export interface RegionSelectOptionsType {
  value: string;
  label: string;
}

export interface ChildsComponentsType {
  children: React.ReactNode;
}

export interface InitialSingleCountryStateType {
  loading: boolean;
  data: any;
  error: any;
}

export interface SingleCountryType {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: Array<string>;
  area: number;
  borders: Array<string>;
  callingCodes: Array<string>;
  capital: string;
  cioc: string;
  currencies: Array<{ code: string; name: string; symbol: string }>;
  demonym: string;
  flag: string;
  flags: { png: string; svg: string };
  gini: number;
  independent: boolean;
  languages: Array<{
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }>;
  latlng: Array<number>;
  name: string;
  nativeName: string;
  numericCode: string;
  population: number;
  region: string;
  regionalBlocs: Array<{
    acronym: string;
    name: string;
    otherNames: Array<string>;
  }>;
  subregion: string;
  timezones: Array<string>;
  topLevelDomain: Array<string>;
  translations: any;
}
