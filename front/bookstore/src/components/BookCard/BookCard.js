import { useDispatch } from "react-redux";
import { bookAdd } from "../../redux/actions";
import styles from "./BookCard.module.css";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const onAdd = (book) => {
    dispatch(bookAdd(book));
  };

  return (
    <div className={styles.card}>
      <img src={book.cover_url} alt={book.title} className={styles.poster} />
      <div className={styles.content}>
        <h1 className={styles.title}>{book.title}</h1>
        <p className={styles.info}>autor: {book.author}</p>
        <p className={styles.info}>liczba stron: {book.pages}</p>
        <button className={styles.button} onClick={() => onAdd(book)}>
          Dodaj do koszyka
        </button>
      </div>
    </div>
  );
};

export default BookCard;
