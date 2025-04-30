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

const Info = styled.p`
  font-size: 1rem;
  margin: 0.3rem 0;
`;

function Contact() {
  return (
    <Wrapper>
      <Title>Kontakt & Hitta hit</Title>
      <Info>Djäknegatan 7<br />211 35 Malmö</Info>
      <Info>Telefon: <a href="tel:0733646690">073-364 66 90</a></Info>
      <div style={{margin: '2rem 0'}}>
        <iframe
          title="Karta Malmö"
          src="https://www.google.com/maps?q=Djäknegatan+7,+Malmö&output=embed"
          width="100%"
          height="250"
          style={{border:0, borderRadius: '12px'}}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </Wrapper>
  );
}

export default Contact; 