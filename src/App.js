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
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9a8d4;
  padding: 0.1rem 2vw 0.1rem 2vw;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.3rem;
  font-size: 1.3rem;
  align-items: center;
  background: #f9a8d4;
  height: 26px;
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