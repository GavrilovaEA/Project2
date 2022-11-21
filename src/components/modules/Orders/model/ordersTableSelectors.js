import { loadItems, STATUS_LIST } from "../../../../dbase/data";
import { createSelector } from "@reduxjs/toolkit";

export const PAGE_SIZE = 20;
export const selectFilters = (state) => state.filters;
export const selectSort = (state) => state.sort.sort;
export const selectFilter = (state) => selectFilters(state).filter;
export const selectSearch = (state) => selectFilters(state).search;
export const selectCurrentPage = (state) => selectFilters(state).currentPage;

export const selectOrders = (state) => state.orders.ordersList;
export const selectSelectedOrders = (state) => state.orders.selectedOrders;
export const selectSelectedRecordCount = (state) =>
  selectSelectedOrders(state).length;

export const selectOrder = (state) => {
  const editedOrder = state.orders.editedOrder;
  const items =
    editedOrder &&
    loadItems().filter((record) => record.orderId === editedOrder.id);
  return { order: editedOrder, items: items };
};

const strToDate = (date) => {
  return new Date(date.split(".").reverse().join("-"));
};

const dateInRange = (date, startDate, endDate) => {
  if (
    (startDate && date < strToDate(startDate)) ||
    (endDate && date > strToDate(endDate))
  ) {
    return false;
  }
  return true;
};

const statusInSelected = (status, selectedStatuses) => {
  if (
    selectedStatuses.length > 0 &&
    selectedStatuses.length < Object.keys(STATUS_LIST).length
  ) {
    return selectedStatuses.includes(status);
  }
  return true;
};

const amountInRange = (amount, startAmount, endAmount) => {
  if (
    (startAmount && amount < +startAmount) ||
    (endAmount && amount > +endAmount)
  ) {
    return false;
  }
  return true;
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

const handlerSort = {
  date: handlerSortDate,
  status: handlerSortStatus,
  amount: handlerSortNumber,
  quantity: handlerSortNumber,
};

const ordersSort = (orders, sort) => {
  return [...orders].sort(
    (recordPrev, recordNext) =>
      handlerSort[sort.field](recordPrev[sort.field], recordNext[sort.field]) *
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
    const displayOrdersFiltered = ordersFilter(ordersList, filter, search);
    const displayOrdersSorted = ordersSort(displayOrdersFiltered, sort);
    const recordCount = displayOrdersSorted.length;
    const displayOrdersPage = getOrdersPage(displayOrdersSorted, currentPage);

    return { ordersList: displayOrdersPage, recordCount: recordCount };
  }
);
