import { PaginatorItem } from "./PaginatorItem/PaginatorItem";
import styles from "./Paginator.module.css";

export const Paginator = ({ pageCur, pageCount }) => {
  let firstPage = pageCur - 1;
  let lastPage = pageCur + 1;
  if (firstPage < 1) firstPage = 1;
  if (lastPage > pageCount) lastPage = pageCount;
  let leftDots = false;
  if (firstPage > 2) leftDots = true;
  let rightDots = false;
  if (lastPage < pageCount - 1) rightDots = true;

  let result = [];
  if (firstPage !== 1) {
    result.push(<PaginatorItem link text={1} />);
  }
  if (leftDots) {
    result.push(<PaginatorItem text={"..."} />);
  }
  for (var page = firstPage; page <= lastPage; page++) {
    let tPage = page;
    if (page === pageCur) {
      result.push(<PaginatorItem active text={page} />);
    } else {
      result.push(<PaginatorItem link text={page} />);
    }
  }
  if (rightDots) {
    result.push(<PaginatorItem text={"..."} />);
  }
  if (lastPage !== pageCount) {
    result.push(<PaginatorItem link text={pageCount} />);
  }
  result.push(<PaginatorItem link text={"#"} />);

  return <div className={styles._}>{result}</div>;
};
