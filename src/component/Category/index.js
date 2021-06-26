import React from "react";
import css from "./style.module.css";

import CategoryImage from "../CategoryImage";

const Category = (props) => {
  return (
    <div className={css.Category}>
      <div className={css.Title}>{props.Title}</div>
      <div className={css.Component}>
        <CategoryImage Image={props.Image1} />
        <CategoryImage Image={props.Image2} />
        <CategoryImage Image={props.Image1} />
      </div>
    </div>
  );
};
export default Category;
