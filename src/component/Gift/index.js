import React from "react";
import GiftSection from "../GiftSection";
import css from "./style.module.css";
import gift1 from "../../assets/image/gift1.png";
import gift2 from "../../assets/image/gift2.png";
import gift3 from "../../assets/image/gift3.png";
import gift4 from "../../assets/image/gift4.png";
import gift5 from "../../assets/image/gift5.png";
import gift6 from "../../assets/image/gift6.png";
import gift7 from "../../assets/image/gift7.png";
import gift8 from "../../assets/image/gift8.png";

const Gift = (props) => {
  return (
    <div className={css.Gift}>
      <div className={css.title}>TO GET AND TO GIFT </div>
      <div className={css.section}>
        <GiftSection
          image1={gift1}
          image2={gift2}
          image3={gift3}
          image4={gift4}
        />
        <GiftSection
          image1={gift5}
          image2={gift6}
          image3={gift7}
          image4={gift8}
        />
      </div>
    </div>
  );
};
export default Gift;
