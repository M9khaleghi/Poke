import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  background: #fff8f1;
  border-radius: 18px;
  box-shadow: 0 2px 12px #f9a8d4aa;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  color: #e11d48;
  font-family: 'Pacifico', cursive, sans-serif;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #7c3aed;
`;

function Allergy() {
  return (
    <Wrapper>
      <Title>Allergiinformation</Title>
      <Text>
        Har du allergier eller specialkost?<br />
        Fråga gärna personalen så hjälper vi dig!
      </Text>
    </Wrapper>
  );
}

export default Allergy; 