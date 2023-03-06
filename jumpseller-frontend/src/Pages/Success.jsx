import React from "react";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Success = () => {
  const location = useLocation();
  console.log(location);
  const data = location.state.stripeData;
  const cart = location.state.cart;
  // const currentUser = useSelector((state) => state.user.currentUser);
  const currentUser = { id: 2, email: "test@email.com" };
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const products_ids = [];
    const quantity = [];

    cart.products.forEach((item) => {
      products_ids.push(item.id);
      quantity.push(item.quantity);
    });

    const req = {
      order: {
        user_id: currentUser.id,
        total: cart.totalPrice,
        shipping: 0,
        address: data.billing_details.address,
        status: "New",
      },
      order_items: {
        ids: products_ids,
        quantity: quantity,
      },
    };

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    })
      .then((response) => response.json())
      .then((res) => {
        setOrderId(res.id);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [cart, data]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
    </div>
  );
};

export default Success;
