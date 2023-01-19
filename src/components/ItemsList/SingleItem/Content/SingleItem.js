import AddForm from "../AddForm/AddForm";
import styles from "./SingleItem.module.css";

function SingleItem({ id, productName, description, price }) {
  return (
    <li className={styles.container}>
      <div className="item_info">
        <p className="name">{productName}</p>
        <em>{description}</em>
        <p className="price">${price.toString().split(".")[1] ? price : `${price}.00`}</p>
      </div>
      <AddForm id={id} />
    </li>
  );
}

export default SingleItem;
