import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Feather } from 'assets/images/layouts/HomeLayout/feather.svg';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
`;

const Logo = () => {
  return (
    <>
      <Feather width="128px" height="128px" />
    </>
  );
};

export default Logo;
