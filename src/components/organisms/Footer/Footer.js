import React from 'react';
import {
  FooterImage,
  List,
  DaysList,
  LocationList,
  HoursList,
} from './Footer.style';

const Footer = () => {
  return (
    <FooterImage>
      <List>
        <DaysList>Poniedziałek</DaysList>
        <HoursList>7:00 - 18:00</HoursList>
        <DaysList>Wtorek </DaysList>
        <HoursList>7:00 - 18:00</HoursList>
        <DaysList>Środa </DaysList>
        <HoursList>7:00 - 18:00</HoursList>
        <DaysList>Czwartek </DaysList>
        <HoursList>7:00 - 18:00</HoursList>
        <DaysList>Piątek </DaysList>
        <HoursList>7:00 - 18:00</HoursList>
        <DaysList>Sobota </DaysList>
        <HoursList>8:00 - 20:00</HoursList>
        <DaysList>Niedziela </DaysList>
        <HoursList>8:00 - 20:00</HoursList>
      </List>
      <LocationList>
        Kontakt <br></br>ul. Krasnego 15 <br></br>Kalisz
      </LocationList>
    </FooterImage>
  );
};

export default Footer;
