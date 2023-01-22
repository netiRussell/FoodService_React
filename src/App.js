import React, { useReducer, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import CartContext from "./store/cart-context";

import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import ItemsList from "./components/ItemsList/ItemsList";
import Footer from "./components/Footer/Footer";
import CartModal from "./components/CartModal/CartModal";

const data = [
  { id: 1, status: "default", name: "Example1", description: "This is an example of a dish that can be ordered here", price: 10.2, amount: 1 },
  { id: 2, status: "default", name: "Example2", description: "This is an example of a dish that can be ordered here", price: 10.23, amount: 1 },
  { id: 3, status: "default", name: "Example3", description: "This is an example of a dish that can be ordered here", price: 10, amount: 1 },
];

const cartReducer = function (prevValue, dispatchedValue) {
  switch (dispatchedValue.type) {
    case "CART_TOGGLE":
      return { cartItems: prevValue.cartItems, isShown: !prevValue.isShown };
    case "ADD_TO_CART":
      return { cartItems: [...prevValue.cartItems, dispatchedValue.item], isShown: prevValue.isShown };
    default:
      return { cartItems: prevValue.cartItems, isShown: prevValue.isShown };
  }
};

function App() {
  const [cartState, cartStateDispatch] = useReducer(cartReducer, { cartItems: [], isShown: false });
  const [allItems, setAllItems] = useState(data);

  useEffect(() => {
    console.log(cartState);
  }, [cartState]);

  return (
    <React.Fragment>
      <CartContext.Provider value={{ cartItems: cartState.cartItems, isShown: cartState.isShown, cartStateDispatch: cartStateDispatch, allItems: allItems, setAllItems: setAllItems }}>
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
