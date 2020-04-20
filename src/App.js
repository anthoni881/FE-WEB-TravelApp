import React, { useState } from "react";
import "./App.css";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister";
import LongLat from "./pages/LongLat";
import LoginAdmin from "./pages/LoginAdmin";
import Home from "./pages/Home";
const App = () => {
  const [local, setLocal] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path={"/"} component={LoginRegister}>
          <LoginRegister />
        </Route>
        <Route path={"/longlat"} component={LongLat}>
          <LongLat />
        </Route>
        <Route path={"/login"} component={LoginAdmin}>
          <LoginAdmin setLocal={setLocal} />
        </Route>
        {local || localStorage.getItem("token") ? (
          <Route path={"/home"} component={Home}>
            <Home />
          </Route>
        ) : (
          <Redirect to="/login" />
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
