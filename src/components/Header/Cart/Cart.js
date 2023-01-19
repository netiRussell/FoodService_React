import styles from "./Cart.module.css";

function Cart() {
  return (
    <button className={`button ${styles.button}`}>
      <i className="fas fa-store"></i> Your cart
    </button>
  );
}

export default Cart;
