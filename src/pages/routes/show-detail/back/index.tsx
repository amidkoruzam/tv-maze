import { useRouter } from "next/router";
import { paths } from "src/shared/paths";
import styles from "./styles.module.css";

export const Back = ({
  redirectToHomeonBack,
}: {
  redirectToHomeonBack: boolean;
}) => {
  const router = useRouter();

  const onClick = () => {
    if (redirectToHomeonBack) {
      router.push(paths.home());
    } else {
      router.back();
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={onClick} className={styles.button}>
        <Arrow />
        <span>Back to search results</span>
      </button>
    </div>
  );
};

function Arrow() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.02513 11.8891L3 11.864L9.36396 5.5L10.7782 6.91421L6.69239 11H21V13H6.91421L10.7782 16.864L9.36396 18.2782L3 11.9142L3.02513 11.8891Z"
        fill="white"
      />
    </svg>
  );
}
