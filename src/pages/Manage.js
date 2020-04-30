import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
const Manage = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/people")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [data]);
  const style = {
    wrapper: {
      width: "100%",
      maxWidth: "940px",
      background: "white",
      height: "auto",
      padding: "0px 30px",
      borderRadius: "8px",
      margin: "20px",
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
      outline: "none",
      margin: "0px 10px 10px 40px",
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

  const handleActivate = (data) => {
    axios.post("http://localhost:5000/approval", {
      approval: "active",
      email: data,
    });
  };
  const handleDeactive = (data) => {
    axios.post("http://localhost:5000/approval", {
      approval: "deactive",
      email: data,
    });
  };
  return (
    <>
      {data &&
        data.map((data, index) => (
          <div style={style.wrapper}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                margin: "40px 0",
              }}
            >
              <div style={style.number}>{index + 1}</div>
              <div>{data.name}</div>
              <div>Status : {data.verif}</div>
              <div style={style.buttonContainer}>
                <div style={{ display: "flex" }}>
                  <button
                    style={style.button}
                    onClick={() => handleActivate(data.email)}
                  >
                    Activate
                  </button>
                  <button
                    style={style.button}
                    onClick={() => handleDeactive(data.email)}
                  >
                    Deactive
                  </button>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        ))}
    </>
  );
};
export default Manage;
