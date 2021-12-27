import React, { useState } from "react";

import "./App.css";

import Headline from "./components/headlines/Headlines";
import MobileImage from "./components/mobileImg/MobileImage";
import Buttons from "./components/buttons/Buttons";
import Contacts from "./components/contacts/Contacts";

const App = () => {
  const [headlines] = useState([
    {
      headline: "Find Promos on your favourite products",
    },
    {
      headline: "View the best deals from your favourite grocery store",
    },
    {
      headline: "Register all your membership cards in one place",
    },
    {
      headline: "Read all your brochures in a single App",
    },
  ]);
  const [popupAlart, setPopupAlart] = useState(false);

  const popupHandler = () => {
    setPopupAlart((prevState) => !prevState);
  };
  return (
    <div className="App">
      <div className="AppContent">
        <div>
          <Headline headlines={headlines} />
          <Buttons popupHandler={popupHandler} popupAlart={popupAlart} />
          <Contacts />
        </div>
        <MobileImage />
      </div>
    </div>
  );
};

export default App;
