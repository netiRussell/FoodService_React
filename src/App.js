import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import CartContext from "./store/cart-context";

import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import ItemsList from "./components/ItemsList/ItemsList";
import Footer from "./components/Footer/Footer";
import CartModal from "./components/CartModal/CartModal";

const data = [{ id: 1, status: "default", name: "Example", description: "This is an example of a dish that can be ordered here", price: 10, amount: 1 }];

const cartReducer = function (prevValue, dispatchedValue) {
  switch (dispatchedValue.type) {
    case "CART_TOGGLE":
      return { cartItems: prevValue.cartItems, isShown: !prevValue.isShown };
    default:
      return { cartItems: prevValue.cartItems, isShown: prevValue.isShown };
  }
};

function App() {
  const [cartState, cartStateDispatch] = useReducer(cartReducer, { cartItems: [], isShown: false });

  return (
    <React.Fragment>
      <CartContext.Provider value={{ cartItems: cartState.cartItems, isShown: cartState.isShown, cartStateDispatch: cartStateDispatch }}>
        <Header />
        <AboutUs />
        <ItemsList />
        <Footer />
        {cartState.isShown && ReactDOM.createPortal(<CartModal />, document.querySelector("body"))}
      </CartContext.Provider>
    </React.Fragment>
  );
}

export default App;
