import styled from 'styled-components';

export const ItemsList = styled.ul`
  display: grid;
  grid-template-columns: 100px 1fr 50px 70px 100px;
  grid-row-gap: 5px;
  margin-left: 35px;
  margin-right: 35px;
`;
export const NameItem = styled.li`
  display: grid;
  grid-column-start: 2;
`;
export const Price = styled.span`
  display: grid;
  grid-column-start: 3;
  line-height: 1.5;
  justify-content: start;
`;
export const Currency = styled.span`
  display: grid;
  grid-column-start: 4;
`;
