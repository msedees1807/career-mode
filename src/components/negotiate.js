import React from "react";
import "../App.css";

export default class Negotiate extends React.PureComponent {
  render() {
    return (
      <div>
        <h3 className="gridTitle">2. Begin Negotiations</h3>
        <button
          className="NegotiateButton"
          onClick={() => {
            this.props.negotiateResult();
          }}
        >
          <h4 className="NegotiateButtonText">BEGIN</h4>
        </button>
        <h4>{this.props.buyingTeam.name}</h4>
        {this.props.showTier && <h4>Tier: {this.props.buyingTeam.tier}</h4>}
      </div>
    );
  }
}
