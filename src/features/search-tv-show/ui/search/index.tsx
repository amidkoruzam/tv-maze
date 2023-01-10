import {
  ChangeEventHandler,
  DetailedHTMLProps,
  FormEventHandler,
  InputHTMLAttributes,
} from "react";
import { Button } from "src/shared/ui/button";
import styles from "./styles.module.css";

export type TvShowSearchProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  inputProps?: Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "value" | "onChange"
  >;
};

export const TvShowSearch = ({
  value,
  onChange,
  onSubmit,
  inputProps = {},
}: TvShowSearchProps) => {
  const submit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    onSubmit(value);
  };

  const change: ChangeEventHandler<HTMLInputElement> = (evt) =>
    onChange(evt.target.value);

  return (
    <form className={styles.container} onSubmit={submit}>
      <input
        {...inputProps}
        className={styles.input}
        placeholder="Search for TV shows"
        value={value}
        onChange={change}
      />

      <Button>Search</Button>
    </form>
  );
};
