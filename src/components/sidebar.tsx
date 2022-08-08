import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import '../css/sidebar.css'

export function Sidebar () {
    const { orders } = useContext(OrderContext)

    let total = 0;

    return (
        <div className="sidebar">
            <ul>
                {orders.map(order => {
                    total += order.price;
                    return (
                    <li>
                        {order.name}, {order.price}
                    </li>
                )})}
            </ul>
            <p>total: ${total}</p>
        </div>
    )
}