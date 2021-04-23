import styles from "./Header.module.scss";
export const Header = () => {
  return (
    <h1 className={styles.title}>
      Welcome to <a href="/">covid-app </a>
    </h1>
  );
};
