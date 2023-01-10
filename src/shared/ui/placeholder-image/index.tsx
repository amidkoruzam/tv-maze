import clsx from "clsx";

import styles from "./styles.module.css";

export const PlaceholderImage = ({ className }: { className: string }) => (
  <div className={clsx(className, styles.container)}>
    <b>image missing</b>
  </div>
);
