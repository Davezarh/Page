import styled from 'styled-components';
import ShowMenu from 'assets/images/home/images/showMenu.jpg';
export const Wrapper = styled.main`
  background: ${({ theme }) => theme.colors.cream};
  width: 100vw;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Image = styled.article`
  display: grid;
  grid-column-start: 1;
  background-image: url(${ShowMenu});
  background-repeat: no-repeat;
  background-size: cover;
  height: 55vh;
  width: 50vw;
`;

export const Description = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column-start: 2;
  line-height: 1.5;
  margin-bottom: 20px;
  width: 50vw;
  span {
    text-align: center;
    width: 20%;
    margin-bottom: 20px;
  }
  h1 {
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.lightCrimson};
  color: ${({ theme }) => theme.colors.white};
  padding: 15px;
  border: none;
  border-radius: 5%;
  outline: none;
`;
