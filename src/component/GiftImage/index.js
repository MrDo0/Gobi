import React from "react";
import css from "./style.module.css";

const GiftImage = (props) => {
  return (
    <div className={css.GiftImage}>
      <img className={css.image} src={props.image} alt="Зураг" />

      <div className={css.name}>
        Écharpe tisée avec bords contrastants et franges
      </div>
      <div className={css.color}>+16 colors </div>
      <div className={css.price}>
        <div className={css.basicPrice}>$ 299.00 </div>
        <div className={css.disPrice}>$ 79.00 </div>
      </div>
    </div>
  );
};
export default GiftImage;
