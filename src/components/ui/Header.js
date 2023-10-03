import React from 'react';
import { NavLink } from 'react-router-dom';
import {LogoutButton} from '../auth/LogoutButton'

export const Header = () => {

  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">E-commerce</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='Active' exact aria-current="page" to="/brand">Marcas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='Active' exact aria-current="page" to="/category"> Categorias</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='Active' exact aria-current="page" to="/product">Productos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='Active' exact aria-current="page" to="/user">Usuarios</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <LogoutButton/>
        </div>
      </div>
    </nav>
  )
}
