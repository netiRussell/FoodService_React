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
  { id: 4, status: "default", name: "Sushi", description: "This is an example of a dish that can be ordered here", price: 10, amount: 1 },
];

const cartReducer = function (prevValue, dispatchedValue) {
  switch (dispatchedValue.type) {
    case "CART_TOGGLE":
      return { cartItems: prevValue.cartItems, isShown: !prevValue.isShown };
    case "ADD_TO_CART":
      return { cartItems: [...prevValue.cartItems, dispatchedValue.item], isShown: prevValue.isShown };
    case "REMOVE_ITEM":
      return {
        cartItems: prevValue.cartItems.filter((value) => value.id !== dispatchedValue.id),
        isShown: prevValue.isShown,
      };
    case "CHANGE_QUANTITY":
      return {
        cartItems: prevValue.cartItems.map((value) => {
          if (value.id === dispatchedValue.id) {
            value.amount = dispatchedValue.amount;
          }

          return value;
        }),
        isShown: prevValue.isShown,
      };
    default:
      return { cartItems: prevValue.cartItems, isShown: prevValue.isShown };
  }
};

function App() {
  /* Logic of this app implies not changing amount of an item in allItems state 
  while changing the amount for cartItems array since items in cart do need to 
  maintain a certain amount. Amount of an item from allItems wouldn't matter if
  the copy of this item is in the cart at the moment */

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
