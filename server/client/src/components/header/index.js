import React from "react";
import "./styles.scss";
import Logo from "./logo2.png";

const Header = props => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
            <img data-test="logoIMG" src={Logo} alt="Logo"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
