import { useContext } from "react"
import { OrderContext } from "../context/OrderContext"
import "../css/header.css"

export function Header () {
    const { orders } = useContext(OrderContext)

    return (
        <div className='header'>
            <h1>Take Out Menu</h1>
            <p>Order count: {orders.length}</p>
        </div>
    )
}