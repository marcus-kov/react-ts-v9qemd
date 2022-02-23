import React from 'react';
import styled from 'styled-components';
import type { Country } from '../types';

type Props = {
  items: Country[];
  onItemSelect: (name: string) => void;
  selectedItems: string[];
};

const List: React.FC<Props> = ({ items, onItemSelect, selectedItems }) => {
  const isSelected = (name: string) => selectedItems.includes(name);

  return (
    <Wrapper>
      {items.map(({ name }) => (
        <CountryItem
          key={name}
          onClick={() => onItemSelect(name)}
          selected={isSelected(name)}
        >
          {name}
        </CountryItem>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-self: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 15px;
  width: 100%;
`;

const CountryItem = styled.div<{ selected: boolean }>`
  border-radius: 4px;
  border: 1px solid ${({ selected }) => (selected ? '#e3127e' : '#000000')};
  color: ${({ selected }) => (selected ? '#e3127e' : '#000000')};
  cursor: pointer;
  padding: 5px;
  margin: 5px;
  text-overflow: ellipsis; 
  text-align: center;
  overflow: hidden;
  white-space: nowrap; 
  width: 100px; 
`;

export default List;
