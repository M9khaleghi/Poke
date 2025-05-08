import React from 'react';
import styled from 'styled-components';
import HealthyImg from '../assets/Healthy.jpg';
import NutellaImg from '../assets/Nutella.jpg';
import BiskoffImg from '../assets/Biskoff.jpg';
import TofuImg from '../assets/Tofu.jpg';
import LaxImg from '../assets/Lax.jpg';
import KycklingImg from '../assets/Kyckling.jpg';
import RakorImg from '../assets/Räkor.jpg';
import GreenProteinImg from '../assets/Green Protein.jpg';
import PinkSmoothieImg from '../assets/Pink Smoothie.jpg';
import MangoDreamImg from '../assets/Mango Dream.jpg';

const Section = styled.section`
  margin: 2.5rem 0 3.5rem 0;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-family: 'Pacifico', cursive, sans-serif;
  color: #e11d48;
  font-size: 2.1rem;
  margin-bottom: 0.5rem;
  border-left: 8px solid #f9a8d4;
  padding-left: 1rem;
  @media (max-width: 700px) {
    font-size: 1.3rem;
    padding-left: 0.5rem;
    border-left-width: 4px;
  }
`;

const PriceBadge = styled.span`
  background: #f59e42;
  color: #fff;
  font-weight: bold;
  border-radius: 16px;
  padding: 0.2em 1em;
  font-size: 1.1rem;
  margin-left: 1rem;
`;

const AcaiRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2.5rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const AcaiCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const AcaiImg = styled.img`
  width: 100%;
  max-width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 22px;
  box-shadow: 0 4px 24px #f9a8d455;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
    max-width: 340px;
    height: 340px;
  }
`;

const AcaiText = styled.div`
  width: 100%;
  max-width: 300px;
`;

const BowlTitle = styled.h3`
  color: #7c3aed;
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
  margin-top: 0;
  font-family: 'Pacifico', cursive, sans-serif;
`;

const BowlDesc = styled.p`
  margin: 0 0 1.2rem 0;
  font-size: 1.05rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0 0;
  font-size: 1.08rem;
  text-align: left;
  @media (max-width: 700px) {
    font-size: 0.93rem;
  }
`;

const ListItem = styled.li`
  margin-bottom: 0.4rem;
`;

const PokeRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2.5rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const PokeCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const PokeImg = styled.img`
  width: 100%;
  max-width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 22px;
  box-shadow: 0 4px 24px #f9a8d455;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
    max-width: 340px;
    height: 340px;
  }
`;

const PokeText = styled.div`
  width: 100%;
  max-width: 300px;
`;

const SmoothieRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2.5rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const SmoothieCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SmoothieImg = styled.img`
  width: 100%;
  max-width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 22px;
  box-shadow: 0 4px 24px #f9a8d455;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
    max-width: 340px;
    height: 340px;
  }
`;

const SmoothieText = styled.div`
  width: 100%;
  max-width: 300px;
`;

