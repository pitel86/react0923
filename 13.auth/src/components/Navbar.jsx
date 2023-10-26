import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Contexto } from "../App";

const Navbar = () => {
  const {token, setToken} = useContext(Contexto)
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
  }
  return (
    <nav>
      <NavLink to="">Home</NavLink>
      {!token && (
        <>
          <NavLink to="login">Login</NavLink>
          <NavLink to="register">Register</NavLink>
        </>
      )}
      {token && <NavLink to="secure">Secure</NavLink>}
      {token && <button onClick={logOut}>LogOut</button> }
    </nav>
  );
};

export default Navbar;
