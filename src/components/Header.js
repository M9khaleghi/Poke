import React from 'react';
import logo from '../assets/logo.png';

const headerStyle = {
  textAlign: 'left',
  margin: 0,
  background: '#f9a8d4',
  padding: '0.3rem 2vw',
  position: 'sticky',
  top: 0,
  zIndex: 1100,
  fontFamily: 'Pacifico, cursive, sans-serif',
};

function Header() {
  return (
    <header style={headerStyle}>
      <img src={logo} alt="Poké Poké logotyp" style={{ height: 60, borderRadius: '50%' }} />
    </header>
  );
}

export default Header; 