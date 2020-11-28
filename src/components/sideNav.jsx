import React from "react";
import { Link } from "react-router-dom";

const SideNav = ({ closeNav }) => {
  return (
    <div>
      <Link className="closebtn" onClick={closeNav}>
      </Link>
      <ul>
        <li>
          <i
            className="fa fa-home fa-2x"
            style={{ color: "#F36F21" }}
            aria-hidden="true"
          >
            <Link to="/">Home</Link>
          </i>
        </li>
        <li>
          <i className="fab fa-servicestack fa-2x">
            <Link to="/">Services</Link>
          </i>
        </li>
        <li>
          <i className="fas fa-mug-hot fa-2x">
            <Link to="/">Clients</Link>
          </i>
        </li>
        <li>
          <i className="fas fa-address-book fa-2x">
            <Link to="/">Contact</Link>
          </i>
        </li>
        <li>
          <i className="fas fa-palette fa-2x">
            <Link to="/">Pages</Link>
          </i>
        </li>
        <li>
          <i className="fas fa-table fa-2x">
            <Link to="/">Tables</Link>
          </i>
        </li>
        <li>
          <i className="fas fa-globe-africa fa-2x">
            <Link to="/">Maps</Link>
          </i>
        </li>
        <li>
          <i className="fas fa-chart-pie fa-2x">
            <Link to="/">Charts</Link>
          </i>
        </li>
        <li>
          <i className="fas fa-cogs fa-2x">
            <Link to="/">Settings</Link>
          </i>
        </li>
        <li>
          <i className="fab fa-app-store fa-2x">
            <Link to="/">Applications</Link>
          </i>
        </li>
        <li>
          <i className="fas fa-chart-pie fa-2x">
            <Link to="/">Followers</Link>
          </i>
        </li>
        <li>
          <i className="fas fa-globe-africa fa-2x">
            <Link to="/">Subscribers</Link>
          </i>
        </li>
        <li>
          <i className="fas fa-newspaper fa-2x">
            <Link to="/">Articles</Link>
          </i>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
