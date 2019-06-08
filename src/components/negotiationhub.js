import React from "react";
import Negotiate from "./negotiate";
import Result from "./result";
import TeamsList from "./teamslist";
import { teams } from "../data/teams";

const negGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  paddingLeft: "20px",
  paddingRight: "20px",
  margin: "0px auto"
};

const negGridItem = {
  display: "flex",
  alignItems: "flex-end"
};

export default class negotiationHub extends React.PureComponent {
  state = {
    userTeam: null,
    buyingTeam: { name: "" },
    result: null,
    resultMessage: null,
    showTier: false,
    showTeamWarning: true,
    percentage: 0
  };

  negotiateResult = () => {
    const { name, tier } = this.state.buyingTeam;
    const { percentage } = this.state;

    const object = {
      name,
      tier
    };
    this.setState({ result: null, percentage: 0 });
    this.loadingBar();
    setTimeout(() => {
      console.log("Setting result", percentage);
      this.setState({
        result: Math.floor(Math.random() * 2) === 0
      });
    }, 3500);
  };

  selectBuyingTeam = buyingTeam => {
    this.setState({
      buyingTeam,
      result: null,
      showTier: true,
      showTeamWarning: false
    });
  };

  loadingBar = () => {
    console.log("CLICKEd", this);
    if (this.state.percentage !== 100) {
      return this.setState({ percentage: 100 });
    }
  };

  render() {
    console.log("Negotiation Hub State: (Render Method called) ", this.state);
    return (
      <div>
        <h2>The Negotiation</h2>
        <p className="introText">
          As a small club, larger teams will often look to your players when
          they become successful. If you receive a bid from one of the following
          teams, you must use the hub to determine whether the bid is
          successful.
        </p>
        <div style={negGrid}>
          <TeamsList
            selectBuyingTeam={this.selectBuyingTeam}
            style={negGridItem}
          />
          <Negotiate
            style={negGridItem}
            negotiateResult={this.negotiateResult}
            buyingTeam={this.state.buyingTeam}
            result={this.state.result}
            showTier={this.state.showTier}
          />
          <Result
            result={this.state.result}
            style={negGridItem}
            percentage={this.state.percentage}
            loadingBar={this.loadingBar}
            showTeamWarning={this.state.showTeamWarning}
          />
        </div>
      </div>
    );
  }
}
