import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, CoffeeContent, CoffeeName } from './MenuItems.style';

const MenuItems = ({ coffeData: { name, content } }) => (
  <Wrapper>
    <CoffeeName>{name}</CoffeeName>
    <CoffeeContent>{content}</CoffeeContent>
  </Wrapper>
);

MenuItems.propTypes = {
  coffeData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};
export default MenuItems;
