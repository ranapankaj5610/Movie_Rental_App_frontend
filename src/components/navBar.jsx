import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Button} from 'react-bootstrap';
const NavBar = ({ user, cart }) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <Link className="navbar-brand" to="/">
             Vidly
           </Link>
       <button 
         className="navbar-toggler"
         type="button" 
         data-toggle="collapse" 
         data-target="#navbarNav"   
         aria-controls="navbarNav" 
         aria-expanded="false" 
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
       <NavLink className="nav-item nav-link " to="/movies">
          Movies
        </NavLink>
       <NavLink className="nav-item nav-link  " to="/customers">
          Customers
        </NavLink>
       <NavLink className="nav-item nav-link " to="/rentals">
          Rentals
        </NavLink>  
        {!user && (
          <React.Fragment>
           <NavLink className="nav-item nav-link " to="/login">
             Login
          </NavLink>
          <NavLink className="nav-item nav-link " to="/register">
            Register
          </NavLink>
        </React.Fragment>
        )}

          {user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link " to="/profile" style={{float: "right"}}>
                {user.name}
              </NavLink>
              <NavLink className="nav-item nav-link " to="/logout" style={{float: "right"}}>
                Logout
              </NavLink>
            </React.Fragment>
          )}
         
        </div>
      </div>
    </nav>
  );
};
 
export default NavBar;