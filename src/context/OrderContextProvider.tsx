import { useState } from "react";
import { Item } from "../components/types";
import { OrderContext } from "./OrderContext";

interface Props {
    children: React.ReactNode;
}

export function OrderContextProvider ({ children }: Props) {
    const [orders, setOrders] = useState<Item[]>([]);
  
    function addItem(item: Item) {
        setOrders([item, ...orders]);
    }
  
    function removeItem(id: string) {
        setOrders(orders.filter(item => item.id !== id));
    }
  
    return (
        <OrderContext.Provider value={{orders, addItem, removeItem}}>
            {children}
        </OrderContext.Provider>
    )
  
  }