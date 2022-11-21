import React from "react";
import { Table } from "../../../../shared/Table/Table";
import { OrdersTableHeader } from "./OrdersTableHeader/OrdersTableHeader";
import { OrdersTableBody } from "./OrdersTableBody/OrdersTableBody";
import { OrdersTableFooter } from "./OrdersTableFooter/OrdersTableFooter";
import { useDispatch, useSelector } from "react-redux";
import { selectAllOrders, deselectAllOrders } from "../../model/ordersSlice";
import {
  selectFilteredOrders,
  selectSort,
  selectCurrentPage,
  PAGE_SIZE,
  selectSelectedOrders,
} from "../../model/ordersTableSelectors";

export const OrdersTable = () => {
  const { ordersList, recordCount } = useSelector(selectFilteredOrders);
  const selectedOrders = useSelector(selectSelectedOrders);
  const sort = useSelector(selectSort);
  const currentPage = useSelector(selectCurrentPage);

  const allSelect = ordersList.length === selectedOrders.length;

  const dispatch = useDispatch();
  const ordersListWithChecked = ordersList.map((item) => {
    return { ...item, checked: selectedOrders.includes(item.id) };
  });

  let paginator = {
    count: Math.ceil(recordCount / PAGE_SIZE),
    current: currentPage,
  };

  const changeSelectAllOrders = () => {
    if (!allSelect) {
      const orders = ordersList.reduce((previos, current) => {
        previos.push(current.id);
        return previos;
      }, []);
      dispatch(selectAllOrders(orders));
    } else dispatch(deselectAllOrders());
  };

  return (
    <Table>
      <OrdersTableHeader
        sort={sort}
        allSelect={allSelect}
        onChangeAllSelect={() => changeSelectAllOrders()}
      />
      <OrdersTableBody data={ordersListWithChecked} />
      <OrdersTableFooter recSelect={0} paginator={paginator} />
    </Table>
  );
};
