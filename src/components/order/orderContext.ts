import { createContext, useContext } from "react";

export type OrderContextValue = {
  /** Opens the delivery-service picker. `source` is passed through to analytics. */
  openOrder: (source: string) => void;
};

export const OrderContext = createContext<OrderContextValue>({ openOrder: () => {} });

export const useOrder = () => useContext(OrderContext);
