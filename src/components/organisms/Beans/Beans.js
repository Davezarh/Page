import React from 'react';
import RoastedBeans from 'components/molecules/RoastedBeans/RoastedBeans';
import TypesOfBeans from 'components/molecules/TypesOfBeans/TypesOfBeans';
import { Header, Wrapper } from './Beans.style';

const Beans = () => {
  return (
    <Wrapper>
      <Header>Rodzaj Ziarna </Header>
      <TypesOfBeans></TypesOfBeans>
      <Header>Jaki Stopień palenia perefrujesz?</Header>
      <RoastedBeans></RoastedBeans>
    </Wrapper>
  );
};
export default Beans;
