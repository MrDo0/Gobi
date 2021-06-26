import React from "react";
import css from "./style.module.css";

const Winter = () => {
  return (
    <div className={css.Winter}>
      <div className={css.left}>
        <h1 className={css.title}>WINTER SPICE 2020</h1>
        <p className={css.text}>
          Infusion of summer pieces and cashmere silk blends.
        </p>
        <button className={css.button}>SHOP NOW</button>
      </div>
      <div className={css.right}>
        <div className={css.top}>
          <div className={css.pictureLeft}></div>
          <div className={css.pictureRight}>
            <div className={css.pictureRightTop}></div>
            <div className={css.pictureRightBottom}></div>
          </div>
        </div>
        <div className={css.bottom}>
          <p className={css.bottomText}>
            Infusion of summer pieces and cashmere silk blends.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Winter;
