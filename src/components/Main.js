import React from "react";
import "../css/main.css";
import { useDispatch, useSelector } from "react-redux";
import { SignOut } from "../store/auth/actions/authActions";
import SideNav from "./sideNav";
import MainBody from "./mainBody";

const Main = () => {
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    window.location.reload();
  };
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  };

  const currentState = useSelector((state) => state.Auth);

  const { isAuthenticated, getAllUsers } = currentState;

  const getUsers = getAllUsers.length;

  const dispatch = useDispatch();

  const Logout = () => dispatch(SignOut());

  const logout = (e) => {
    e.preventDefault();
    Logout();
  };

  const SignedOutLinks = (
    <ul className="signout-links">
      <li>
        <a href="/login">Login</a>
      </li>
      <li>
        <a href="/signup">Signup</a>
      </li>
    </ul>
  );

  const SignedInLinks = (
    <button type="button" className="btn btn-primary">
      <a onClick={logout} style={{ color: "black" }} href="/login">
        Logout
      </a>
    </button>
  );
  return (
    <div>
      <div id="mySidenav" className="sidenav">
        <SideNav closeNav={closeNav} />
      </div>

      <div id="main">
        <MainBody
          getUsers={getUsers}
          SignedInLinks={SignedInLinks}
          SignedOutLinks={SignedOutLinks}
          openNav={openNav}
          isAuthenticated={isAuthenticated}
        />
      </div>
    </div>
  );
};

export default Main;
