import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { Container, Row, Col } from "react-grid-system";
import Checkout from "./checkout";
const Cart = props => {
  console.log(props);
  return (
    <>
      <h1>{(props.cartItems.length)? "Cart Elements as follows: ": "The Cart is Empty"}</h1>
      <Container>
        <Row>
          <Col sm={8}>
            <table >
              {props.cartItems.map(item => {
                return (
                  <tr>
                    <th >
                      <Card
                        style={{
                          width: "10rem",
                          display: "inline-block",
                          margin: "10px 10px"
                        }}
                        key={item._id}
                      >
                        <Card.Img variant="top" src={item.imageUrl} />
                      </Card>
                    </th>
                    <th >
                      <h2>{item.title}</h2>
                      <p> {item.description.substring(0, 200)}</p>
                    </th>
                    <th>
                      <Button
                        className="btn btn-danger btn-sm"
                        onClick={() => props.onCartRemove(item)}
                      >
                        Remove
                      </Button>
                    </th>
                  </tr>
                );
              })}
            </table>
          </Col>
                  <Col  sm={4}>
                  {
                          props.cartItems.length ? <Checkout cartItems={props.cartItems}></Checkout>: <></>
                  }
                      
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
