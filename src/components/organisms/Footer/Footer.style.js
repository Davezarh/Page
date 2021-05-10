import styled from 'styled-components';
import image from '../../../assets/images/footer.jpg';

export const FooterImage = styled.div`
  position: relative;
  height: 250px;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 100px 100px 200px 200px 1fr;
  list-style-type: none;
  color: red;
  position: relative;
`;
export const DaysList = styled.li`
  display: grid;
  grid-column-start: 3;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.lightGrey};
`;
export const HoursList = styled.span`
  display: grid;
  grid-column-start: 4;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.lightGrey};
`;
export const LocationList = styled.span`
  display: flex;
  right: 50%;
  top: 5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.lightGrey};
  position: absolute;
`;
