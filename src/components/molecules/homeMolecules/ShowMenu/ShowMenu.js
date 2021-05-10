import React from 'react';
import { Wrapper, Section, Image, Description, Button } from './ShowMenu.style';
import { useHistory } from 'react-router-dom';
const ShowMenu = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <Section>
        <Image />
        <Description>
          <h1>Nasza Oferta</h1>
          <span>
            Jakość jest dla nas najważniejsza, specajlizujemy się nie tylko w
            przepysznej kawie, zapraszamy do zapoznania się z pełną ofertą.
          </span>
          <Button onClick={() => history.push('/menu')}>Zobacz Menu</Button>
        </Description>
      </Section>
    </Wrapper>
  );
};
export default ShowMenu;
