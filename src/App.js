import React from "react";
import "./App.css";
import NegotiationHub from "./components/negotiationhub";
import { Global, css } from "@emotion/core";

const content = {
  width: "90%",
  backgroundColor: "rgba(1, 1, 2, 0.72)",
  borderRadius: "8px",
  paddingBottom: "5%",
  marginTop: "10%"
};

const nav = {
  backgroundColor: "rgba(205, 209, 224, 0.92)",
  color: "black",
  padding: "2%",
  position: "fixed",
  width: "100%",
  top: "0"
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
      <div style={nav}>CAREER MODE - MONEY BALL</div>
      <div className="App">
        <div style={content}>
          <NegotiationHub />
        </div>
      </div>
    </>
  );
}

export default App;
