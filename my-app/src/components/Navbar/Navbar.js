import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";
import { Layout, Menu } from "antd";
import sachinLogo from "./sachin_logo.png";

const { Header } = Layout;

const Navbar = () => {
  let location = useLocation();
  console.log(location);
  return (
    <div className="navbar">
      <Header
        className="header"
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
      >
        <div style={{ width: "20%" }}>
          <NavLink to="/">
            <img src={sachinLogo} alt="logo" className="logo" />
          </NavLink>
        </div>
        <div style={{ width: "80%" }}>
          <Menu
            style={{
              justifyContent: "flex-end",
              width: "100%",
            }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[location.pathname]}
          >
            <Menu.Item key="/odi">
              <NavLink to="/odi">Odi</NavLink>
            </Menu.Item>
            <Menu.Item key="/batting">
              <NavLink to="/batting">Batting</NavLink>
            </Menu.Item>
            <Menu.Item key="/fielding">
              <NavLink to="/fielding">Fielding</NavLink>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
    </div>
  );
};

export default Navbar;
