import React from "react";

import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = () => (
  <div>
    <ul className={css.Menu}>
      <MenuItem link="/women">WOMEN</MenuItem>
      <MenuItem link="/men">MEN</MenuItem>
      <MenuItem active link="/home">
        HOME
      </MenuItem>
      <MenuItem link="/access">ACCESSORIES</MenuItem>
      <MenuItem link="/organic">ORGANIC</MenuItem>
    </ul>
  </div>
);

export default Menu;
