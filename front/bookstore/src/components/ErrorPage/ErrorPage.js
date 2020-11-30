import PageWrapper from "../PageWrapper/PageWrapper";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <PageWrapper>
      <h1 className={styles.title}>Strona nie istnieje.</h1>
    </PageWrapper>
  );
};

export default ErrorPage;
