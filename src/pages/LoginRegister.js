import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const LoginRegister = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const [role, setRole] = useState("");
  const [file, setFile] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRole = (e) => {
    setRole(e.target.value);
  };
  const handleUname = (e) => {
    setUname(e.target.value);
  };
  const handlePwd = (e) => {
    setPwd(e.target.value);
  };
  const handleImg = (e) => {
    setFile(e.target.files[0]);
  };
  const onSubmit = () => {
    if (name !== "" || password !== "") {
      const data = new FormData();
      data.append("email", name);
      data.append("password", password);
      data.append("role", role);
      data.append("img", file);
      axios
        .post("http://localhost:5000/signupuser", data)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("ada yg salah");
    }
  };
  const Login = () => {
    if (uname !== "" || pwd !== "") {
      axios
        .post("http://localhost:5000/loginuser", {
          email: uname,
          password: pwd,
          role: role,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log({ error: error.response });
        });
    } else {
      console.log("ada yg salah");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        Insert
        <input placeholder="email" onChange={(e) => handleName(e)} />
        <br />
        <input placeholder="password" onChange={(e) => handlePassword(e)} />
        <br />
        <input placeholder="role" onChange={(e) => handleRole(e)} />
        <br />
        <input type="file" onChange={(e) => handleImg(e)}></input>
        <br />
        <button onClick={onSubmit}>Submit</button>
        <br />
        Login
        <input placeholder="user name" onChange={(e) => handleUname(e)} />
        <br />
        <input placeholder="password" onChange={(e) => handlePwd(e)} />
        <br></br>
        <input placeholder="role" onChange={(e) => handleRole(e)} />
        <button onClick={Login}>Submit</button>
        <br />
      </header>
    </div>
  );
};

export default LoginRegister;
