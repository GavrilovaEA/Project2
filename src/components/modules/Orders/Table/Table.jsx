import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
import { TableFoot } from "./TableFoot/TableFoot";
import { useState } from "react";
import styles from "./Table.module.css";

export const Table = ({ data }) => {
  const [sort, setSort] = useState({ field: "date", ack: true });

  const allSelect = false;
  let paginator = { count: Math.ceil(data.length / 10), current: 1 };

  return (
    <div className={styles._}>
      <TableHead sort={sort} allSelect={allSelect} />
      <TableBody data={data} />
      <TableFoot recSelect={0} paginator={paginator} />
    </div>
  );
};
