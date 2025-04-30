import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import footerBg from '../assets/footer.png';

const FooterWrapper = styled.footer`
  background: #18422a;
  color: #fff;
  padding: 2.5rem 0 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const BlurryBg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(4px) brightness(0.90);
  z-index: 0;
  pointer-events: none;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0 3vw;
`;

const ContactCol = styled.div`
  min-width: 220px;
`;

const SocialCol = styled.div`
  min-width: 180px;
  text-align: center;
`;

const Title = styled.h3`
  font-family: 'Quicksand', Arial, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
`;

const Text = styled.p`
  font-size: 1.3rem;
  margin: 0.2rem 0;
  font-family: 'Quicksand', Arial, sans-serif;
`;

const SocialTitle = styled.h3`
  font-family: 'Quicksand', Arial, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 2.3rem;
  transition: color 0.2s;
  &:hover {
    color: #f9a8d4;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <BlurryBg src={footerBg} alt="Poké Poké footer logo" />
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <ContactCol>
          <Title>Kontakt</Title>
          <Text>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Djäknegatan+7,+211+35+Malmö"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#fff', textDecoration: 'underline' }}
            >
              Djäknegatan 7, 211 35 Malmö
            </a>
          </Text>
          <Text>
            <a
              href="tel:076885340"
              style={{ color: '#fff', textDecoration: 'underline' }}
            >
              076-88 53 40
            </a>
          </Text>
          <Text>
            <a
              href="mailto:pokepoke.djaknegatan@gmail.com"
              style={{ color: '#fff', textDecoration: 'underline' }}
            >
              pokepoke.djaknegatan@gmail.com
            </a>
          </Text>
        </ContactCol>
        <SocialCol>
          <SocialTitle>Följ oss</SocialTitle>
          <SocialIcons>
            <SocialLink href="https://www.tiktok.com/@pokepokecity" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FontAwesomeIcon icon={faTiktok} />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/pokepoke.city/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </SocialLink>
            <SocialLink href="mailto:pokepoke.djaknegatan@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail">
              <FontAwesomeIcon icon={faEnvelope} />
            </SocialLink>
          </SocialIcons>
        </SocialCol>
      </Container>
    </FooterWrapper>
  );
}

export default Footer; 