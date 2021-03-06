import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        ></img>
      </Link>

      <div className="header__search">
        <input className="header__searchinput" type="text" />
        <SearchIcon className="header__searchicon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="headeroptionLineone">Hello</span>
          <span className="headeroptionLinetwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="headeroptionLineone">Returns</span>
          <span className="headeroptionLinetwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="headeroptionLineone">Your</span>
          <span className="headeroptionLinetwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionbasket">
            <ShoppingBasketIcon />
            <span className="headeroptionLinetwo header__basketcount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
