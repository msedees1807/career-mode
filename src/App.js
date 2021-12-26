import React, { useState } from "react";
import "./App.css";
import MacBar from "./components/macOS/macBar";
import NegotiationHub from "./components/negotiationhub";
import MinimisedHub from "./components/macOS/minimisedHub";
import { Global, css } from "@emotion/core";
import { motion, AnimatePresence } from "framer-motion";
import NewHub from "./components/newHub";

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

export default function App() {
  const [hubMinimised, setHubMinimised] = useState(false);

  const minimiseHub = () => setHubMinimised(!hubMinimised);

  return (
    <>
      <GlobalStlyes />
      <div className="App">
        <MacBar />

        {!hubMinimised && (
          <motion.div drag dragElastic={0} dragMomentum={false} style={content}>
            {/* <NegotiationHub minimiseHub={minimiseHub} /> */}
            <NewHub />
          </motion.div>
        )}

        <AnimatePresence>
          {hubMinimised && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MinimisedHub minimiseHub={minimiseHub} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
