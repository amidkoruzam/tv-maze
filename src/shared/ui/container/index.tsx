import clsx from "clsx";
import styles from "./styles.module.css";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={clsx(styles.container, className)}>{children}</div>;
