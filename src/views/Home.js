import React from 'react';
import { Wrapper, StyledTitle, StyledQuote } from './Home.styled';
import Beans from 'components/organisms/Beans/Beans';
const Home = () => {
  return (
    <>
      <Wrapper></Wrapper>
      <StyledTitle>CoffeLovers</StyledTitle>
      <StyledQuote>
        Piję kawę i wyobrażam<br></br> sobie brzask gdzie indziej.
      </StyledQuote>
      <Beans></Beans>
    </>
  );
};
export default Home;
