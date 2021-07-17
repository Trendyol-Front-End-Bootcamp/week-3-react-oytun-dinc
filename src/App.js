import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterCard";
import Footer from "./components/Footer";

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
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;