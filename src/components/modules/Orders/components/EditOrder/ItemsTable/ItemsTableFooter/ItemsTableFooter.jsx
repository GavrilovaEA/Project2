import styles from "./ItemsTableFooter.module.css";

export const ItemsTableFooter = ({ amount }) => {
  return (
    <div className={styles._}>
      <div className={styles.caption}>Итоговая сумма:</div>
      <div className={styles.value}>{amount} р</div>
    </div>
  );
};
