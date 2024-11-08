import { useState } from "react";
import { useLocation } from "react-router-dom";

const OrderTracking = () => {
    // Simulating order history retrieval from localStorage
    const [orderHistory, setOrderHistory] = useState(
        JSON.parse(localStorage.getItem('orderHistory')) || []
    );

    return (
        <div className="pt-24">
            <div className="bg-purple-500 p-10">
            <h2 className="text-center text-white text-3xl p-4 font-bold">Order Tracking</h2>
            <p className="text-center text-white pb-10">Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="mt-5 text-center w-8/12 mx-auto mb-6">
                {orderHistory.length > 0 ? (
                    orderHistory.map((order, index) => (
                        <div key={index} className="p-10 mb-4 shadow-lg rounded-lg bg-white">
                            <h3 className="text-xl font-semibold">Order ID: {order.orderId}</h3>
                            <p>Date: {order.date}</p>
                            <p>Total Cost: ${order.totalCost.toFixed(2)}</p>
                            <p>Items: {order.items.map(item => item.product_title).join(", ")}</p>
                        </div>
                    ))
                ) : (
                    <p>No orders found.</p>
                )}
            </div>
        </div>
    );
};

export default OrderTracking;
