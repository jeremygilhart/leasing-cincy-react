import logo from './logo.svg';
import './App.css';
import Home from "./pages"
import PropertyList from "./pages/propertylist";
import Property from "./pages/property"
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


function Titlebar() {
  return (
    <div className="Titlebar-grandparent-div">
      <div className="Titlebar-parent-div">
        <div className="Titlebar-child-div">
          <a href = "./"><h3 className="Titlebar-logo">LeasingCincy</h3></a>
          <a href = "./property-list" className="menu-item"><h3>Properties</h3></a>
          <a href = "./" className="menu-item"><h3>Main</h3></a>
        </div>
      </div>
    </div>
    );
}

function App() {
  return (
    <div className="App">
      <Titlebar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/property-list" element={<PropertyList />} />
          <Route exact path="/property" element={<Property />} />
        </Routes>
      </Router>
    </div>
  );
}




export default App;

