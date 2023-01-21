import React from "react";

const CartContext = React.createContext({
  data: [],
  isShown: false,
});

export default CartContext;
