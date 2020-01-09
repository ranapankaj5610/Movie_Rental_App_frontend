import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/navBar";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import auth from "./services/authService";
import Cart from "./components/cart";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {
    cart: [{"_id":"hcireufh4783fyhri", "title":"xyz"}]
  };
  handleCartAdd = item => {
    const originalCart = this.state.cart;
    const cart = [...originalCart, item];
    this.setState({ cart });
  };

  handleCartRemove = item => {
    
    const cart = this.state.cart.filter(c => c._id !== item._id);
    this.setState({ cart });
  };
  componentDidMount() {
    const user = auth.getCurrentUser();
    console.log("user:", user);
    this.setState({ user });
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={this.state.user} cart={this.state.cart}/>
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route
              path="/cart"
              component={() => (
                <Cart
                  onCartAdd={this.handleCartAdd}
                  onCartRemove={this.handleCartRemove}
                  cartItems={this.state.cart}
                ></Cart>
              )}
            ></Route>
            <Route path="/logout" component={Logout} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={()=><Movies onAdd={this.handleCartAdd}></Movies>} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
