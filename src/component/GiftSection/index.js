import React from "react";
import GiftImage from "../GiftImage";
import css from "./style.module.css";

const GiftSection = (props) => {
  return (
    <div className={css.GiftSection}>
      <GiftImage className={css.section} image={props.image1} />
      <GiftImage className={css.section} image={props.image2} />
      <GiftImage className={css.section} image={props.image3} />
      <GiftImage className={css.section} image={props.image4} />
    </div>
  );
};
export default GiftSection;
