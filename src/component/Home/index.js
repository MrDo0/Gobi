import React from "react";

import "./style.css";
import heartLogo from "../../assets/icon/heart.png";
import bagLogo from "../../assets/icon/shopping-bag.png";
import Menu from "../Menu";
import HamburgerMenu from "../HamburgerMenu";
import SearchMenu from "../SearchMenu";
import Sale from "../Sale";

const Home = (props) => {
  return (
    <div className="home">
      <div className="stickybar">
        <div className="hamburgerMenu">
          <HamburgerMenu toggleSideBar={props.toggleSideBar} />
          <SearchMenu />
        </div>
        <div className="menu">
          <Menu />
        </div>

        <div className="logo">
          <div className="title">GOBI</div>
          <div className="text">CASHMERE FOR ALL</div>
        </div>
        <div className="endsearch">
          <div className="inputdiv">
            <input
              type="text"
              name="name"
              className="search"
              placeholder="Search"
            />
          </div>
          <div className="icondiv">
            <img src={heartLogo} alt="icon" className="icon" color="white" />
            <img src={bagLogo} alt="icon" className="icon" />
          </div>
        </div>
      </div>
      <div className="Sale">
        <Sale />
      </div>
    </div>
  );
};

export default Home;
