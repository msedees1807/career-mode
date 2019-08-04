import React from "react";
import "./App.css";
import NegotiationHub from "./components/negotiationhub";
import { Global, css } from "@emotion/core";

const content = {
  width: "90%",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  borderRadius: "8px",
  paddingBottom: "5%"
};

const GlobalStlyes = () => (
  <Global
    styles={css`
      button,
      p,
      body,
      div,
      html {
        font-family: "Oswald", "sans-serif";
      }
    `}
  />
);

function App() {
  return (
    <>
      <GlobalStlyes />
      <div className="App">
        <div>Nav</div>
        <h3>Career Mode Money Ball</h3>
        <div style={content}>
          <NegotiationHub />
        </div>
      </div>
    </>
  );
}

export default App;
