import React from "react";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";
import { BREAKPOINTS } from "../theme";
import Email from "./email";
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

// THIS DOESNT WORK DUE TO THE BREAKPOINT
// const Container = styled.div`
//    {
//     grid-template-columns: 2fr 1fr 1fr;
//     padding-left: 20px;
//     padding-right: 20px;
//     margin: 0px auto;
//     display: flex;
//     flex-direction: column;
//     [breakpoints.medium]: {
//       display: grid;
//     }
//   }
// `;

export default class negotiationHub extends React.PureComponent {
  state = {
    userTeam: null,
    buyingTeam: { name: "" },
    results: [],
    resultMessage: null,
    showEmail: true,
    showResult: null,
    showTier: false,
    showTeamWarning: true,
    percentage: 0
  };

  loadingBar = () => {
    // console.log("LOADING BAR CALLEDS", this.state);
    setTimeout(() => {
      if (this.state.percentage !== 100) {
        this.setState({ percentage: 100 });
      }
    }, 10);
  };

  calculateResult = () => {
    setTimeout(() => {
      this.setState({
        result: Math.floor(Math.random() * 2) === 0,
        showResult: true,
        results: this.state.results.concat(this.state.result)
      });
    }, 3500);
  };

  negotiateResult = () => {
    const { tier } = this.state.buyingTeam;

    const negotiationRounds = 5 - tier;

    // 1. check tier
    // 2. based on tier run this function x times
    // 3. added result to array

    this.setState({
      percentage: 0
    });

    this.calculateResult();
    this.loadingBar();

    for (let i = 0; i < negotiationRounds; i++) {
      switch (this.state.result) {
        default:
          break;
        case true:
          this.setState({
            result: "Keep Player"
          });
          console.log("Keep");
          break;
        case false:
          this.setState({
            result: "Sell Player"
          });
          console.log("sell");
          break;

        // setTimeout(() => {
        // this.setState({
        // result: Math.floor(Math.random() * 2) === 0,
        //   showResult: true,
        //   results: this.state.results.concat(this.state.result)
        // });
        // }, 3500);

        // this.setState({
        //   results: this.state.results.concat([this.state.result])
        // });
      }
    }
  };

  selectBuyingTeam = buyingTeam => {
    this.setState({
      buyingTeam,
      results: [],
      showResult: null,
      showTier: true,
      showTeamWarning: false,
      percentage: 0
    });
  };

  render() {
    // console.log("Negotiation Hub State: (Render Method called) ", this.state);
    return (
      <div>
        <h4
          style={{
            display: "inline"
          }}
        >
          NEGOTIATION HUB
        </h4>
        <i
          class="far fa-envelope nav-email"
          style={{
            fontSize: "1.7rem",
            padding: "24px",
            float: "left",
            display: "initial"
          }}
          onClick={() => this.setState({ showEmail: true })}
        />
        {this.state.showEmail ? <Email /> : ""}
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
            results={this.state.results}
            percentage={this.state.percentage}
            loadingBar={this.loadingBar}
            showTeamWarning={this.state.showTeamWarning}
            showResult={this.state.showResult}
          />
        </Container>
      </div>
    );
  }
}
