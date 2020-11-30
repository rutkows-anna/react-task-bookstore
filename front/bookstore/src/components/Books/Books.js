import { useEffect } from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import BookCard from "../BookCard/BookCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../../redux/actions";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./Books.module.css";

const BookList = () => {
  const books = useSelector((state) => state.books);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <PageWrapper>
      <ClipLoader size={100} color={"#43655A"} loading={loading} />
      {error && <p className={styles.error}> Błąd pobierania!</p>}
      {books.length > 0 &&
        books.map((book) => <BookCard key={book.id} book={book} />)}
    </PageWrapper>
  );
};

export default BookList;
