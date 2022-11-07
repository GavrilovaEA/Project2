import { Input } from "../../../../shared/Input/Input";
import { Button } from "../../../../shared/Button/Button";
import styles from "./Filters.module.css";
import { LoadIndicator } from "../../../../shared/LoadIndicator/LoadIndicator";
import { Icon } from "../../../../shared/Icon/Icon";

export const Filters = ({
  search,
  onChangeSearch,
  showForm,
  onClickButtonFilter,
  onResetFilter,
  loading,
}) => {
  return (
    <div className={styles._}>
      <div className={styles.groupItem}>
        <Input
          prefix={<Icon className={styles.iconSearch} iconName="search" />}
          className={styles.inputSearch}
          placeholder="Номер заказа или ФИО"
          onChange={(e) => onChangeSearch(e.target.value)}
          onReset={() => onChangeSearch("")}
          value={search}
        />
        <Button
          className={styles.buttonShow}
          iconName="filter"
          theme={!showForm ? "reverse" : null}
          onClick={onClickButtonFilter}
        >
          Фильтры
        </Button>
        {showForm && (
          <Button theme="reverse" onClick={onResetFilter}>
            Сбросить фильтры
          </Button>
        )}
      </div>
      <LoadIndicator loading={loading} />
    </div>
  );
};
