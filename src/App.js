import React from "react";
import "./App.css";
import NegotiationHub from "./components/negotiationhub";

const content = {
  width: "90%",
  backgroundColor: "#0000009c",
  borderRadius: "8px",
  paddingBottom: "5%"
};

function App() {
  return (
    <div className="App">
      <h3>Career Mode Money Ball</h3>
      <div style={content}>
        <NegotiationHub />
      </div>
    </div>
  );
}

export default App;
