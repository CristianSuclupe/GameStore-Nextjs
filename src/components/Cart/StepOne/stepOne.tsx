import { CartData } from "@/src/utils";
import { Basket } from "./Basket";
import { Resume } from "./Resume";
import styles from "./stepOne.module.scss";

type StepOneProps = {
  cartInfo: CartData[];
};
export const StepOne = ({ cartInfo }: StepOneProps) => {
  return (
    <div className={styles.stepOne}>
      <div className={styles.center}>
        <Basket cartInfo={cartInfo} />
      </div>
      <div className={styles.right}>
        <Resume cartInfo={cartInfo} />
      </div>
    </div>
  );
};
