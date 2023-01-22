import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  isShown: false,
});

export default CartContext;
