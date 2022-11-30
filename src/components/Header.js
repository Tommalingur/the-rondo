import React, { useState } from "react";
import "./Header.css";
import { HeaderButton } from "./Components";

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
    <header className="Header">
      <nav className="Nav">
        <HeaderButton>Home</HeaderButton>
        <HeaderButton>Articles</HeaderButton>
        <HeaderButton>News</HeaderButton>
        <HeaderButton>Sign In</HeaderButton>
      </nav>
      <img
        width={50}
        height={50}
        src={require("../assets/images/logo1.png")}
        className="Logo"
        alt="logo"
      />
      <div className="DropDiv">
        <HeaderButton onClick={toggleNav} className="DropDown">
          Menu
        </HeaderButton>
        {isNavVisible ? (
          <ul className="DropMenu">
            <li className="DropButton">
              <HeaderButton onClick={toggleNav}>Home</HeaderButton>
            </li>
            <li className="DropButton">
              <HeaderButton onClick={toggleNav}>Articles</HeaderButton>
            </li>
            <li className="DropButton">
              <HeaderButton onClick={toggleNav}>News</HeaderButton>
            </li>
            <li className="DropButton">
              <HeaderButton onClick={toggleNav}>Sign In</HeaderButton>
            </li>
          </ul>
        ) : null}
      </div>
      <div className="Rondo">
        <img
          width={200}
          height={50}
          src={require("../assets/images/rondo_logo.jpg")}
          className="RondoImg"
          alt="rondo"
        />
      </div>
    </header>
  );
}
