import React, { useState } from "react";
import { Table } from "../../../../shared/Table/Table";
import { OrdersTableHeader } from "./OrdersTableHeader/OrdersTableHeader";
import { OrdersTableBody } from "./OrdersTableBody/OrdersTableBody";
import { OrdersTableFooter } from "./OrdersTableFooter/OrdersTableFooter";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../model/filtersSlice";
import { selectAllOrders, deselectAllOrders } from "../../model/ordersSlice";
import {
  selectFilteredOrders,
  selectSort,
  selectCurrentPage,
  PAGE_SIZE,
  selectSelectedOrders,
} from "../../model/ordersTableSelectors";

export const OrdersTable = () => {
  const [allSelect, setAllSelect] = useState(false);
  const { ordersList, recordCount } = useSelector(selectFilteredOrders);
  const selectedOrders = useSelector(selectSelectedOrders);
  const sort = useSelector(selectSort);
  const currentPage = useSelector(selectCurrentPage);

  const dispatch = useDispatch();
  let ordersLst = [];
  for (let item of ordersList) {
    let checked = false;
    if (selectedOrders.includes(item.id)) checked = true;
    ordersLst.push({ ...item, checked: checked });
  }

  let paginator = {
    count: Math.ceil(recordCount / PAGE_SIZE),
    current: currentPage,
  };

  const changeSelectAllOrders = () => {
    if (!allSelect) {
      let orders = [];
      for (let item of ordersList) {
        orders.push(item.id);
      }
      dispatch(selectAllOrders(orders));
    } else dispatch(deselectAllOrders());
    setAllSelect(!allSelect);
  };

  return (
    <Table>
      <OrdersTableHeader
        sort={sort}
        allSelect={allSelect}
        onChangeAllSelect={() => changeSelectAllOrders()}
      />
      <OrdersTableBody data={ordersLst} />
      <OrdersTableFooter recSelect={0} paginator={paginator} />
    </Table>
  );
};
