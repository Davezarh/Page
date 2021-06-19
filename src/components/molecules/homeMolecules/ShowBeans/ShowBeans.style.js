import styled from 'styled-components';
import beans from 'assets/images/home/images/ShowBeans.jpg';
export const Wrapper = styled.main`
  width: 100%;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
`;

export const Image = styled.article`
  background-image: url(${beans});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: white;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.lightBrown};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.m};
  border-radius: 3%;
  padding: 15px;
  border: none;
  outline: none;
`;
