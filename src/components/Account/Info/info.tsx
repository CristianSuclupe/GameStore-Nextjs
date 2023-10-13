"use client";
import { useAuthContext } from "@/src/hooks/useAuth";
import { Button, Icon } from "semantic-ui-react";
import { DateTime } from "luxon";
import styles from "./info.module.scss";

export const Info = () => {
  const { user } = useAuthContext();
  if (!user) {
    return null;
  }
  const createdAt = user?.createdAt ?? "";
  return (
    <div className={styles.info}>
      <Button icon className={styles.user}>
        <Icon name="user outline" />
      </Button>
      <h3 className={styles.username}>{user.username}</h3>
      <h4 className={styles.email}>{user.email}</h4>
      <p className={styles.createdAt}>
        Miembro desde el:{" "}
        {DateTime.fromISO(createdAt, { locale: "es" }).toFormat("DDD")}
      </p>
    </div>
  );
};
