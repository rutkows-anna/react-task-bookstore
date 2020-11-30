import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import cart from "../../assets/cart_icon.svg";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li>
          <Link to={routes.books} className={styles.links}>
            Książki
          </Link>
        </li>
        <li>
          <Link to={routes.cart}>
            {" "}
            <img src={cart} alt="Koszyk" className={styles.cart} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
