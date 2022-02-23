import type { Country, MappedData } from './types';

export const mapCountriesData = (countries: Country[]) => {
  const categories: MappedData = {
    items: [],
  };

  for (let i = 0; i < countries.length; i++) {
    const current = categories[countries[i].continent];

    if (!current) {
      categories[countries[i].continent] = [];
      categories.items.push(countries[i].continent);
    }
    categories[countries[i].continent].push(countries[i]);
  }

  return categories;
};
