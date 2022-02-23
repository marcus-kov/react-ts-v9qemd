import React, { useCallback, useEffect, useState } from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Categories from './components/Categories';
import List from './components/List';
import { mapCountriesData } from './util';
import { getData } from './service';
import type { MappedData } from './types';

import './style.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('Asia');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [mappedCountries, setMappedCountries] = useState<MappedData>({
    items: [],
  });

  useEffect(() => {
    async function getCountries() {
      const response = await getData();
      setMappedCountries(mapCountriesData(response));
    }
    getCountries();
  }, []);

  const onCategorySelect = useCallback(
    (name) => setSelectedCategory(name),
    [setSelectedCategory]
  );

  const onItemSelect = useCallback((itemName: string) => {
    setSelectedItems((prevItems: string[]) =>
      prevItems.includes(itemName)
        ? prevItems.filter((itemName) => itemName !== itemName)
        : [...prevItems, itemName]
    );
  }, []);

  return (
    <div>
      <Header
        title="Utopia Country Highlighter" // This kinda stuff should be moved to some config but for sake of simplicity I will leave it as is
        logoUrl="https://utopiamusic.com/logo.png"
      />

      {mappedCountries?.items.length && (
        <div>
          <Categories
            items={mappedCountries.items}
            callbackHandler={onCategorySelect}
            selectedCategory={selectedCategory}
          />

          <List
            items={mappedCountries[selectedCategory]}
            selectedItems={selectedItems}
            onItemSelect={onItemSelect}
          />
        </div>
      )}
    </div>
  );
};

render(<App />, document.getElementById('root'));
