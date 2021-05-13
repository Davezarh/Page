import React from 'react';
import {
  Wrapper,
  FirstSection,
  ImageBox,
  Description,
  SecondSection,
} from './Reasons.style';
import { ReactComponent as Beans } from 'assets/images/home/icons/beans.svg';
import { ReactComponent as Coffee } from 'assets/images/home/icons/coffee.svg';
import { ReactComponent as Music } from 'assets/images/home/icons/music.svg';
import { ReactComponent as Coupon } from 'assets/images/home/icons/coupon.svg';
import { ReactComponent as Wifi } from 'assets/images/home/icons/wifi.svg';
import { ReactComponent as Horse } from 'assets/images/home/icons/horse.svg';
const Reasons = () => {
  return (
    <Wrapper>
      <h1>Dlaczego Light Cafe?</h1>
      <FirstSection>
        <ImageBox>
          <Coffee />
          Kawa
        </ImageBox>
        <Description>
          Kawa to najważniejszy początek dnia, u nas tworzona jest przez
          najlepszych baristów z możliwoscią wybrania składu własnej kawy.
        </Description>

        <ImageBox>
          <Beans />
          Nasiona
        </ImageBox>
        <Description>
          Preferencja dobrej kawy, dla każdego z nas inna. Wybór nasiona jest
          podstawą do zrobienia wspaniałej kawy, jeżeli nie wiesz które wybrać,
          pomożemy znaleźć dla ciebie najlepsze połączenie.
        </Description>

        <ImageBox>
          <Wifi height="64px" width="64px" />
          Darmowe Wi-fi
        </ImageBox>
        <Description>
          Internet, który pozowli ci pozostać w kontakcie z najbliższymi.
        </Description>
      </FirstSection>
      <SecondSection>
        <ImageBox>
          <Music height="64px" width="64px" />
          Muzyka
        </ImageBox>
        <Description>
          Muzyka, która pozwoli zrelaksować się przy filiżance ulubionej kawy,
          sprawdzi się w świetnie w pracy.
        </Description>

        <ImageBox>
          <Coupon />
          Rabaty
        </ImageBox>
        <Description>
          Darmowa kawa w godzinach porannych dla seniorów po 60 roku życia,
          zniżki dla studentów, uczniów, nauczycieli, funkcjonaruszy publicznych
          oraz całego personalu medycznego.
        </Description>

        <ImageBox>
          <Horse />
          Planszówki
        </ImageBox>

        <Description>
          Wciągające planszówki, które umilą spotkania z znajomymi.
        </Description>
      </SecondSection>
    </Wrapper>
  );
};

export default Reasons;
