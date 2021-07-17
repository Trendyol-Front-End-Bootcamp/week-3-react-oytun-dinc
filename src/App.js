import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterCard";
import Footer from "./components/Footer";
import NoResult from "./pages/NoResult";

const BASE_API_URL = "https://rickandmortyapi.com/api/character";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home baseApiUrl={BASE_API_URL} />
        </Route>
        <Route path="/character/:id">
          <CharacterDetail baseApiUrl={BASE_API_URL} />
        </Route>
        <Route path="/404">
          <NoResult/>
        </Route>
        <Redirect from="*" to="/404"/>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;