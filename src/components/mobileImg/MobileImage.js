import React from "react";

import classes from "./MobileImage.module.css";
import MobileImg from "../../assets/Mobile.jpg";

const MobileImage = () => (
  <div className={classes.MobileImage}>
    <img src={MobileImg} alt="" />
  </div>
);

export default MobileImage;
