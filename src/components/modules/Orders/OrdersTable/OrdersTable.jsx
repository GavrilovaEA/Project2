import React, { useState } from "react";
import { Table } from "../../../shared/Table/Table";
import { OrdersTableHeader } from "./OrdersTableHeader/OrdersTableHeader";
import { OrdersTableBody } from "./OrdersTableBody/OrdersTableBody";
import { OrdersTableFooter } from "./OrdersTableFooter/OrdersTableFooter";

import { useSelector } from "react-redux";
import { selectOrders, selectSort } from "./ordersTableSlice";

export const OrdersTable = () => {
  const [allSelect, setAllSelect] = useState(false);

  const { ordersList, paginator } = useSelector(selectOrders);
  const sort = useSelector(selectSort);

  // useEffect(() => {
  //   dispatch(applyFilter({ ...filter, search }));
  // }, [search, filter]);

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
