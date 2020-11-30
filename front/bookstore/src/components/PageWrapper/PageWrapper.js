import styles from "./PageWrapper.module.css";

const PageWrapper = ({ children }) => {
  return <main className={styles.wrapper}>{children}</main>;
};

export default PageWrapper;
