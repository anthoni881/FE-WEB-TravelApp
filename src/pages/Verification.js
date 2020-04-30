import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
const Verification = () => {
  const [data, setData] = useState("");
  const [isOpen, setIsOpen] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/verification")
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
    buttonApprove: {
      width: "100px",
      border: "none",
      borderRadius: "8px",
      height: "30px",
      fontSize: "14px",
      background: "#5406FF",
      color: "white",
      cursor: "pointer",
      margin: "30px 10px 10px 10px",
      outline: "none",
    },
  };
  const handleDetail = (data) => {
    if (isOpen !== data.name) {
      setIsOpen(data.name);
      setEmail(data.email);
    } else setIsOpen("");
  };
  const handleApprove = () => {
    axios
      .post("http://localhost:5000/approval", {
        approval: "active",
        email: email,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log({ error: error.response });
      });
  };
  const handleRefuse = () => {
    axios
      .post("http://localhost:5000/approval", {
        approval: "refuse",
        email: email,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log({ error: error.response });
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
              <div style={style.buttonContainer}>
                <button style={style.button} onClick={() => handleDetail(data)}>
                  Detail
                </button>
              </div>
            </div>
            <div
              style={
                data.name !== isOpen
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <img
                  style={{ maxWidth: "150px" }}
                  src={`http://localhost:5000/${data.img}`}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{ margin: "5px" }}>Email: {data.email}</div>
                  <div style={{ margin: "5px" }}>
                    No.Hp/Telepon: {data.phone_number}
                  </div>
                </div>
              </div>
              <button style={style.buttonApprove} onClick={handleApprove}>
                Approve
              </button>
              <button style={style.buttonApprove} onClick={handleRefuse}>
                Refuse
              </button>
            </div>
          </div>
        ))}
    </>
  );
};
export default Verification;
