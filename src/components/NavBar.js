import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [search , setSearch]=useState('')
  const navigate = useNavigate()
  const handlerSubmit = (e) =>{
e.preventDefault()
navigate(`./search?name=${search}`)
setSearch('')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/add" className="nav-link active" aria-current="page">
                Add Contact
              </Link>
            </li>
          
           
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handlerSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
