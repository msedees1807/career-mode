import React from "react";
import "./App.css";
import MacBar from "./components/macBar"
import NegotiationHub from "./components/negotiationhub";
import MinimisedHub from "./components/minimisedHub";
import { Global, css } from "@emotion/core";

const content = {
  width: "90%",
  backgroundColor: "rgba(1, 1, 2, 0.72)",
  borderRadius: "8px",
  paddingBottom: "5%",
  marginTop: "70px"
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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hubMinimised: false
    };
  }

  minimiseHub = () => {
    this.setState({
      hubMinimised: !this.state.hubMinimised
    });
    console.log(this.state.hubMinimised);
  };

  render() {
    return (
      <>
        <GlobalStlyes />
        <div className="App">
          <MacBar/>
          {!this.state.hubMinimised && (
            <div style={content}>
              <NegotiationHub minimiseHub={this.minimiseHub} />
            </div>
          )}
          {this.state.hubMinimised && (
            <MinimisedHub minimiseHub={this.minimiseHub} />
          )}
        </div>
      </>
    );
  }
}
