import React from 'react';
import MenuCoffee from '../../molecules/menuMolecules/MenuCoffee/menuCoffee';
import MenuTea from '../../molecules/menuMolecules/MenuTea/menuTea';
import MenuDrinks from '../../molecules/menuMolecules/MenuDrinks/menuDrinks';
import MenuFood from 'components/molecules/menuMolecules/MenuFood/menuFood';
import Footer from 'components/organisms/Footer/Footer';
import { Header, Wrapper } from './Menu.style';
const Menu = () => {
  return (
    <>
      <Wrapper>
        <Header>Kawy </Header>
        <MenuCoffee></MenuCoffee>
        <Header>Herbaty</Header>
        <MenuTea></MenuTea>
        <Header>Pozostałe napoje</Header>
        <MenuDrinks></MenuDrinks>
        <Header>Przekąski</Header>
        <MenuFood></MenuFood>
      </Wrapper>
      <Footer></Footer>
    </>
  );
};
export default Menu;
