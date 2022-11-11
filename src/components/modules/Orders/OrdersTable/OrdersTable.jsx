import React, { useState } from "react";
import { Table } from "../../../shared/Table/Table";
import { OrdersTableHeader } from "./OrdersTableHeader/OrdersTableHeader";
import { OrdersTableBody } from "./OrdersTableBody/OrdersTableBody";

import { OrdersTableFooter } from "./OrdersTableFooter/OrdersTableFooter";

export const OrdersTable = ({ data }) => {
  const [sort, setSort] = useState({ field: "date", asc: true });

  const allSelect = false;
  let paginator = { count: Math.ceil(data.length / 10), current: 1 };

  return (
    <Table>
      <OrdersTableHeader
        sort={sort}
        allSelect={allSelect}
        setSort={(newSort) => setSort(newSort)}
      />
      <OrdersTableBody data={data} />
      <OrdersTableFooter recSelect={0} paginator={paginator} />
    </Table>
  );
};
