import React, { useState } from "react";
import axios from "axios";
import "../App.css";
const Verification = () => {
  const style = {
    wrapper: {
      width: "100%",
      maxWidth: "940px",
      background: "white",
      height: "auto",
      padding: "0px 30px",
      borderRadius: "8px",
    },
    button: {
      width: "100px",
      border: "none",
      borderRadius: "8px",
      height: "30px",
      fontSize: "14px",
      background: "#5406FF",
      color: "white",
      cursor: "pointer",
    },
    number: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRight: "1px solid black",
      width: "100px",
      height: "30px",
    },
    buttonContainer: {
      borderLeft: "1px solid black",
      width: "150px",
      height: "30px",
    },
  };
  return (
    <div style={style.wrapper}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "40px 0",
        }}
      >
        <div style={style.number}>1</div>
        <div>Supriyono</div>
        <div style={style.buttonContainer}>
          <button style={style.button}>Detail</button>
        </div>
      </div>
    </div>
  );
};
export default Verification;
