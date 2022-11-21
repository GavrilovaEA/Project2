import { Table } from "../../../../../shared/Table/Table";
import React from "react";

import styles from "./ItemsTable.module.css";
import { ItemsTableHeader } from "./ItemsTableHeader/ItemsTableHeader";
import { ItemsTableBody } from "./ItemsTableBody/ItemsTableBody";
import { ItemsTableFooter } from "./ItemsTableFooter/ItemsTableFooter";

export const ItemsTable = ({ items }) => {
  let amount = 0;
  for (let item of items) amount += item.prodPrice;

  return (
    <Table className={styles._}>
      <ItemsTableHeader />
      <ItemsTableBody items={items} />
      <ItemsTableFooter amount={amount} />
    </Table>
  );
};
