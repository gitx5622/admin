import React from "react";
import "../css/main.css";
import { Button } from 'shards-react';
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
    <>
      <li>
        <Button theme="info" pill href="/login">Login</Button>
      </li>
      <li style={{paddingLeft:"20px"}}>
        <Button theme="info" pill href="/signup">Signup</Button>
      </li>
    </>
  );

  const SignedInLinks = (
    <li>
    <button type="button" className="btn btn-primary">
      <Button theme="info" pill onClick={logout} style={{ color: "black" }} href="/login">
        Logout
      </Button>
    </button>
    </li>
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
