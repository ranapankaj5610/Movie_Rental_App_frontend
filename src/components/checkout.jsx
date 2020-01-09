import React, { Component } from "react";
import { Card, ListGroup, Button, Modal } from "react-bootstrap";

function totalCost(cartItems) {
  let cost = 0;
  cartItems.map(item => {
    cost += item.dailyRentalRate;
  });
  return cost;
}

class Checkout extends Component {
  state = { show: false };
  setShow = value => {
    this.setState({ show: value });
  };
  handleClose = () => this.setShow(false);
  handleShow = () => this.setShow(true);
  render() {
    return (
      <>
        <Card style={{ width: "100%", position: "sticky", top: 30 }}>
          <ListGroup variant="flush">
            {this.props.cartItems.map(item => {
              return (
                <ListGroup.Item>
                  <strong>{item.title}</strong> : {item.dailyRentalRate} $
                </ListGroup.Item>
              );
            })}
            <ListGroup.Item>
              Total Cost: {totalCost(this.props.cartItems)} $
            </ListGroup.Item>
            <Button style={{ width: "100%" }} className="btn btn-success" onClick={this.handleShow}>
              Checkout
            </Button>
          </ListGroup>
        </Card>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Checkout Panel</Modal.Title>
          </Modal.Header>
          <Modal.Body>Payment gateway to be integrated here!!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Proceed
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Checkout;
