import React, { useState } from "react";
import axios from "axios";
import "../App.css";
const LongLat = () => {
  const [email, setEmail] = useState("");
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [role, setRole] = useState("");
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handleLongitute = e => {
    setLong(e.target.value);
  };
  const handleLatitute = e => {
    setLat(e.target.value);
  };
  const setLocal = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("role", role);
  };
  const deleteLocal = () => {
    localStorage.clear();
  };
  const logOut = () => {
    axios
      .post("http://localhost:5000/logout", {
        email: localStorage.getItem("email"),
        role: localStorage.getItem("role")
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  const handleRole = e => {
    setRole(e.target.value);
  };
  const submitLongLat = () => {
    console.log(email, long, lat);
    axios
      .post("http://localhost:5000/location", {
        email: localStorage.getItem("email"),
        role: localStorage.getItem("role"),
        long: long,
        lat: lat
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        Local Storage
        <input placeholder="email" onChange={e => handleEmail(e)} />
        <input placeholder="role" onChange={e => handleRole(e)} />
        <br></br>
        <div style={{ display: "flex" }}>
          <button onClick={setLocal}>set</button>
          <button onClick={deleteLocal}>clear</button>
          <button onClick={logOut}>Logout</button>
        </div>
        <br />
        Longitude latitute
        <br />
        <input placeholder="logitute" onChange={e => handleLongitute(e)} />
        <br />
        <input placeholder="latitute" onChange={e => handleLatitute(e)} />
        <br></br>
        <button onClick={submitLongLat}>Submit</button>
      </header>
    </div>
  );
};
export default LongLat;
