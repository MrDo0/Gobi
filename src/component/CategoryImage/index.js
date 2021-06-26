import React from "react";
import css from "./style.module.css";

const CategoryImage = (props) => {
  return (
    <div className={css.section}>
      <div className={css.subSection}>
        <img src={props.Image} className={css.picture} alt="Зураг" />
        <div className={css.bottomText}>
          <p className={css.text}>SWEETER</p>
          <p className={css.text}>&#10230;</p>
        </div>
      </div>
    </div>
  );
};
export default CategoryImage;
