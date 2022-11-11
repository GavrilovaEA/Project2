import { PaginatorItem } from "./PaginatorItem/PaginatorItem";
import styles from "./Paginator.module.css";

export const Paginator = ({ pageCur, pageCount, onGotoPage }) => {
  const onInputPage = () => {
    console.log("Отобразить диалог запроса номера страницы");
  };

  let firstPage = pageCur - 1;
  let lastPage = pageCur + 1;
  if (firstPage < 1) firstPage = 1;
  if (lastPage > pageCount) lastPage = pageCount;
  let leftDots = false;
  if (firstPage > 2) leftDots = true;
  let rightDots = false;
  if (lastPage < pageCount - 1) rightDots = true;

  return (
    <div className={styles._}>
      {firstPage !== 1 && (
        <PaginatorItem
          key={1}
          link
          text="1"
          onClick={() => onGotoPage && onGotoPage(1)}
        />
      )}
      {leftDots && <PaginatorItem key="ld" text="..." />}

      {Array(lastPage - firstPage + 1)
        .fill(0)
        .map((item, i) =>
          i + firstPage === pageCur ? (
            <PaginatorItem key={i + firstPage} active text={i + firstPage} />
          ) : (
            <PaginatorItem
              key={i + firstPage}
              link
              text={i + firstPage}
              onClick={() => onGotoPage && onGotoPage(i + firstPage)}
            />
          )
        )}

      {rightDots && <PaginatorItem key="rd" text="..." />}
      {lastPage !== pageCount && (
        <PaginatorItem
          key={pageCount}
          link
          text={pageCount}
          onClick={() => onGotoPage && onGotoPage(pageCount)}
        />
      )}
      <PaginatorItem key="#" link text="#" onClick={onInputPage} />
    </div>
  );
};
