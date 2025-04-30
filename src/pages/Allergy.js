import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #fff8f1;
  border-radius: 22px;
  box-shadow: 0 4px 24px #f9a8d455;
  padding: 1.1rem 0.7rem 0.9rem 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 220px;
  max-width: 340px;
  width: 100%;
  margin: 2.5rem auto;
  font-size: 0.95rem;
  text-align: center;

  @media (max-width: 700px) {
    padding: 0.7rem 0.3rem 0.6rem 0.3rem;
    min-height: 0;
    max-width: 98vw;
    margin: 1rem auto;
    font-size: 0.85rem;
  }
`;

const Title = styled.h2`
  color: #e11d48;
  font-family: 'Pacifico', cursive, sans-serif;
  font-size: 1.3rem;
  margin-bottom: 0.7rem;
`;

const Text = styled.p`
  font-size: 1rem;
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