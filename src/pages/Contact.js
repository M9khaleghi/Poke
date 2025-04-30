import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 600px;
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

const Info = styled.p`
  font-size: 1.1rem;
  margin: 0.5rem 0;
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