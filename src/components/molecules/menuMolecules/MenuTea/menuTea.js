import React from 'react';
import {
  ItemsList,
  NameItem,
  Price,
  Currency,
} from '../../../atoms/menuItems/menuItems';
const MenuDrinks = () => {
  return (
    <ItemsList>
      <NameItem>Oolong (Niebieska)</NameItem>
      <Price>9</Price>
      <Currency>PLN</Currency>

      <NameItem>Pu erh (Czerwona)</NameItem>
      <Price>9</Price>
      <Currency>PLN</Currency>

      <NameItem>Pai Mu Tan (Biała)</NameItem>
      <Price>9</Price>
      <Currency>PLN</Currency>

      <NameItem>Darjeeling (Czarna)</NameItem>
      <Price>8</Price>
      <Currency>PLN</Currency>

      <NameItem>Sencha (Zielona) </NameItem>
      <Price>7</Price>
      <Currency>PLN</Currency>

      <NameItem>Earl grey (Klasyczna) </NameItem>
      <Price>7</Price>
      <Currency>PLN</Currency>
    </ItemsList>
  );
};
export default MenuDrinks;
