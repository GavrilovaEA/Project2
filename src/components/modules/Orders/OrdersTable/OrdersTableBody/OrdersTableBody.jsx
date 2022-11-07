import { OrdersTableBodyRow } from "./OrdersTableBodyRow/OrdersTableBodyRow";
import { TableBody } from "../../../../shared/Table/TableBody/TableBody";

export const OrdersTableBody = ({ data }) => {
  return (
    <TableBody>
      {data.map((item) => (
        <OrdersTableBodyRow key={item.id} data={item} />
      ))}
    </TableBody>
  );
};
