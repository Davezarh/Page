import React from 'react';
import {
  ItemsList,
  NameItem,
  Price,
  Currency,
} from '../../atoms/menuItems/menuItems';
export const Drinks = () => {
  return (
    <ItemsList>
      <NameItem>Smoothie</NameItem>
      <Price>13</Price>
      <Currency>PLN</Currency>

      <NameItem>Świeżo Wyciskany Sok</NameItem>
      <Price>11</Price>
      <Currency>PLN</Currency>

      <NameItem>Lemoniada</NameItem>
      <Price>9</Price>
      <Currency>PLN</Currency>

      <NameItem>Gorąca Czekolada</NameItem>
      <Price>8</Price>
      <Currency>PLN</Currency>

      <NameItem>Woda Mineralna</NameItem>
      <Price>3</Price>
      <Currency>PLN</Currency>
    </ItemsList>
  );
};

export default Drinks;
