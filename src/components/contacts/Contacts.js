import React from "react";

import classes from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={classes.Contacts}>
      <div>
        <h4>Contact us by </h4>
      </div>
      <div>
        <p>
          email: <strong> byappsolut@gmail.com</strong>
        </p>
      </div>
      <div>
        <p>or</p>
      </div>
      <div>
        <p>
          Mobile:<strong>58032882</strong>
        </p>
      </div>
    </div>
  );
};

export default Contacts;
