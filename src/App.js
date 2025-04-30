import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Allergy from './pages/Allergy';
import Footer from './components/Footer';
import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Pacifico', cursive, sans-serif;
    background: #FDF8DA;
    color: #2d2d2d;
  }
`;

const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1200;
  background: #f9a8d4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 2vw 0.1rem 2vw;
`;

const Nav = styled.nav`
  display: flex;
  gap: 0.7rem;
  font-size: 1.15rem;
  align-items: center;
  background: #f9a8d4;
  height: 26px;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
`;

const StyledLink = styled(Link)`
  color: #2d2d2d;
  text-decoration: none;
  font-weight: bold;
  line-height: 1.1;
  padding-top: 0.05rem;
  &:hover {
    color: #e11d48;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  margin-top: 70px;
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    margin-top: 100px;
  }
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <TopBar>
        <Header />
        <Nav>
          <StyledLink to="/">Hem</StyledLink>
          <StyledLink to="/meny">Meny</StyledLink>
          <StyledLink to="/kontakt">Kontakt</StyledLink>
          <StyledLink to="/allergi">Allergi</StyledLink>
        </Nav>
      </TopBar>
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meny" element={<Menu />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/allergi" element={<Allergy />} />
        </Routes>
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App; 