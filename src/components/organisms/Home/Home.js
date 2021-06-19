import React from 'react';
import { Wrapper } from './Home.styled';
import Reasons from 'components/molecules/homeMolecules/Reasons/Reasons';
import ShowMenu from 'components/molecules/homeMolecules/ShowMenu/ShowMenu';
import ShowBeans from 'components/molecules/homeMolecules/ShowBeans/ShowBeans';
const Home = () => {
  return (
    <>
      <Wrapper>
        <Reasons></Reasons>
        <ShowMenu></ShowMenu>
        <ShowBeans></ShowBeans>
      </Wrapper>
    </>
  );
};
export default Home;
