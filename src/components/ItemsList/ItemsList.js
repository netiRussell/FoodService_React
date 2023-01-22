import styles from "./ItemsList.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

import SingleItem from "./SingleItem/Content/SingleItem";

function ItemsList({ data }) {
  const ctx = useContext(CartContext);

  return (
    <section className={`container ${styles.w_container}`}>
      <ul className={styles.container}>
        {ctx.allItems.map((value) => {
          return <SingleItem id={value.id} key={value.id} status={value.status} productName={value.name} description={value.description} price={value.price} amount={value.amount} />;
        })}
      </ul>
    </section>
  );
}

export default ItemsList;
