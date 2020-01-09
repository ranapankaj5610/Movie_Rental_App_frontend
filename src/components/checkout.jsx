import React, { Component } from 'react';
import {Card, ListGroup, Button} from 'react-bootstrap';

 function totalCost  (cartItems)
{
    let cost = 0;
    cartItems.map(item => {
        cost += item.dailyRentalRate;

    })
    return cost;
}

const Checkout = (props) => {
    
       

    return (<Card style={{ width: '100%', position: "sticky", top: 30 }}>
        <ListGroup variant="flush">
            {
                props.cartItems.map(item=>{
                    return <ListGroup.Item><strong>{item.title}</strong> : {item.dailyRentalRate} $</ListGroup.Item>

                })
                
            }
            <ListGroup.Item>Total Cost: {totalCost(props.cartItems)} $</ListGroup.Item>
            <Button style={{width: "100%"}} className="btn btn-success">Checkout</Button>
        </ListGroup>
    </Card> );
}
 
export default Checkout;