import React from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';

const Navbar=()=>{
    return(
        <>
    
          <Paper  elevation={3}>
      <nav className="navbar navbar-expand-lg navbar-dark ">
  <div className="container-md">
    <NavLink className="navbar-brand" to="#">Code Bender</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{outline:"none",border:"none"}}>
      <MenuIcon />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link" to="/"> Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/service">Service</NavLink>
        </li>
      
        
      </ul>

    </div>
  </div>
</nav>
     
     </Paper>
        </>
    );
}

export default Navbar;


// <div className="container-fluid">
// <div className="row">
//     <div className="col-10 mx-auto"></div>
// </div>
// </div>