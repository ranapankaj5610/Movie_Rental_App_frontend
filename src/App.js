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
    cart: [
      {
        title: "Airplane",

        numberInStock: 5,
        dailyRentalRate: 2,
        price: 10,
        imageUrl:
          "http://pocatellofilmsociety.com/sites/default/files/onceupon_0.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere, sapien sed lobortis pulvinar, mi felis sollicitudin lectus, ut pharetra est metus sit amet massa. Suspendisse mattis suscipit quam, id dapibus nisi posuere non. Mauris dignissim libero accumsan, lobortis nulla et, ullamcorper ipsum. Proin luctus lobortis placerat. Vestibulum pharetra maximus tellus id consectetur. Praesent dignissim in ligula a scelerisque. Sed et turpis feugiat, faucibus purus consectetur, convallis lectus. Nulla mattis lobortis ipsum eget condimentum."
      }
    ]
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
        <NavBar user={this.state.user} cart={this.state.cart} />
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
            <Route
              path="/movies"
              component={() => <Movies onAdd={this.handleCartAdd}></Movies>}
            />
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
