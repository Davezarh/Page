import React from 'react';
import {
  ItemsList,
  NameItem,
  Price,
  Currency,
} from '../../../atoms/menuItems/menuItems';
import { Description } from './menuCoffee.style';
const MenuCoffee = () => {
  return (
    <ItemsList>
      <NameItem>
        Americano
        <Description>
          Aromatyczna kawa pobudzi do działania bogactwem smakowych doznań.
        </Description>
      </NameItem>
      <Price>10</Price>
      <Currency>PLN</Currency>

      <NameItem>
        Cappuccino
        <Description>
          Pobudzające połączenie espresso, spienionego mleka, mlecznej pianki
          oraz posypki czekoladowej.
        </Description>
      </NameItem>
      <Price>10</Price>
      <Currency>PLN</Currency>

      <NameItem>
        Espresso
        <Description>
          Aromatyczna kawa, która doskonale pobudzi Cie do działania.
        </Description>
      </NameItem>
      <Price>10</Price>
      <Currency>PLN</Currency>

      <NameItem>
        Flat White
        <Description>
          Podwójne espresso z dodatkiem pełnotłustego mleka, jest to zatem dobra
          propozycja dla osób, ceniących sobie tradycyjne metody przygotowywania
          kawy.
        </Description>
      </NameItem>
      <Price>10</Price>
      <Currency>PLN</Currency>

      <NameItem>
        Latte
        <Description>
          Klasyczna kawa mleczna o intensywnym smaku z charakterystyczną dużą
          ilością mlecznej pianki.
        </Description>
      </NameItem>
      <Price>10</Price>
      <Currency>PLN</Currency>

      <NameItem>
        Mocha
        <Description>
          Jest to połączenie mocnej, aromatycznej kawy z najwyższej jakości
          czekoladą, takie połączenie uszczęśliwi nawet najbardziej wybredne
          podniebienia.
        </Description>
      </NameItem>
      <Price>10</Price>
      <Currency>PLN</Currency>
    </ItemsList>
  );
};
export default MenuCoffee;
