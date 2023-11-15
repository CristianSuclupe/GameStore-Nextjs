"use client";
import { Container, Icon, SemanticICONS } from "semantic-ui-react";
import { map } from "lodash";
import { data } from "./barTrust.data";
import styles from "./barTrust.module.scss";
export const BarTrust = () => {
  return (
    <div className={styles.barTrust}>
      <Container className={styles.content}>
        {map(data, (item) => (
          <div key={item.icon} className={styles.block}>
            <Icon name={item.icon as SemanticICONS} />
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
