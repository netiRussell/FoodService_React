import React, { useContext } from "react";
import styles from "./CartModal.module.css";
import CartContext from "../../store/cart-context";

import SingleItem from "./SingleItem/SingleItem";
import Backdrop from "./Backdrop/Backdrop";

function CartModal() {
  const ctx = useContext(CartContext);

  return (
    <React.Fragment>
      <form className={styles.modal}>
        <SingleItem name="Example" price={10} amount={2} />
        <SingleItem name="Example" price={10} amount={2} />
        <SingleItem name="Example" price={10} amount={2} />

        <div className={styles.container_order}>
          <hr className={`line ${styles.line}`} />
          <div className={styles.container_amount}>
            <p>Total amount: </p> <span>$33.00</span>
          </div>
          <button className={`button ${styles.button} ${styles.submit}`} type="submit">
            Order
          </button>
          <button
            className={`button ${styles.button} ${styles.close}`}
            type="button"
            onClick={() => {
              ctx.cartStateDispatch({ type: "CART_TOGGLE" });
            }}
          >
            Close
          </button>
        </div>
      </form>
      <Backdrop cartStateDispatch={ctx.cartStateDispatch}></Backdrop>
    </React.Fragment>
  );
}

export default CartModal;
