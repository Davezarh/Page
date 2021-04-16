import styled from 'styled-components';

export const Wrapper = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 150px);
`;
export const CoffeeName = styled.div`
  display: grid;
  grid-column-start: 1;
`;
export const CoffeeContent = styled.div`
  display: grid;
  grid-column-start: 2;
`;
