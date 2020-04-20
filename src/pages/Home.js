import React, { useState, useEffect } from "react";
import Verification from "./Verification";
import axios from "axios";
const Home = () => {
  const style = {
    button: {
      width: "100px",
      border: "none",
      borderRadius: "8px",
      height: "30px",
      fontSize: "14px",
      margin: "25px",
      background: "#5406FF",
      color: "white",
      cursor: "pointer",
    },
    buttonMenu: {
      width: "150px",
      border: "none",
      borderRadius: "8px",
      height: "30px",
      fontSize: "14px",
      margin: "25px",
      background: "white",
      color: "black",
      cursor: "pointer",
    },
    navbar: {
      display: "flex",
      borderBottom: "1px solid black",
      width: "100%",
      justifyContent: "space-between",
      background: "white",
    },
  };
  return (
    <div
      style={{
        background: "#5406FF",
        height: "100vh",
      }}
    >
      <div style={style.navbar}>
        <p style={{ fontSize: "24px", marginLeft: "15px" }}>
          TravelApp Management
        </p>
        <div style={{ display: "flex" }}>
          <p style={{ alignItems: "center", display: "flex" }}>Hi, Admin</p>
          <button style={style.button}>Logout</button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <button style={style.buttonMenu}>Verification Partner</button>
          <button style={style.buttonMenu}>Manage Partner</button>
        </div>
        <Verification />
      </div>
    </div>
  );
};
export default Home;
