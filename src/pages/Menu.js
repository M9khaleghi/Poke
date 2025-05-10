import React from 'react';
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
import '../styles/Menu.css';

function Menu() {
  return (
    <div style={{width: '100%', maxWidth: 1200, margin: '0 auto', padding: '0 0.5rem'}}>
      <section className="section">
        <h2 className="section-title">Acai Bowls<span className="price-badge">129:-</span></h2>
        <div className="acai-row">
          <div className="acai-card">
            <img src={HealthyImg} alt="Healthy Bowl" className="acai-img" />
            <div className="acai-text">
              <h3 className="bowl-title">Healthy Bowl</h3>
              <p className="bowl-desc">Acai, granola, banan, blåbär, hallon, jordgubb, jordnötssmör, kokosflakes & chiafrön</p>
            </div>
          </div>
          <div className="acai-card">
            <img src={NutellaImg} alt="Nutella Bowl" className="acai-img" />
            <div className="acai-text">
              <h3 className="bowl-title">Nutella Bowl</h3>
              <p className="bowl-desc">Acai, granola, banan, blåbär, hallon, jordgubb, Nutella, chokosticks & mandelnötter</p>
            </div>
          </div>
          <div className="acai-card">
            <img src={BiskoffImg} alt="Biskoff Bowl" className="acai-img" />
            <div className="acai-text">
              <h3 className="bowl-title">Biskoff Bowl</h3>
              <p className="bowl-desc">Acai, granola, banan, blåbär, hallon, jordgubb, Biskoffkräm & biskoffcrumble</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Smoothies<span className="price-badge">69:-</span></h2>
        <div className="smoothie-row">
          <div className="smoothie-card">
            <img src={GreenProteinImg} alt="Green Protein Smoothie" className="smoothie-img" />
            <div className="smoothie-text">
              <h3 className="bowl-title">Green Protein</h3>
              <ul className="list">
                <li className="list-item">Banan, mango, spenat, mynta, chiafrön, pumpafrön, proteinpulver, kokos & äppeljuice</li>
              </ul>
            </div>
          </div>
          <div className="smoothie-card">
            <img src={PinkSmoothieImg} alt="Pink Smoothie" className="smoothie-img" />
            <div className="smoothie-text">
              <h3 className="bowl-title">Pink Smoothie</h3>
              <ul className="list">
                <li className="list-item">Hallon, mango, ananas, banan, kokos & vaniljyoghurt</li>
              </ul>
            </div>
          </div>
          <div className="smoothie-card">
            <img src={MangoDreamImg} alt="Mango Dream" className="smoothie-img" />
            <div className="smoothie-text">
              <h3 className="bowl-title">Mango Dream</h3>
              <ul className="list">
                <li className="list-item">Mango, mangojuice, banan & agavesirap</li>
              </ul>
            </div>
          </div>
          <div className="smoothie-card">
            <div className="smoothie-text">
              <h3 className="bowl-title">Ginger</h3>
              <ul className="list">
                <li className="list-item">Ingefära, ananas, banan, mango & äppeljuice</li>
              </ul>
            </div>
          </div>
          <div className="smoothie-card">
            <div className="smoothie-text">
              <h3 className="bowl-title">Red Paradise</h3>
              <ul className="list">
                <li className="list-item">Blåbär, hallon, jordgubb, äppeljuice, honung & vaniljyoghurt</li>
              </ul>
            </div>
          </div>
          <div className="smoothie-card">
            <div className="smoothie-text">
              <h3 className="bowl-title">Blueberry</h3>
              <ul className="list">
                <li className="list-item">Hallon, blåbär, honung, chiafrön & vaniljyoghurt</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Poké Bowl<span className="price-badge">från 119:-</span></h2>
        <div className="poke-row">
          <div className="poke-card">
            <img src={TofuImg} alt="Tofu Poké Bowl" className="poke-img" />
            <div className="poke-text">
              <h3 className="bowl-title">Tofu Poké Bowl</h3>
              <ul className="list">
                <li className="list-item"><b>Innehåll:</b> Sushiris, gurka, pokeslaw, soyabönor, picklad rödlök & sesamfrön</li>
                <li className="list-item"><b>Pris:</b> 119:-</li>
                <li className="list-item"><b>Välj stil:</b></li>
                <li className="list-item">• Spicy Bowl: mango, spicy beans, rostad lök & chili mayo</li>
                <li className="list-item">• Original Bowl: wakame, mango & sesam mayo</li>
                <li className="list-item">• Happy Bowl: avocado, pumpafrön & wasabi mayo</li>
                <li className="list-item">• Korean Kimchi: wakame, vårlök & spicy mayo</li>
              </ul>
            </div>
          </div>
          <div className="poke-card">
            <img src={LaxImg} alt="Lax Poké Bowl" className="poke-img" />
            <div className="poke-text">
              <h3 className="bowl-title">Lax Poké Bowl</h3>
              <ul className="list">
                <li className="list-item"><b>Innehåll:</b> Sushiris, gurka, pokeslaw, soyabönor, picklad rödlök & sesamfrön</li>
                <li className="list-item"><b>Pris:</b> 135:-</li>
                <li className="list-item"><b>Välj stil:</b></li>
                <li className="list-item">• Spicy Bowl: mango, spicy beans, rostad lök & chili mayo</li>
                <li className="list-item">• Original Bowl: wakame, mango & sesam mayo</li>
                <li className="list-item">• Happy Bowl: avocado, pumpafrön & wasabi mayo</li>
                <li className="list-item">• Korean Kimchi: wakame, vårlök & spicy mayo</li>
              </ul>
            </div>
          </div>
          <div className="poke-card">
            <img src={KycklingImg} alt="Kyckling Poké Bowl" className="poke-img" />
            <div className="poke-text">
              <h3 className="bowl-title">Kyckling Poké Bowl</h3>
              <ul className="list">
                <li className="list-item"><b>Innehåll:</b> Sushiris, gurka, pokeslaw, soyabönor, picklad rödlök & sesamfrön</li>
                <li className="list-item"><b>Pris:</b> 119:-</li>
                <li className="list-item"><b>Välj stil:</b></li>
                <li className="list-item">• Spicy Bowl: mango, spicy beans, rostad lök & chili mayo</li>
                <li className="list-item">• Original Bowl: wakame, mango & sesam mayo</li>
                <li className="list-item">• Happy Bowl: avocado, pumpafrön & wasabi mayo</li>
                <li className="list-item">• Korean Kimchi: wakame, vårlök & spicy mayo</li>
              </ul>
            </div>
          </div>
          <div className="poke-card">
            <img src={RakorImg} alt="Räkor Poké Bowl" className="poke-img" />
            <div className="poke-text">
              <h3 className="bowl-title">Räkor Poké Bowl</h3>
              <ul className="list">
                <li className="list-item"><b>Innehåll:</b> Sushiris, gurka, pokeslaw, soyabönor, picklad rödlök & sesamfrön</li>
                <li className="list-item"><b>Pris:</b> 135:-</li>
                <li className="list-item"><b>Välj stil:</b></li>
                <li className="list-item">• Spicy Bowl: mango, spicy beans, rostad lök & chili mayo</li>
                <li className="list-item">• Original Bowl: wakame, mango & sesam mayo</li>
                <li className="list-item">• Happy Bowl: avocado, pumpafrön & wasabi mayo</li>
                <li className="list-item">• Korean Kimchi: wakame, vårlök & spicy mayo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Poké Sallad<span className="price-badge">från 119:-</span></h2>
        <div className="poke-row">
          <div className="poke-card">
            <img src={TofuImg} alt="Tofu Poké Sallad" className="poke-img" />
            <div className="poke-text">
              <h3 className="bowl-title">Tofu Poké Sallad</h3>
              <ul className="list">
                <li className="list-item"><b>Innehåll:</b> Svartris, sallad & poke slaw</li>
                <li className="list-item"><b>Pris:</b> 119:-</li>
                <li className="list-item"><b>Välj 4 toppings:</b> Avocado, mango, edamame, kimchi, gurka, wakame, fetaost, majs, oliver, picklad rödlök</li>
                <li className="list-item"><b>Välj dressing:</b> Chili mayo, sesam mayo, wasabi mayo, vegansk chili mayo, teriyakisås</li>
              </ul>
            </div>
          </div>
          <div className="poke-card">
            <img src={LaxImg} alt="Lax Poké Sallad" className="poke-img" />
            <div className="poke-text">
              <h3 className="bowl-title">Lax Poké Sallad</h3>
              <ul className="list">
                <li className="list-item"><b>Innehåll:</b> Svartris, sallad & poke slaw</li>
                <li className="list-item"><b>Pris:</b> 135:-</li>
                <li className="list-item"><b>Välj 4 toppings:</b> Avocado, mango, edamame, kimchi, gurka, wakame, fetaost, majs, oliver, picklad rödlök</li>
                <li className="list-item"><b>Välj dressing:</b> Chili mayo, sesam mayo, wasabi mayo, vegansk chili mayo, teriyakisås</li>
              </ul>
            </div>
          </div>
          <div className="poke-card">
            <img src={KycklingImg} alt="Kyckling Poké Sallad" className="poke-img" />
            <div className="poke-text">
              <h3 className="bowl-title">Kyckling Poké Sallad</h3>
              <ul className="list">
                <li className="list-item"><b>Innehåll:</b> Svartris, sallad & poke slaw</li>
                <li className="list-item"><b>Pris:</b> 119:-</li>
                <li className="list-item"><b>Välj 4 toppings:</b> Avocado, mango, edamame, kimchi, gurka, wakame, fetaost, majs, oliver, picklad rödlök</li>
                <li className="list-item"><b>Välj dressing:</b> Chili mayo, sesam mayo, wasabi mayo, vegansk chili mayo, teriyakisås</li>
              </ul>
            </div>
          </div>
          <div className="poke-card">
            <img src={RakorImg} alt="Räkor Poké Sallad" className="poke-img" />
            <div className="poke-text">
              <h3 className="bowl-title">Räkor Poké Sallad</h3>
              <ul className="list">
                <li className="list-item"><b>Innehåll:</b> Svartris, sallad & poke slaw</li>
                <li className="list-item"><b>Pris:</b> 135:-</li>
                <li className="list-item"><b>Välj 4 toppings:</b> Avocado, mango, edamame, kimchi, gurka, wakame, fetaost, majs, oliver, picklad rödlök</li>
                <li className="list-item"><b>Välj dressing:</b> Chili mayo, sesam mayo, wasabi mayo, vegansk chili mayo, teriyakisås</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu; 