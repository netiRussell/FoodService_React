import styles from "./CartModal.module.css";
import SingleItem from "./SingleItem/SingleItem";

function Backdrop() {
  return (
    <div className={styles.backdrop}>
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
          <button className={`button ${styles.button} ${styles.close}`} type="button">
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default Backdrop;