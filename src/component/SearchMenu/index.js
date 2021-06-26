import React from "react";

import css from "./style.module.css";
import searchLogo from "../../assets/icon/search.png";

const SeachMenu = (props) => (
  <div className={css.SeachMenu}>
    <img src={searchLogo} alt="icon" className="icon" color="white" />
  </div>
);

export default SeachMenu;
