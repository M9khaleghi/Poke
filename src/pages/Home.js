import React from 'react';
import styled from 'styled-components';
import homeImg from '../assets/home.png';

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${homeImg}) no-repeat center center;
  background-size: contain;
  background-color: #FDF8DA;
  
  @media (max-width: 600px) {
    background-position: center top;
    min-height: 60vh;
  }
`;

function Home() {
  return <Wrapper />;
}

export default Home; 