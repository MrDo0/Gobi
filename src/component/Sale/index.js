import React from "react";

import css from "./style.module.css";

const Sale = (props) => {
  return (
    <div className={css.right}>
      <div className={css.summersale}>
        <p className={css.latotext}>SUMMER</p>
        <p className={css.dafoetext}>Sale</p>
      </div>
      <div className={css.sale}>
        <p className={css.smalltext}>UPTO</p>
        <p className={css.text}>60%</p>
        <p className={css.endtext}>FF</p>
      </div>
      <button className={css.button}>SHOP NOW</button>
    </div>
  );
};

export default Sale;
