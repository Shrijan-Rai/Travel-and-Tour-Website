import { Component } from "react";
import "./NavbarStyles.css";
import { Route, Routes } from "react-router-dom";

import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import Login from "../routes/login";

class Navbar extends Component {
  state = {clicked: false}
  
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Shrijan</h1>
        
        <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {
          MenuItems.map((item,index) => {
            return (
              <li key={index}>
            <Link to={item.url} className={item.cName}><i className={item.icon}></i>{item.title}</Link>
              </li>
            )
          })
          }
          {/* <button onClick={
            ()=>
            MenuItems.map((item,index) => {
              return (
                <li key={index}>
              <Link to={item.url} className={item.cName}>{item.title}</Link>
                </li>
              )
            })

          }
          >Sign Up/Login</button> */}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
