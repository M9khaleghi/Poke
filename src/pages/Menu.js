import React from 'react';
import styled from 'styled-components';

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 2rem;
  width: 100%;
  margin: 2.5rem 0;
  padding: 0;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.2rem;
  }
  @media (max-width: 450px) {
    gap: 0.5rem;
    padding: 0 0.05rem;
  }
`;

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  padding: 0;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    padding: 0 1vw;
  }
`;

const Card = styled.div`
  background: #fff8f1;
  border-radius: 22px;
  box-shadow: 0 4px 24px #f9a8d455;
  padding: 1.1rem 0.7rem 0.9rem 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: box-shadow 0.2s, transform 0.2s;
  min-height: 220px;
  max-width: 340px;
  width: 100%;
  margin: 0 auto;
  &:hover {
    box-shadow: 0 8px 32px #e11d4888;
    transform: translateY(-4px) scale(1.02);
  }
  @media (max-width: 700px) {
    padding: 0.7rem 0.3rem 0.6rem 0.3rem;
    min-height: 0;
    max-width: 98vw;
  }
  @media (max-width: 450px) {
    padding: 0.5rem 0.1rem 0.5rem 0.1rem;
  }
`;

const ImgPlaceholder = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #f9a8d4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  @media (max-width: 700px) {
    width: 48px;
    height: 48px;
    font-size: 1.5rem;
  }
  @media (max-width: 450px) {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
`;

const Title = styled.h2`
  color: #e11d48;
  font-family: 'Pacifico', cursive, sans-serif;
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 1rem;
  }
  @media (max-width: 450px) {
    font-size: 0.95rem;
  }
`;

const PriceBadge = styled.span`
  background: #f59e42;
  color: #fff;
  font-weight: bold;
  border-radius: 16px;
  padding: 0.2em 1em;
  font-size: 1.1rem;
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  box-shadow: 0 2px 8px #f59e4244;
  @media (max-width: 700px) {
    font-size: 0.9rem;
    top: 0.7rem;
    right: 0.7rem;
    padding: 0.15em 0.7em;
  }
  @media (max-width: 450px) {
    font-size: 0.8rem;
    top: 0.4rem;
    right: 0.4rem;
    padding: 0.1em 0.5em;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.3rem 0 0 0;
  font-size: 0.95rem;
  text-align: left;
  @media (max-width: 700px) {
    font-size: 0.85rem;
  }
`;

const ListItem = styled.li`
  margin-bottom: 0.4rem;
`;

function Menu() {
  return (
    <MenuGrid>
      <Card>
        <ImgPlaceholder>🥣</ImgPlaceholder>
        <Title>Acai Bowl</Title>
        <PriceBadge>129:-</PriceBadge>
        <List>
          <ListItem><b>Healthy Bowl:</b> Acai, granola, banan, blåbär, hallon, jordgubb, jordnötssmör, kokosflakes & chiafrön</ListItem>
          <ListItem><b>Nutella Bowl:</b> Acai, granola, banan, blåbär, hallon, jordgubb, Nutella, chokosticks & mandelnötter</ListItem>
          <ListItem><b>Biskoff Bowl:</b> Acai, granola, banan, blåbär, hallon, jordgubb, Biskoffkräm & biskoffcrumble</ListItem>
        </List>
      </Card>
      <Card>
        <ImgPlaceholder>🍹</ImgPlaceholder>
        <Title>Smoothies</Title>
        <PriceBadge>69:-</PriceBadge>
        <List>
          <ListItem><b>Ginger:</b> Ingefära, ananas, banan, mango & äppeljuice</ListItem>
          <ListItem><b>Mango Dream:</b> Mango, mangojuice, banan & agavesirap</ListItem>
          <ListItem><b>Red Paradise:</b> Blåbär, hallon, jordgubb, äppeljuice, honung & vaniljyoghurt</ListItem>
          <ListItem><b>Green Protein:</b> Banan, mango, spenat, mynta, chiafrön, pumpafrön, proteinpulver, kokos & äppeljuice</ListItem>
          <ListItem><b>Blueberry:</b> Hallon, blåbär, honung, chiafrön & vaniljyoghurt</ListItem>
          <ListItem><b>Pink Smoothie:</b> Hallon, mango, ananas, banan, kokos & vaniljyoghurt</ListItem>
        </List>
      </Card>
      <Card>
        <ImgPlaceholder>🥗</ImgPlaceholder>
        <Title>Poké Bowl</Title>
        <PriceBadge>från 119:-</PriceBadge>
        <List>
          <ListItem><b>Innehåll:</b> Sushiris, gurka, pokeslaw, soyabönor, picklad rödlök & sesamfrön</ListItem>
          <ListItem><b>Protein:</b> Kyckling 119:-, Tofu 119:-, Tonfisk 135:-, Lax 135:-, Räkor 135:-</ListItem>
          <ListItem><b>Spicy Bowl:</b> mango, spicy beans, rostad lök & chili mayo</ListItem>
          <ListItem><b>Original Bowl:</b> wakame, mango & sesam mayo</ListItem>
          <ListItem><b>Happy Bowl:</b> avocado, pumpafrön & wasabi mayo</ListItem>
          <ListItem><b>Korean Kimchi:</b> wakame, vårlök & spicy mayo</ListItem>
        </List>
      </Card>
      <Card>
        <ImgPlaceholder>🥒</ImgPlaceholder>
        <Title>Poké Sallad</Title>
        <PriceBadge>från 119:-</PriceBadge>
        <List>
          <ListItem><b>Innehåll:</b> Svartris, sallad & poke slaw</ListItem>
          <ListItem><b>Protein:</b> Kyckling 119:-, Tofu 119:-, Tonfisk 135:-, Lax 135:-, Räkor 135:-</ListItem>
          <ListItem><b>Välj 4 toppings:</b> Avocado, mango, edamame, kimchi, gurka, wakame, fetaost, majs, oliver, picklad rödlök</ListItem>
          <ListItem><b>Välj dressing:</b> Chili mayo, sesam mayo, wasabi mayo, vegansk chili mayo, teriyakisås</ListItem>
        </List>
      </Card>
    </MenuGrid>
  );
}

export default Menu; 