"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "semantic-ui-react";
import { map } from "lodash";
import { useSearchParams } from "next/navigation";
import classNames from "classnames";
import styles from "./header.module.scss";

export const Header = () => {
  const params = useSearchParams();
  const currentStep = params.get("step")
    ? parseInt(params.get("step") as string)
    : 1;
  const steps = [
    { number: 1, title: "Cesta" },
    { number: 2, title: "Pago" },
    { number: 3, title: "Confirmación" },
  ];
  return (
    <header className={styles.headerCart}>
      <div className={styles.left}>
        <Link href="/">
          <Image src="/images/logo.png" alt="Gaming" width={486} height={90} />
        </Link>
      </div>
      <div className={styles.center}>
        {map(steps, (step) => (
          <div
            key={step.number}
            className={classNames({
              [styles.active]: step.number === currentStep,
              [styles.success]: step.number < currentStep,
            })}
          >
            <span className={styles.number}>
              <Icon name="check" />
              {step.number}
            </span>
            <span>{step.title}</span>
            <span className={styles.space} />
          </div>
        ))}
      </div>
      <div className={styles.right}>
        <Icon name="lock" />
        <div>
          <span>Pago Seguro</span>
          <span>Tus datos están protegidos</span>
        </div>
      </div>
    </header>
  );
};
