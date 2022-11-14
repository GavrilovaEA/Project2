import React, { useState } from "react";
import { Table } from "../../../../shared/Table/Table";
import { OrdersTableHeader } from "./OrdersTableHeader/OrdersTableHeader";
import { OrdersTableBody } from "./OrdersTableBody/OrdersTableBody";
import { OrdersTableFooter } from "./OrdersTableFooter/OrdersTableFooter";

import { useSelector } from "react-redux";
import {
  selectFilteredOrders,
  selectSort,
  selectCurrentPage,
  PAGE_SIZE,
} from "../../model/ordersTableSelectors";

export const OrdersTable = () => {
  const [allSelect, setAllSelect] = useState(false);

  const { ordersList, recordCount } = useSelector(selectFilteredOrders);
  const sort = useSelector(selectSort);
  const currentPage = useSelector(selectCurrentPage);

  let paginator = {
    count: Math.ceil(recordCount / PAGE_SIZE),
    current: currentPage,
  };

  return (
    <Table>
      <OrdersTableHeader
        sort={sort}
        allSelect={allSelect}
        onChangeAllSelect={() => setAllSelect(!allSelect)}
      />
      <OrdersTableBody data={ordersList} />
      <OrdersTableFooter recSelect={0} paginator={paginator} />
    </Table>
  );
};
