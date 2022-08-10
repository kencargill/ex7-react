import { Item } from "./types";
import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import '../css/menuItem.css'


interface MenuItemProps {
    menuItem: Item;
}

export default function MenuItem({ menuItem }: MenuItemProps) {
    const { removeItem, addItem, orders } = useContext(OrderContext);

    const hasOrderInCart = orders.includes(menuItem);
    
  return (
    <div className="menuItem">
        <h3>{menuItem.name}  {menuItem.vegetarian ? <p>(V)</p> : <p></p>} - {`$${menuItem.price}`}</h3>
        <p>{menuItem.description}</p>
        <p>Calories: {menuItem.calories}</p>

        <button onClick={() => addItem(menuItem)}
        >add to order</button>

         <button onClick={() => removeItem(menuItem.id)}>
                remove from order
            </button>
    </div>
  )
}