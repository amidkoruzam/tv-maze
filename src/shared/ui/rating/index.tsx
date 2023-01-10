type Props = {
  value: number;
  starClassName: string;
};

export const Rating = ({ value, starClassName }: Props) => {
  const rounded = Math.floor(value);

  return (
    <div>
      {Array.from({ length: 10 }).map((_, index) => (
        <Star
          key={index}
          className={starClassName}
          isFilled={index <= rounded - 1}
        />
      ))}
    </div>
  );
};

function Star({
  isFilled,
  className,
}: {
  isFilled: boolean;
  className: string;
}) {
  return (
    <svg
      width="10"
      height="9"
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.13737 6.19214L5 6.10179L4.86263 6.19214L2.7713 7.56755L3.43313 5.15355L3.4766 4.99498L3.34823 4.89225L1.39388 3.3283L3.89425 3.21178L4.05849 3.20412L4.11652 3.05029L5 0.708304L5.88348 3.05029L5.94151 3.20412L6.10575 3.21178L8.60612 3.3283L6.65177 4.89225L6.5234 4.99498L6.56687 5.15355L7.2287 7.56755L5.13737 6.19214Z"
        stroke="#FFC302"
        strokeWidth="0.5"
        fill={isFilled ? "#FFC302" : ""}
      />
    </svg>
  );
}
