import React from 'react';
import RoastedBeans from 'components/molecules/beansMolecules/RoastedBeans/RoastedBeans';
import TypesOfBeans from 'components/molecules/beansMolecules/TypesOfBeans/TypesOfBeans';
import Footer from 'components/organisms/Footer/Footer';
import { Wrapper } from './Beans.style';

const Beans = () => {
  return (
    <Wrapper>
      <TypesOfBeans></TypesOfBeans>
      <RoastedBeans></RoastedBeans>
      <Footer></Footer>
    </Wrapper>
  );
};
export default Beans;
