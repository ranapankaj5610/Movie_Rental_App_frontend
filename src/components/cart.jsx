import React, { Component } from "react";

const Cart = props => {
  console.log(props);
  return (
    <>
      <h1>The Cart Elements are as follows:</h1>

      {props.cartItems.map(item => {
        return <p key={item._id}>{item.title}<button className="btn btn-danger btn-sm" onClick={()=>props.onCartRemove(item)}>Remove From Cart</button></p>;
      })}
    </>
  );
};

export default Cart;
