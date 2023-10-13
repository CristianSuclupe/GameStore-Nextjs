import classNames from "classnames";
import styles from "./discount.module.scss";

type DiscountProps = {
  children: React.ReactNode;
  className?: string;
};
export const Discount = ({ children, className }: DiscountProps) => {
  return (
    <label
      className={classNames(styles.labelDiscount, {
        [`${className}`]: className,
      })}
    >
      {children}
    </label>
  );
};
