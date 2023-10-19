import styles from "./noResult.module.scss";

type NoResultProps = {
  text: string;
};
export const NoResult = ({ text }: NoResultProps) => {
  return (
    <div className={styles.noResult}>
      <p>{text}</p>
    </div>
  );
};
