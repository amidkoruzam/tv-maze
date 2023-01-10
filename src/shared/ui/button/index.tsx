import styles from "./styles.module.css";

export const Button = ({ children }: { children: React.ReactNode }) => (
  <button className={styles.button}>{children}</button>
);
