import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import ItemsList from "./components/ItemsList/ItemsList";
import Footer from "./components/Footer/Footer";

import Backdrop from "./components/CartModal/CartModal";

function App() {
  return (
    <React.Fragment>
      <Header />
      <AboutUs />
      <ItemsList />
      <Footer />
      {ReactDOM.createPortal(<Backdrop />, document.querySelector("body"))}
    </React.Fragment>
  );
}

export default App;
