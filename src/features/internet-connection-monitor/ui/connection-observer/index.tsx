import { useEffect, useState } from "react";
import { checkIfUserHasStableConnection } from "../../lib";

import styles from "./styles.module.css";

export const ConnectionObserver = () => {
  const [hasStableConnection, setHasStableConnection] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setHasStableConnection(checkIfUserHasStableConnection());
    }, 5000);
  }, []);

  return (
    <>
      {!hasStableConnection && (
        <div className={styles.container}>
          We have noticed that you might have internet connection issue.
        </div>
      )}
      ;
    </>
  );
};
