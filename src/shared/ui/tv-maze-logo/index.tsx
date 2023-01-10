import Image, { ImageProps } from "next/image";

export const TvMazeLogo = (props: Omit<ImageProps, "src" | "alt">) => (
  <Image
    {...props}
    width={253}
    height={80}
    alt="tv-maze"
    src={"/images/logo.png"}
  />
);
