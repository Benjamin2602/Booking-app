import countries from "world-countries";

const countriesFormatted = countries.map((item) => ({
  //value , label  , flag , latLang , region
  value: item.cca2,
  label: item.name.common,
  flag: item.flag,
  latLang: item.latlng,
  region: item.region,
}));

//hooks
export const useCountries = () => {
  const getAllCountries = () => countriesFormatted;

  const getCountryByValue = (value: string) => {
    return countriesFormatted.find((item) => item.value === value);
  };
  return {
    getAllCountries,
    getCountryByValue,
  };
};
