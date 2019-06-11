import React from "react";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";

import { BREAKPOINTS } from "../theme";
import Negotiate from "./negotiate";
import Result from "./result";
import TeamsList from "./teamslist";
import { teams } from "../data/teams";

const Container = styled.div({
  gridTemplateColumns: "2fr 1fr 1fr",
  paddingLeft: "20px",
  paddingRight: "20px",
  margin: "0px auto",
  display: "flex",
  flexDirection: "column",
  [BREAKPOINTS.medium]: {
    display: "grid"
  }
});

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
    const { tier } = this.state.buyingTeam;
    const { percentage } = this.state;

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
    console.log("CLICKED", this);
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
        <Container>
          <TeamsList
            selectBuyingTeam={this.selectBuyingTeam}
            buyingTeam={this.state.buyingTeam}
          />
          <Negotiate
            negotiateResult={this.negotiateResult}
            buyingTeam={this.state.buyingTeam}
            result={this.state.result}
            showTier={this.state.showTier}
          />
          <Result
            result={this.state.result}
            percentage={this.state.percentage}
            loadingBar={this.loadingBar}
            showTeamWarning={this.state.showTeamWarning}
          />
        </Container>
      </div>
    );
  }
}
