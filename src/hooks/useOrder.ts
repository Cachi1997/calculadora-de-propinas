import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const addItem = (item: MenuItem) => {
    const itemExists = order.find((orderItem) => orderItem.id === item.id);
    if (itemExists) {
      //Si existe ese item en el arreglo, agarra la cantidad y le suma 1
      // y lo vuelve a agregar al arreglo
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItem["id"]) => {
    const updatedOrder = order.filter((item) => item.id !== id);
    setOrder(updatedOrder);
  };

  return {
    addItem,
    removeItem,
    order,
  };
};

export default useOrder;
