import { createContext } from "react";
import { Item } from "../components/types";

interface MenuContextModel {
    orders: Item[];
    addItem: (item: Item) => void;
    removeItem: (id: string) => void;
}

export const OrderContext = createContext<MenuContextModel>({
    orders: [],
    addItem: () => {},
    removeItem: () => {},
});
