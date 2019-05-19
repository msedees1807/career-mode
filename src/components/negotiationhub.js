import React from "react";
import Negotiate from "./negotiate";
import Result from "./result";
import TeamsList from "./teamslist";

const negGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridGap: "30px",
  padding: "20px"
};

export default class negotiationHub extends React.Component {
  state = {
    userTeam: null,
    buyingTeam: null,
    result: null
  };

  negotiateResult() {
    this.setState({
      result: Math.floor(Math.random() * 2) === 0
    });
  }

  render() {
    return (
      <div>
        <h2>The Negotiation</h2>
        <div style={negGrid}>
          <TeamsList />
          <Negotiate negotiateResult={this.negotiateResult} />
          <Result result={this.result} />
        </div>
      </div>
    );
  }
}
