import React from 'react';
import {
  DarkRoastedImage,
  LightRoastedImage,
  MediumRoastedImage,
  Wrapper,
  StyledText,
  StyledHeader,
} from './Beans.style';

const Beans = () => {
  return (
    <>
      <Wrapper>
        <LightRoastedImage />
        <StyledHeader>
          Jasno palone <span>196 °C - 205 °C</span>
        </StyledHeader>
        <StyledText>
          Lżejszy, wyższa kwasowość, nie oczywisty smak pieczeni ten poziom
          pieczeni jest idealny do degustacji pełnego pochodzenia kawy.
        </StyledText>
        <MediumRoastedImage />
        <StyledHeader>
          Średnio palone <span>210 °C - 219 °C</span>
        </StyledHeader>
        <StyledText>
          Cukry uległy dalszej karmelizacji, a kwasowość została wyciszona.
          Dzięki temu uzyskuje się kawę o wyższej zawartości, ale z pewną
          ilością narzuconego smaku palenia.
        </StyledText>
        <DarkRoastedImage />
        <StyledHeader>
          Ciemno palone <span>225 °C - 245 °C</span>
        </StyledHeader>
        <StyledText>
          Wyczuwalne są słodko-gorzkie smaki, wyraźnie zauważalny aromat i smak
          pieczeni. Niewiele, jeśli w ogóle, pozostało z nich oryginalnego
          charakteru.
        </StyledText>
      </Wrapper>
    </>
  );
};
export default Beans;
