import React from 'react';
import {
  ItemsList,
  NameItem,
  Price,
  Currency,
} from '../../../atoms/menuItems/menuItems';

export const MenuFood = () => {
  return (
    <ItemsList>
      <NameItem>Sernik</NameItem>
      <Price>13</Price>
      <Currency>PLN</Currency>

      <NameItem>Szarlotka</NameItem>
      <Price>10</Price>
      <Currency>PLN</Currency>

      <NameItem>Gofry</NameItem>
      <Price>8 </Price>
      <Currency>PLN</Currency>

      <NameItem>Naleśniki</NameItem>
      <Price>7 </Price>
      <Currency>PLN</Currency>

      <NameItem>Croissant</NameItem>
      <Price>6 </Price>
      <Currency>PLN</Currency>

      <NameItem>Lody</NameItem>
      <Price>5 </Price>
      <Currency>PLN</Currency>
    </ItemsList>
  );
};
export default MenuFood;
