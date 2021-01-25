import React from "react";
import "./Home.css";
import Product from "./Product";

import StarBorderIcon from "@material-ui/icons/StarBorder";

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
            title="The Lean Startup: How Constant Innovation Creates Radically Successful
          Businesses"
            price={520}
            image={
              "https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
            }
            rating={5}
          />
          <Product />
        </div>

        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
