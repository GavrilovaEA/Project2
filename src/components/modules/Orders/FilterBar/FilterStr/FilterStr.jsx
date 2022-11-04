import { Input } from "../../../../shared/Input/Input";
import { Button } from "../../../../shared/Button/Button";
import styles from "./FilterStr.module.css";
import { LoadIndicator } from "../../../../shared/LoadIndicator/LoadIndicator";

export const FilterStr = ({
  find,
  onChangeFind,
  showForm,
  onClickButtonFilter,
  onResetFilter,
  loading,
}) => {
  return (
    <div className={styles._}>
      <div className={styles.groupItem}>
        <Input
          className={styles.inputFind}
          iconName={"find"}
          placeholder={"Номер заказа или ФИО"}
          onChange={(e) => onChangeFind(e.target.value)}
          onClickButton={() => onChangeFind("")}
          value={find}
        />
        <Button
          className={styles.buttonShow}
          iconName={"filter"}
          reverse={!showForm}
          onClick={onClickButtonFilter}
        >
          Фильтры
        </Button>
        {showForm && (
          <Button reverse onClick={onResetFilter}>
            Сбросить фильтры
          </Button>
        )}
      </div>
      <LoadIndicator loading={loading} />
    </div>
  );
};
