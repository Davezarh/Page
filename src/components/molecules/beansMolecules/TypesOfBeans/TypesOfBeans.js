import React from 'react';
import {
  Text,
  Header,
  Arabica,
  Robusta,
  Wrapper,
  Main,
  Head,
} from './TypesOfBeans.styled';
const TypesOfBeans = () => {
  return (
    <Main>
      <Head>Rodzaj Ziarna</Head>
      <Wrapper>
        <Arabica />
        <Header>Arabica</Header>
        <Text>
          Uprawia się ja głównie w Ameryce Łacińskiej i Afryce. Wyróżnia się ze
          względu na jej przyjemny, pozbawiony goryczy, lekko kwaskowaty smak.
          Zawiera w sobie od 1 do 1.5% kofeiny. Jeśli pragniesz się zrelaksować,
          jednocześnie obejrzeć swój ulubiony serial, film czy też poczytać
          książkę, kawa na bazie ziaren Arabiki, będzie doskonałą propozycją dla
          Ciebie.
        </Text>
        <Robusta />
        <Header>Robusta</Header>
        <Text>
          Pochodzi ona głównie z Afryki i Indonezji. Smak jest bardzo
          intensywny, ostry ,ziemisty, oraz odznacza się lekką goryczą.
          Najważniejszą cechą Robusty, jest wysoka zawartość kofeiny w każdym
          ziarnie nawet do 2.5%. Jest to idealna propozycja dla osób, które
          potrzebują mocnego pobudzenia o poranku.
        </Text>
      </Wrapper>
    </Main>
  );
};
export default TypesOfBeans;
