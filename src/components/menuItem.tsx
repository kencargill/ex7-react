import { Item } from "./types";
import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import '../css/menuItem.css'


interface MenuItemProps {
    menuItem: Item;
    onDelete?: (id: string) => void;
}

export default function MenuItem({ menuItem }: MenuItemProps) {
    const { removeItem, addItem } = useContext(OrderContext);

    function isVeg () {
    if (menuItem.vegetarian) {
        return '(V)'
    } else {
        return ''
    }}

  return (
    <div className="menuItem">
        <h3>{menuItem.name}  {isVeg()} - {`$${menuItem.price}`}</h3>
        <p>{menuItem.description}</p>
        <p>Calories: {menuItem.calories}</p>

        <button onClick={() => addItem(menuItem)}
        >add to order</button>

        <button onClick={() => removeItem(menuItem.id)}
        >remove from order</button>
    </div>
  )
}