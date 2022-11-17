import { loadItems, STATUS_LIST } from "../../../../dbase/data";
import { createSelector } from "@reduxjs/toolkit";

export const PAGE_SIZE = 20;
export const selectAll = (state) => state.filters;
export const selectSort = (state) => state.sort.sort;
export const selectFilter = (state) => selectAll(state).filter;
export const selectSearch = (state) => selectAll(state).search;
export const selectCurrentPage = (state) => selectAll(state).currentPage;

export const selectOrders = (state) => state.orders.ordersList;
export const selectSelectedOrders = (state) => state.orders.selectedOrders;
export const selectSelectedRecordCount = (state) =>
  selectSelectedOrders(state).length;

export const selectOrder = (state) => {
  const order = state.orders.order;
  const items =
    order && loadItems().filter((record) => record.orderId === order.id);
  return { order: order, items: items };
};

const strToDate = (date) => {
  return new Date(date.split(".").reverse().join("-"));
};

const dateInRange = (date, startDate, endDate) => {
  let result = true;
  if (startDate) result = result && date >= strToDate(startDate);
  if (endDate) result = result && date <= strToDate(endDate);
  return result;
};

const statusInSelected = (status, selectedStatuses) => {
  if (
    selectedStatuses.length > 0 &&
    selectedStatuses.length < Object.keys(STATUS_LIST).length
  )
    return selectedStatuses.includes(status);
  else return true;
};

const amountInRange = (amount, startAmount, endAmount) => {
  let result = true;
  if (startAmount) result = result && amount >= +startAmount;
  if (endAmount) result = result && amount <= endAmount;
  return result;
};

const recordInSearch = (id, fio, search) => {
  return (
    !search ||
    id.toString().startsWith(search) ||
    fio.toLowerCase().includes(search.toLowerCase())
  );
};

const areAllEmpty = (args) => args.every((element) => !element.length);

const ordersFilter = (orders, filter, search) => {
  if (areAllEmpty(Object.values(filter).concat(search))) return orders;

  return orders.filter(
    (record) =>
      dateInRange(strToDate(record.date), filter.startDate, filter.endDate) &&
      statusInSelected(record.status, filter.selectedStatuses) &&
      amountInRange(record.amount, filter.startAmount, filter.endAmount) &&
      recordInSearch(record.id, record.fio, search)
  );
};

const handlerSortDate = (datePrev, dateNext) => {
  return strToDate(datePrev) > strToDate(dateNext) ? 1 : -1;
};

const handlerSortStatus = (statusPrev, statusNext) => {
  return STATUS_LIST[statusPrev].localeCompare(STATUS_LIST[statusNext]);
};

const handlerSortNumber = (itemPrev, itemNext) => {
  return itemPrev > itemNext ? 1 : -1;
};

const ordersSort = (orders, sort) => {
  let handlerSort;
  switch (sort.field) {
    case "date":
      handlerSort = handlerSortDate;
      break;
    case "status":
      handlerSort = handlerSortStatus;
      break;
    default:
      handlerSort = handlerSortNumber;
  }
  return [...orders].sort(
    (recordPrev, recordNext) =>
      handlerSort(recordPrev[sort.field], recordNext[sort.field]) *
      (sort.asc ? 1 : -1)
  );
};

const getOrdersPage = (orders, page) =>
  orders.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

export const selectFilteredOrders = createSelector(
  selectOrders,
  selectFilter,
  selectSearch,
  selectSort,
  selectCurrentPage,
  (ordersList, filter, search, sort, currentPage) => {
    let displayList = ordersFilter(ordersList, filter, search);
    displayList = ordersSort(displayList, sort);
    const recordCount = displayList.length;
    displayList = getOrdersPage(displayList, currentPage);

    return { ordersList: displayList, recordCount: recordCount };
  }
);
