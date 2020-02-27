import React from 'react';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/products">Products</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/account">Account</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/caddy">Caddy</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
);

export default NavBar;
