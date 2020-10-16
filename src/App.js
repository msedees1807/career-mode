import React from "react";
import "./App.css";
import MacBar from "./components/macBar";
import NegotiationHub from "./components/negotiationhub";
import MinimisedHub from "./components/minimisedHub";
import { Global, css } from "@emotion/core";
import { motion, AnimatePresence } from "framer-motion";

const content = {
  width: "90%",
  maxWidth: "1400px",
  backgroundColor: "rgba(1, 1, 2, 0.72)",
  borderRadius: "8px",
  paddingBottom: "5%",
  marginTop: "70px",
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
      hubMinimised: false,
    };
  }

  minimiseHub = () => {
    this.setState({
      hubMinimised: !this.state.hubMinimised,
    });
  };

  render() {
    return (
      <>
        <GlobalStlyes />
        <div className="App">
          <MacBar />
          {!this.state.hubMinimised && (
            <motion.div
              drag
              dragElastic={0}
              dragMomentum={false}
              style={content}
            >
              <NegotiationHub minimiseHub={this.minimiseHub} />
            </motion.div>
          )}
          <AnimatePresence>
            {this.state.hubMinimised && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MinimisedHub minimiseHub={this.minimiseHub} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </>
    );
  }
}
