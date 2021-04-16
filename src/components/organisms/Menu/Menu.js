import React from 'react';
import { StyledMenu, Wrapper } from './Menu.style';
import { Coffee } from '../../../Data/Data';
import MenuItems from 'components/molecules/MenuItems/MenuItems';

const Menu = () => {
  return (
    <>
      <Wrapper>
        <StyledMenu>
          {Coffee.map((coffeData) => (
            <MenuItems key={coffeData.name} coffeData={coffeData} />
          ))}
        </StyledMenu>
      </Wrapper>
    </>
  );
};

export default Menu;
