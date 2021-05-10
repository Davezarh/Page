import styled from 'styled-components';

export const Wrapper = styled.main`
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.lightGrey};
  h1 {
    text-align: center;
    margin-bottom: 15px;
    color: red;
  }
`;
export const FirstSection = styled.section`
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 100px 225px;
  grid-gap: 15px;
  justify-content: center;
  margin: 30px;
`;

export const SecondSection = styled.section`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 100px 225px;
  justify-content: center;
`;
export const ImageBox = styled.div`
  display: grid;
  justify-items: center;
  color: red;
`;
export const Description = styled.span`
  grid-row-start: 2;
  text-align: center;
`;
