"use client";
import { Container, Icon } from "semantic-ui-react";
import _ from "lodash";
import { data } from "./barTrust.data";
import styles from "./barTrust.module.scss";
export const BarTrust = () => {
  return (
    <div className={styles.barTrust}>
      <Container className={styles.content}>
        {_.map(data, (item) => (
          <div key={item.icon} className={styles.block}>
            <Icon name={item.icon} />
            <div>
              <h5>{item.title}</h5>
              <span>{item.description}</span>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};
