import { useDispatch } from "react-redux";
import { bookRemove } from "../../redux/actions";
import trash from "../../assets/trash.svg";
import styles from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const onRemove = (bookId) => {
    dispatch(bookRemove(bookId));
  };

  return (
    <div key={item.book.id} className={styles.item}>
      <img src={item.book.cover_url} alt={item.book.title} className={styles.poster} />
      <h1 className={styles.title}>{item.book.title}</h1>
      <p className={styles.quantity}>sztuk: {item.quantity} </p>
      <button className={styles.button} onClick={() => onRemove(item.book.id)}>
        <img src={trash} alt="Usuń przedmiot"className={styles.trash}/>
      </button>
    </div>
  );
};

export default CartItem;
