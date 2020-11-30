import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { routes } from "../../routes/routes";
import { Link } from "react-router-dom";
import PageWrapper from "../PageWrapper/PageWrapper";
import styles from "./Cart.module.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <PageWrapper>
      {cart.length > 0 ? (
        cart.map((item) => <CartItem key={item.book.id} item={item} />)
      ) : (
        <p className={styles.text}>Twój koszyk jest pusty. Dodaj produkt.</p>
      )}

      {cart.length > 0 && (
        <Link to={routes.form} className={styles.link}>
          Dalej
        </Link>
      )}
    </PageWrapper>
  );
};

export default Cart;
