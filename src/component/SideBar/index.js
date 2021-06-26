import React from "react";

import css from "./style.module.css";

import Menu from "../Menu";
import Shadow from "../Shadow";

const SideBar = (props) => {
  let classes = [css.SideBar, css.Close];

  if (props.showSideBar) {
    classes = [css.SideBar, css.Open];
  }

  return (
    <div>
      <Shadow show={props.showSideBar} />
      <div onClick={props.toggleSideBar} className={classes.join(" ")}>
        <div className={css.Logo}>
          <div className={css.section}>
            <div className={css.title}>GOBI</div>
            <div className={css.text}>CASHMERE FOR ALL</div>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SideBar;
