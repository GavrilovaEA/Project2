import { OrdersTableBodyRow } from "./OrdersTableBodyRow/OrdersTableBodyRow";
import { TableBody } from "../../../../../shared/TableBody/TableBody";
import { useSelector } from "react-redux";
import { selectOrder } from "../../../model/ordersTableSelectors";

export const OrdersTableBody = ({ data }) => {
  const { order } = useSelector(selectOrder);
  const editId = order && order.id;
  return (
    <TableBody>
      {data.map((item) => (
        <OrdersTableBodyRow
          key={item.id}
          data={item}
          checked={item.checked}
          selected={item.id === editId}
        />
      ))}
    </TableBody>
  );
};
