import React from 'react';
import styled from 'styled-components';

type Props = {
  items: string[];
  callbackHandler: (name: string) => void;
  selectedCategory?: string;
};

const Continents: React.FC<Props> = ({
  items,
  callbackHandler,
  selectedCategory,
}) => {
  const isSelected = (name: string) => name === selectedCategory;

  return (
    <Wrapper>
      {items.map((item: string) => (
        <Item
          key={item}
          onClick={() => callbackHandler(item)}
          selected={isSelected(item)}
        >
          {item}
        </Item>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Item = styled.div<{ selected: boolean }>`
  background: ${({ selected }) => selected && '#e3127e'};
  border: 1px solid #e3127e;
  border-radius: 7px 7px 0 0;
  color: ${({ selected }) => selected && '#fff'};
  cursor: pointer;
  margin: 10px 10px 0 10px;
  min-width: 50px;
  padding: 5px;
  text-align: center;
  text-overflow: ellipsis; 
  overflow: hidden;
  white-space: nowrap; 

  &:hover {
    background-color: #e3127e;
    color: #fff;
  }
`;

export default Continents;
