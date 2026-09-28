import { useCallback, useMemo, useState, type ReactNode } from "react";
import OrderModal from "./OrderModal";
import { OrderContext } from "./orderContext";

const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("unknown");

  const openOrder = useCallback((from: string) => {
    setSource(from);
    setIsOpen(true);
  }, []);

  const value = useMemo(() => ({ openOrder }), [openOrder]);

  return (
    <OrderContext.Provider value={value}>
      {children}
      <OrderModal isOpen={isOpen} onClose={() => setIsOpen(false)} source={source} />
    </OrderContext.Provider>
  );
};

export default OrderProvider;
