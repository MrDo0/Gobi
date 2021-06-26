import React, { Component } from "react";
import "./App.css";

import Toolbar from "../../component/Toolbar";

import Home from "../../component/Home";
import SideBar from "../../component/SideBar";
import WinterSpice from "../../component/WinterSpice";
import Category from "../../component/Category";
import Gift from "../../component/Gift";

import ImageWomen1 from "../../assets/image/women1.png";
import ImageWomen2 from "../../assets/image/women2.png";
import ImageMen1 from "../../assets/image/men1.png";
import ImageMen2 from "../../assets/image/men2.png";

class App extends Component {
  state = {
    showSideBar: false,
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSideBar: !prevState.showSideBar };
    });
  };

  render() {
    return (
      <div className="App">
        <Toolbar />
        <Home toggleSideBar={this.toggleSideBar}></Home>
        <SideBar
          showSideBar={this.state.showSideBar}
          toggleSideBar={this.toggleSideBar}
        ></SideBar>

        <WinterSpice />
        <Category Title="WOMEN" Image1={ImageWomen1} Image2={ImageWomen2} />
        <Category Title="MEN" Image1={ImageMen1} Image2={ImageMen2} />
        <Gift />
      </div>
    );
  }
}

export default App;
