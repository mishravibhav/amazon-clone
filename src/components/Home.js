import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/ARTs2021/JanART21/India-Bazaar-English-1x._CB662270432_.jpg"
        />

        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful
                 Businesses"
            price={520}
            image={
              "https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
            }
            rating={5}
          />
          <Product
            id="2"
            title="Pepe Jeans UV Protected Wayfarer Unisex Sunglasses - (PJ7243 C2 P|57|Purple Color)"
            price={(1, 499)}
            image={
              "https://m.media-amazon.com/images/I/61dY-+DFzLL._AC_UL320_.jpg"
            }
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Sri Belha Fashions Branded Men Casual Beach Trousers linen jean jacket Summer Pants (L)"
            price={1699}
            image={
              "https://m.media-amazon.com/images/I/81-WnraoPOL._AC_UL320_.jpg"
            }
            rating={4}
          />
          <Product
            id="4"
            title="Coolpad Cool 5 (Gradient Blue, 4GB RAM, 64GB Storage)"
            price={7999}
            image={
              "https://m.media-amazon.com/images/I/31RrmJmAVSL.__AC_SY200_.jpg"
            }
            rating={3}
          />
          <Product
            id="5"
            title="Sony MDR-XB55AP Wired Extra Bass in-Ear Headphones with Tangle Free Cable - (Blue)"
            price={1899}
            image={
              "https://m.media-amazon.com/images/I/51x1sdb9K6L._AC_UY218_.jpg"
            }
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Sunflame GT Pride Glass Top Gas Stove (Manual Ignition, Black)"
            price={2450}
            image={
              "https://images-eu.ssl-images-amazon.com/images/G/31/img20/kitchen/Jupiter-Phase1/coop/Prestige-gas_stove_1_1242x450._CB403417443_SY250_.jpg"
            }
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
