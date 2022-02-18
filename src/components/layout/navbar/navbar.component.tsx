import React from 'react';
import NavBarItem from './navbar-item.component';

export default function NavBar(): React.ReactElement {
  return (
    <nav
      role="navigation"
      className="navbar navbar-expand-lg px-3 fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand text-dark" href="#topPage">
          Mikael Escolin
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <NavBarItem currentPage href="#about" classNames="text-dark">
              About
            </NavBarItem>
            <NavBarItem href="#project" classNames="text-dark">
              Project
            </NavBarItem>
            <NavBarItem href="#improvements" classNames="text-dark">
              My Improvements
            </NavBarItem>
            <NavBarItem href="#contact" classNames="text-dark">
              Contact
            </NavBarItem>
          </ul>
        </div>
      </div>
    </nav>
  );
}
