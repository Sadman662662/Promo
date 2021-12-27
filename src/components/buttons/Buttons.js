import React from "react";

import classes from "./Buttons.module.css";

import GoogleBtn from "../../assets/google.jpg";
import AppleBtn from "../../assets/apple.jpg";
import Modal from "../ui/Modal/Modal";

const Buttons = (props) => {
  return (
    <div className={classes.Buttons}>
      <a href="https://play.google.com/store/apps/details?id=com.appsolut.promohunter">
        <img src={GoogleBtn} alt="" />
      </a>
      <div onClick={props.popupHandler}>
        <img src={AppleBtn} alt="" />
      </div>
      <Modal show={props.popupAlart} modalClosed={props.popupHandler}>
        <h1>Coming Soon..</h1>
      </Modal>
    </div>
  );
};

export default Buttons;
