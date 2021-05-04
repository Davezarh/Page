import React from 'react';
import {
  DarkRoastedImage,
  LightRoastedImage,
  MediumRoastedImage,
  Wrapper,
  Text,
  Header,
} from './RoastedBeans.styled';
const RoastedBeans = () => {
  return (
    <>
      <Wrapper>
        <LightRoastedImage />
        <Header>
          Jasno palone <span>196 °C - 205 °C</span>
        </Header>
        <Text>
          Lżejszy, wyższa kwasowość, nie oczywisty smak pieczeni ten poziom
          pieczeni jest idealny do degustacji pełnego pochodzenia kawy.
        </Text>
        <MediumRoastedImage />
        <Header>
          Średnio palone <span>210 °C - 219 °C</span>
        </Header>
        <Text>
          Cukry uległy dalszej karmelizacji, a kwasowość została wyciszona.
          Dzięki temu uzyskuje się kawę o wyższej zawartości, ale z pewną
          ilością narzuconego smaku palenia.
        </Text>
        <DarkRoastedImage />
        <Header>
          Ciemno palone <span>225 °C - 245 °C</span>
        </Header>
        <Text>
          Wyczuwalne są słodko-gorzkie smaki, wyraźnie zauważalny aromat i smak
          pieczeni. Niewiele, jeśli w ogóle, pozostało z nich oryginalnego
          charakteru.
        </Text>
      </Wrapper>
    </>
  );
};
export default RoastedBeans;
