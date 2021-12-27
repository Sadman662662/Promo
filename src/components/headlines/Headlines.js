import React from "react";

import classes from "./Headlines.module.css";
import Tag from "../../assets/tag.png";

const headlines = (props) => (
  <div className={classes.Headlines}>
    <h1>Promo Hunter</h1>

    {props.headlines.map((headline, index) => (
      <div key={index} className={classes.PeraDiv}>
        <img src={Tag} alt="" />
        <p> {headline.headline}</p>
      </div>
    ))}
  </div>
);

export default headlines;
