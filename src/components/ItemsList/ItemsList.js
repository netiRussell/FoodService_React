import SingleItem from "./SingleItem/Content/SingleItem";
import styles from "./ItemsList.module.css";

function ItemsList() {
  return (
    <section className={`container ${styles.w_container}`}>
      <ul className={styles.container}>
        <SingleItem productName={"Example"} description={"This is an example of a dish that can be ordered here"} price={10} id="1" />
      </ul>
    </section>
  );
}

export default ItemsList;
