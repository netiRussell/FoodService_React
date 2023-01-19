import styles from "./SingleItem.module.css";

function SingleItem({ name, price, amount }) {
  return (
    <div className={styles.container}>
      <div className="item_info">
        <p className="name">{name}</p>
        <p className="price">${price} ($20.00)</p>
      </div>
      <div className={`item_info ${styles.container_buttons}`}>
        <input className={styles.input_number} type="number" min="1" max="10" defaultValue={amount} />
        <button type="button" className={`button ${styles.button}`}>
          <i className="fa-solid fa-plus"></i>
        </button>
        <button type="button" className={`button ${styles.button}`}>
          <i className="fa-solid fa-minus"></i>
        </button>
      </div>
    </div>
  );
}

export default SingleItem;
