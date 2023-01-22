import styles from "./AddForm.module.css";

function AddForm({ id, amount }) {
  return (
    <form className={styles.container}>
      <div className={styles.amount}>
        <label htmlFor={id}>Amount: </label>
        <input className={styles.input_text} id={id} type="number" min="1" max="10" defaultValue={amount} />
      </div>

      <button className={`button ${styles.submit}`} type="submit">
        <i className={`fa-solid fa-cart-plus ${styles.icon}`}></i> Add
      </button>
    </form>
  );
}

export default AddForm;
