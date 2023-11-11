"use client";
import { Button, Icon, Label } from "semantic-ui-react";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import { useAuthContext } from "@/src/hooks/useAuth";
import { useCart } from "@/src/hooks/useCart";
import styles from "./account.module.scss";

// TODO: ...

const Account = () => {
  const { user } = useAuthContext();
  const { total } = useCart();
  const router = useRouter();

  const goToLogin = () => router.push("/join/sign-in");
  const goToAccount = () => router.push("/account");
  const goToCart = () => {
    if (!user) goToLogin();
    else router.push("/cart");
  };
  return (
    <div className={styles.account}>
      <Button icon className={styles.cart} onClick={goToCart}>
        <Icon name="cart" />
        {total > 0 && <Label circular>{total}</Label>}
      </Button>
      <Button
        icon
        className={classNames({ [styles.user]: user })}
        onClick={user ? goToAccount : goToLogin}
      >
        <Icon name="user outline" />
      </Button>
    </div>
  );
};

export default Account;
