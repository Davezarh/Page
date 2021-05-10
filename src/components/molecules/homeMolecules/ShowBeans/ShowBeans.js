import React from 'react';
import { Wrapper, Section, Image, Button } from './ShowBeans.style';
import { useHistory } from 'react-router-dom';
const ShowBeans = () => {
  const history = useHistory();
  return (
    <>
      <Wrapper>
        <Section>
          <Image>
            <Button onClick={() => history.push('/ziarna')}>
              Sprawdź co u nas jest w młynku
            </Button>
          </Image>
        </Section>
      </Wrapper>
    </>
  );
};

export default ShowBeans;
