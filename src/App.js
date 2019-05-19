import React from "react";
import "./App.css";
import Negotiate from "./components/negotiate";
import Result from "./components/result";
import TeamsList from "./components/teamslist";

const content = {
  width: "90%",
  backgroundColor: "#0000009c",
  borderRadius: "8px",
  paddingBottom: "5%"
};
const appGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridGap: "30px"
};

function App() {
  return (
    <div className="App">
      <h3>Career Mode Money Ball</h3>
      <div style={content}>
        <h2>The Negotiation</h2>
        <div style={appGrid}>
          <TeamsList />
          <Negotiate />
          <Result />
        </div>
      </div>
    </div>
  );
}

export default App;
