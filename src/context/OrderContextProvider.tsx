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
        const index = orders.findIndex((item) => item.id === id);
        let newArray = orders.slice(0)
        newArray.splice(index, 1)
        setOrders(newArray);
    }
  
    return (
        <OrderContext.Provider value={{orders, addItem, removeItem}}>
            {children}
        </OrderContext.Provider>
    )
  
  }