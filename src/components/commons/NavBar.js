import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class NavBar extends Component {
  state = {
    menuList: [
      { id: 1, title: "home", path: "/" },
      { id: 2, title: "products", path: "/products" }
    ]
  };

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="navbar-brand" to="/">
          <i className="fas fa-home" />
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {this.state.menuList.map(menu => {
              return (
                <li className="nav-item" key={menu.id}>
                  <Link className="nav-link" to={menu.path}>
                    <span className="text-capitalize">{menu.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link to="/cart" className="ml-auto mr-2">
            <div className="btn btn-primary">
              <i className="fas fa-cart-plus"></i>
            </div>
          </Link>
        </div>
      </nav>
    );
  }
}
