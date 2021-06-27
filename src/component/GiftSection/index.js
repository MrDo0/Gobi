import React from "react";
import GiftImage from "../GiftImage";
import css from "./style.module.css";

const GiftSection = (props) => {
  return (
    <div className={css.GiftSection}>
      <GiftImage image={props.image1} />
      <GiftImage image={props.image2} />
      <GiftImage image={props.image3} />
      <GiftImage image={props.image4} />
    </div>
  );
};
export default GiftSection;
