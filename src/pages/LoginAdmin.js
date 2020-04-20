import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
const LoginAdmin = ({ setLocal }) => {
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleUname = (e) => {
    setUname(e.target.value);
  };
  const handlePassword = (e) => {
    setPwd(e.target.value);
  };
  const Login = () => {
    if (uname !== "" || pwd !== "") {
      axios
        .post("http://localhost:5000/loginuser", {
          email: uname,
          password: pwd,
          role: "admin",
        })
        .then(function (response) {
          console.log(response);
          setRedirect(true);
          setLocal(true);
          localStorage.setItem(
            "token",
            JSON.stringify(response.data.token.iat)
          );
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("ada yg salah");
    }
  };
  const style = {
    input: {
      width: "200px",
      height: "26px",
      margin: "10px",
    },
    button: {
      width: "100px",
      border: "none",
      borderRadius: "8px",
      height: "30px",
      fontSize: "14px",
      margin: "25px",
      background: "#5406FF",
      color: "white",
    },
    wrapper: {
      minHeight: "100vh",
      background: " #5406FF",
      justifyContent: "center",
      display: "flex",
    },
    div: {
      display: "flex",
      alignSelf: "center",
      justifyContent: "center",
      height: "360px",
      width: "100%",
      maxWidth: "460px",
      background: "#748AF5",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px",
    },
  };
  return (
    <div style={style.wrapper}>
      {redirect ? (
        <Redirect to="/home" />
      ) : (
        <div style={style.div}>
          <p style={{ fontSize: "26px" }}>TravelApp Management</p>
          <span style={{ fontSize: "21px" }}>Login</span>
          <input
            style={style.input}
            type="text"
            placeholder="User Name"
            onChange={(e) => handleUname(e)}
          />
          <input
            style={style.input}
            type="password"
            placeholder="Password"
            onChange={(e) => handlePassword(e)}
          />
          <button style={style.button} onClick={Login}>
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};
export default LoginAdmin;
