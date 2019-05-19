import React from "react";
import "../App.css";

export default class Negotiate extends React.Component {
  state = {
    result: null
  };

  render() {
    return (
      <div>
        <h3>2. Begin Negotiations</h3>
        <button
          className="NegotiateButton"
          onClick={() => {
            negotiateResult();
          }}
        >
          <h4>BEGIN</h4>
        </button>
      </div>
    );
  }
}
