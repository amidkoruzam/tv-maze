import * as React from "react";
import styles from "./styles.module.css";

export const PrimaryLayout = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.container}>{children}</div>
);
