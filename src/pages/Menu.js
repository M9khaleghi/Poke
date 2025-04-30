import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  background: #fff8f1;
  border-radius: 18px;
  box-shadow: 0 2px 12px #f9a8d4aa;
  padding: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  color: #e11d48;
  font-family: 'Pacifico', cursive, sans-serif;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ItemTitle = styled.h3`
  color: #7c3aed;
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Price = styled.span`
  color: #f59e42;
  font-weight: bold;
  margin-left: 0.5rem;
`;

function Menu() {
  return (
    <Wrapper>
      <Section>
        <Title>Acai Bowl <Price>129:-</Price></Title>
        <List>
          <li>
            <ItemTitle>1. Healthy Bowl</ItemTitle>
            Acai, granola, banan, blåbär, hallon, jordgubb, jordnötssmör, kokosflakes & chiafrön
          </li>
          <li>
            <ItemTitle>2. Nutella Bowl</ItemTitle>
            Acai, granola, banan, blåbär, hallon, jordgubb, Nutella, chokosticks & mandelnötter
          </li>
          <li>
            <ItemTitle>3. Biskoff Bowl</ItemTitle>
            Acai, granola, banan, blåbär, hallon, jordgubb, Biskoffkräm & biskoffcrumble
          </li>
        </List>
      </Section>
      <Section>
        <Title>Smoothies <Price>69:-</Price></Title>
        <List>
          <li>
            <ItemTitle>1. Ginger</ItemTitle>
            Ingefära, ananas, banan, mango & äppeljuice
          </li>
          <li>
            <ItemTitle>2. Mango Dream</ItemTitle>
            Mango, mangojuice, banan & agavesirap
          </li>
          <li>
            <ItemTitle>3. Red Paradise</ItemTitle>
            Blåbär, hallon, jordgubb, äppeljuice, honung & vaniljyoghurt
          </li>
          <li>
            <ItemTitle>4. Green Protein</ItemTitle>
            Banan, mango, spenat, mynta, chiafrön, pumpafrön, proteinpulver, kokos & äppeljuice
          </li>
          <li>
            <ItemTitle>5. Blueberry</ItemTitle>
            Hallon, blåbär, honung, chiafrön & vaniljyoghurt
          </li>
          <li>
            <ItemTitle>6. Pink Smoothie</ItemTitle>
            Hallon, mango, ananas, banan, kokos & vaniljyoghurt
          </li>
        </List>
      </Section>
      <Section>
        <Title>Poké Bowl <Price>från 119:-</Price></Title>
        <p>Alla Bowls innehåller: sushiris, gurka, pokeslaw, soyabönor, picklad rödlök & sesamfrön</p>
        <List>
          <li><b>Protein:</b> Kyckling 119:-, Tofu 119:-, Tonfisk 135:-, Lax 135:-, Räkor 135:-</li>
          <li><b>1. Spicy Bowl:</b> mango, spicy beans, rostad lök & chili mayo</li>
          <li><b>2. Original Bowl:</b> wakame, mango & sesam mayo</li>
          <li><b>3. Happy Bowl:</b> avocado, pumpafrön & wasabi mayo</li>
          <li><b>4. Korean Kimchi:</b> wakame, vårlök & spicy mayo</li>
        </List>
      </Section>
      <Section>
        <Title>Poké Sallad <Price>från 119:-</Price></Title>
        <p>Alla sallader innehåller: Svartris, sallad & poke slaw</p>
        <List>
          <li><b>Protein:</b> Kyckling 119:-, Tofu 119:-, Tonfisk 135:-, Lax 135:-, Räkor 135:-</li>
          <li><b>Välj 4 toppings:</b> Avocado, mango, edamame, kimchi, gurka, wakame, fetaost, majs, oliver, picklad rödlök</li>
          <li><b>Välj dressing:</b> Chili mayo, sesam mayo, wasabi mayo, vegansk chili mayo, teriyakisås</li>
        </List>
      </Section>
    </Wrapper>
  );
}

export default Menu; 