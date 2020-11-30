import { useState } from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrder } from "../../redux/actions";
import styles from "./Form.module.css";

const Form = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [city, setCity] = useState("");
  const [zip_code, setZip_code] = useState("");

  const cart = useSelector((state) => state.cart);
  const errorOrder = useSelector((state) => state.errorOrder);
  const dispatch = useDispatch();

  const order = cart.map((item) => {
    return {
      id: item.book.id,
      quantity: item.quantity,
    };
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      order,
      first_name,
      last_name,
      city,
      zip_code,
    };
    dispatch(fetchOrder(data));
  };

  return (
    <PageWrapper>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Imię:
          <input
            className={styles.input}
            type="text"
            name="first_name"
            value={first_name}
            onChange={(event) => setFirst_name(event.target.value)}
          ></input>
        </label>
        <label className={styles.label}>
          Nazwisko:
          <input
            className={styles.input}
            type="text"
            name="last_name"
            value={last_name}
            onChange={(event) => setLast_name(event.target.value)}
          ></input>
        </label>
        <label className={styles.label}>
          Miejscowość:
          <input
            className={styles.input}
            type="text"
            name="city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          ></input>
        </label>
        <label className={styles.label}>
          Kod pocztowy (00-000):
          <input
            className={styles.input}
            type="text"
            name="zip_code"
            pattern="^[0-9]{2}-[0-9]{3}$"
            value={zip_code}
            onChange={(event) => setZip_code(event.target.value)}
          ></input>
        </label>
        {errorOrder && (
          <p className={styles.error}>Błąd wysyłania zamówienia.</p>
        )}
        <button className={styles.button} type="submit">
          Zamawiam i płacę
        </button>
      </form>
    </PageWrapper>
  );
};

export default Form;
