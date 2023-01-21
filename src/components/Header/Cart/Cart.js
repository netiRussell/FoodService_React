import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import styles from "./Cart.module.css";

function Cart() {
  const ctx = useContext(CartContext);

  return (
    <button
      className={`button ${styles.button}`}
      onClick={() => {
        ctx.cartStateDispatch({ type: "CART_TOGGLE" });
      }}
    >
      <i className="fas fa-store"></i> Your cart
    </button>
  );
}

export default Cart;