function Menu() {
  return (
    <div style={{width: '100%', maxWidth: 1200, margin: '0 auto', padding: '0 0.5rem'}}>
      <Section>
        <SectionTitle>Acai Bowls<PriceBadge>129:-</PriceBadge></SectionTitle>
        <AcaiRow>
          <AcaiCard>
            <AcaiImg src={HealthyImg} alt="Healthy Bowl" />
            <AcaiText>
              <BowlTitle>Healthy Bowl</BowlTitle>
              <BowlDesc>Acai, granola, banan, blåbär, hallon, jordgubb, jordnötssmör, kokosflakes & chiafrön</BowlDesc>
            </AcaiText>
          </AcaiCard>
          <AcaiCard>
            <AcaiImg src={NutellaImg} alt="Nutella Bowl" />
            <AcaiText>
              <BowlTitle>Nutella Bowl</BowlTitle>
              <BowlDesc>Acai, granola, banan, blåbär, hallon, jordgubb, Nutella, chokosticks & mandelnötter</BowlDesc>
            </AcaiText>
          </AcaiCard>
          <AcaiCard>
            <AcaiImg src={BiskoffImg} alt="Biskoff Bowl" />
            <AcaiText>
              <BowlTitle>Biskoff Bowl</BowlTitle>
              <BowlDesc>Acai, granola, banan, blåbär, hallon, jordgubb, Biskoffkräm & biskoffcrumble</BowlDesc>
            </AcaiText>
          </AcaiCard>
        </AcaiRow>
      </Section>
      <Section>
        <SectionTitle>Smoothies<PriceBadge>69:-</PriceBadge></SectionTitle>
        <SmoothieRow>
          <SmoothieCard>
            <SmoothieImg src={GreenProteinImg} alt="Green Protein Smoothie" />
            <SmoothieText>
              <BowlTitle>Green Protein</BowlTitle>
              <List>
                <ListItem>Banan, mango, spenat, mynta, chiafrön, pumpafrön, proteinpulver, kokos & äppeljuice</ListItem>
              </List>
            </SmoothieText>
          </SmoothieCard>
          <SmoothieCard>
            <SmoothieImg src={PinkSmoothieImg} alt="Pink Smoothie" />
            <SmoothieText>
              <BowlTitle>Pink Smoothie</BowlTitle>
              <List>
                <ListItem>Hallon, mango, ananas, banan, kokos & vaniljyoghurt</ListItem>
              </List>
            </SmoothieText>
          </SmoothieCard>
          <SmoothieCard>
            <SmoothieImg src={MangoDreamImg} alt="Mango Dream" />
            <SmoothieText>
              <BowlTitle>Mango Dream</BowlTitle>
              <List>
                <ListItem>Mango, mangojuice, banan & agavesirap</ListItem>
              </List>
            </SmoothieText>
          </SmoothieCard>
          <SmoothieCard>
            <SmoothieText>
              <BowlTitle>Ginger</BowlTitle>
              <List>
                <ListItem>Ingefära, ananas, banan, mango & äppeljuice</ListItem>
              </List>
            </SmoothieText>
          </SmoothieCard>
          <SmoothieCard>
            <SmoothieText>
              <BowlTitle>Red Paradise</BowlTitle>
              <List>
                <ListItem>Blåbär, hallon, jordgubb, äppeljuice, honung & vaniljyoghurt</ListItem>
              </List>
            </SmoothieText>
          </SmoothieCard>
          <SmoothieCard>
            <SmoothieText>
              <BowlTitle>Blueberry</BowlTitle>
              <List>
                <ListItem>Hallon, blåbär, honung, chiafrön & vaniljyoghurt</ListItem>
              </List>
            </SmoothieText>
          </SmoothieCard>
        </SmoothieRow>
      </Section>
      <Section>
        <SectionTitle>Poké Bowl<PriceBadge>från 119:-</PriceBadge></SectionTitle>
        <PokeRow>
          <PokeCard>
            <PokeImg src={TofuImg} alt="Tofu Poké Bowl" />
            <PokeText>
              <BowlTitle>Tofu Poké Bowl</BowlTitle>
              <List>
                <ListItem><b>Innehåll:</b> Sushiris, gurka, pokeslaw, soyabönor, picklad rödlök & sesamfrön</ListItem>
                <ListItem><b>Pris:</b> 119:-</ListItem>
                <ListItem><b>Välj stil:</b></ListItem>
                <ListItem>• Spicy Bowl: mango, spicy beans, rostad lök & chili mayo</ListItem>
                <ListItem>• Original Bowl: wakame, mango & sesam mayo</ListItem>
                <ListItem>• Happy Bowl: avocado, pumpafrön & wasabi mayo</ListItem>
                <ListItem>• Korean Kimchi: wakame, vårlök & spicy mayo</ListItem>
              </List>
            </PokeText>
          </PokeCard>
          <PokeCard>
            <PokeImg src={LaxImg} alt="Lax Poké Bowl" />
            <PokeText>
              <BowlTitle>Lax Poké Bowl</BowlTitle>
              <List>
                <ListItem><b>Innehåll:</b> Sushiris, gurka, pokeslaw, soyabönor, picklad rödlök & sesamfrön</ListItem>
                <ListItem><b>Pris:</b> 135:-</ListItem>
                <ListItem><b>Välj stil:</b></ListItem>
                <ListItem>• Spicy Bowl: mango, spicy beans, rostad lök & chili mayo</ListItem>
                <ListItem>• Original Bowl: wakame, mango & sesam mayo</ListItem>
                <ListItem>• Happy Bowl: avocado, pumpafrön & wasabi mayo</ListItem>
                <ListItem>• Korean Kimchi: wakame, vårlök & spicy mayo</ListItem>
              </List>
            </PokeText>
          </PokeCard>
          <PokeCard>
            <PokeImg src={KycklingImg} alt="Kyckling Poké Bowl" />
            <PokeText>
              <BowlTitle>Kyckling Poké Bowl</BowlTitle>
              <List>
                <ListItem><b>Innehåll:</b> Sushiris, gurka, pokeslaw, soyabönor, picklad rödlök & sesamfrön</ListItem>
                <ListItem><b>Pris:</b> 119:-</ListItem>
                <ListItem><b>Välj stil:</b></ListItem>
                <ListItem>• Spicy Bowl: mango, spicy beans, rostad lök & chili mayo</ListItem>
                <ListItem>• Original Bowl: wakame, mango & sesam mayo</ListItem>
                <ListItem>• Happy Bowl: avocado, pumpafrön & wasabi mayo</ListItem>
                <ListItem>• Korean Kimchi: wakame, vårlök & spicy mayo</ListItem>
              </List>
            </PokeText>
          </PokeCard>
          <PokeCard>
            <PokeImg src={RakorImg} alt="Räkor Poké Bowl" />
            <PokeText>
              <BowlTitle>Räkor Poké Bowl</BowlTitle>
              <List>
                <ListItem><b>Innehåll:</b> Sushiris, gurka, pokeslaw, soyabönor, picklad rödlök & sesamfrön</ListItem>
                <ListItem><b>Pris:</b> 135:-</ListItem>
                <ListItem><b>Välj stil:</b></ListItem>
                <ListItem>• Spicy Bowl: mango, spicy beans, rostad lök & chili mayo</ListItem>
                <ListItem>• Original Bowl: wakame, mango & sesam mayo</ListItem>
                <ListItem>• Happy Bowl: avocado, pumpafrön & wasabi mayo</ListItem>
                <ListItem>• Korean Kimchi: wakame, vårlök & spicy mayo</ListItem>
              </List>
            </PokeText>
          </PokeCard>
        </PokeRow>
      </Section>
      <Section>
        <SectionTitle>Poké Sallad<PriceBadge>från 119:-</PriceBadge></SectionTitle>
        <PokeRow>
          <PokeCard>
            <PokeImg src={TofuImg} alt="Tofu Poké Sallad" />
            <PokeText>
              <BowlTitle>Tofu Poké Sallad</BowlTitle>
              <List>
                <ListItem><b>Innehåll:</b> Svartris, sallad & poke slaw</ListItem>
                <ListItem><b>Pris:</b> 119:-</ListItem>
                <ListItem><b>Välj 4 toppings:</b> Avocado, mango, edamame, kimchi, gurka, wakame, fetaost, majs, oliver, picklad rödlök</ListItem>
                <ListItem><b>Välj dressing:</b> Chili mayo, sesam mayo, wasabi mayo, vegansk chili mayo, teriyakisås</ListItem>
              </List>
            </PokeText>
          </PokeCard>
          <PokeCard>
            <PokeImg src={LaxImg} alt="Lax Poké Sallad" />
            <PokeText>
              <BowlTitle>Lax Poké Sallad</BowlTitle>
              <List>
                <ListItem><b>Innehåll:</b> Svartris, sallad & poke slaw</ListItem>
                <ListItem><b>Pris:</b> 135:-</ListItem>
                <ListItem><b>Välj 4 toppings:</b> Avocado, mango, edamame, kimchi, gurka, wakame, fetaost, majs, oliver, picklad rödlök</ListItem>
                <ListItem><b>Välj dressing:</b> Chili mayo, sesam mayo, wasabi mayo, vegansk chili mayo, teriyakisås</ListItem>
              </List>
            </PokeText>
          </PokeCard>
          <PokeCard>
            <PokeImg src={KycklingImg} alt="Kyckling Poké Sallad" />
            <PokeText>
              <BowlTitle>Kyckling Poké Sallad</BowlTitle>
              <List>
                <ListItem><b>Innehåll:</b> Svartris, sallad & poke slaw</ListItem>
                <ListItem><b>Pris:</b> 119:-</ListItem>
                <ListItem><b>Välj 4 toppings:</b> Avocado, mango, edamame, kimchi, gurka, wakame, fetaost, majs, oliver, picklad rödlök</ListItem>
                <ListItem><b>Välj dressing:</b> Chili mayo, sesam mayo, wasabi mayo, vegansk chili mayo, teriyakisås</ListItem>
              </List>
            </PokeText>
          </PokeCard>
          <PokeCard>
            <PokeImg src={RakorImg} alt="Räkor Poké Sallad" />
            <PokeText>
              <BowlTitle>Räkor Poké Sallad</BowlTitle>
              <List>
                <ListItem><b>Innehåll:</b> Svartris, sallad & poke slaw</ListItem>
                <ListItem><b>Pris:</b> 135:-</ListItem>
                <ListItem><b>Välj 4 toppings:</b> Avocado, mango, edamame, kimchi, gurka, wakame, fetaost, majs, oliver, picklad rödlök</ListItem>
                <ListItem><b>Välj dressing:</b> Chili mayo, sesam mayo, wasabi mayo, vegansk chili mayo, teriyakisås</ListItem>
              </List>
            </PokeText>
          </PokeCard>
        </PokeRow>
      </Section>
    </div>
  );
}

export default Menu; 