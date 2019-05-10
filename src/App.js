import React from "react";
import ListItem from "./components/ListItem";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ul>
        <ListItem abc={123} def="hello"/>
      </ul>
    </div>
  );
}

export default App;
