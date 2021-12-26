import React from "react";
import styled from "@emotion/styled";
import { BREAKPOINTS } from "../theme";
import Email from "./macOS/email";
import TeamsList from "./clubs/teamslist";
import Negotiate from "./negotiate";
import Result from "./result";
import NewResult from "./newResult";
import {
  MdCancel,
  MdDoNotDisturbOn,
  MdArrowDropDownCircle,
  MdHelp,
  MdEmail,
} from "react-icons/md";

const Container = styled.div({
  gridTemplateColumns: "2fr 1fr 1fr",
  paddingLeft: "20px",
  paddingRight: "20px",
  margin: "0px auto",
  display: "flex",
  flexDirection: "column",
  [BREAKPOINTS.medium]: {
    display: "grid",
  },
});

export default class negotiationHub extends React.PureComponent {
  state = {
    userTeam: null,
    buyingTeam: { name: "" },
    roundsNEW: 0,
    results: [],
    resultMessage: null,
    showEmail: false,
    showResult: null,
    showPrestige: false,
    showTeamWarning: true,
    percentage: 0,
    test: true,
  };

  handleEmailOpenClose = () => {
    this.setState({ showEmail: !this.state.showEmail });
  };

  loadingBar = () => {
    setTimeout(() => {
      if (this.state.percentage !== 100) {
        this.setState({ percentage: 100 });
      }
    }, 10);
  };

  calculateResult = (rounds) => {
    let results = [];

    for (let i = 0; i < rounds; i++) {
      if (Math.floor(Math.random() * 2) === 0) {
        var result = "Keep Player";
      } else {
        result = "Sell Player";
      }
      results = results.concat(result);
      this.setState({
        showResult: true,
        results: results,
      });
    }
  };

  negotiateResult = () => {
    const { prestige } = this.state.buyingTeam;
    const negotiationRounds = prestige;

    // 1. check prestige
    // 2. based on prestige run this function x times
    // 3. added result to array

    this.setState({
      percentage: 0,
    });

    this.calculateResult(negotiationRounds);
    this.loadingBar();
  };

  selectBuyingTeam = (buyingTeam) => {
    this.setState({
      buyingTeam,
      results: [],
      roundsNEW: Math.floor((buyingTeam.prestige + buyingTeam.rating) / 2),
      showResult: null,
      showPrestige: true,
      showTeamWarning: false,
      percentage: 0,
    });
  };

  updateRounds = () => {
    console.log("Rounds - 1");
    this.setState({
      roundsNEW: this.roundsNEW - 1,
    });
  };

  clearMessages = () => {
    console.log("Clear rounds, therefore 0 messages");
    this.setState({
      roundsNEW: 0,
    });
  };

  render() {
    return (
      <div>
        <div className="header">
          <div style={{ flexGrow: 0.5, marginLeft: "20px" }}>
            <h5
              style={{
                fontSize: "1rem",
                padding: "0px",
                margin: "0px",
                float: "left",
                marginTop: "10px",
              }}
            >
              <MdCancel style={{ color: "#FF605C", marginRight: "5px" }} />
              <MdDoNotDisturbOn
                className="iconMinimise"
                onClick={this.props.minimiseHub}
                style={{ marginRight: "5px" }}
              />
              <MdArrowDropDownCircle style={{ color: "#00CA4E" }} />
            </h5>
          </div>
          <div style={{ flexGrow: 8, textAlign: "left" }}>
            <h5>NEGOTIATION HUB</h5>
          </div>
          <div style={{ flexGrow: 1 }}>
            <h5>
              <MdHelp />
            </h5>
          </div>
          <div style={{ flexGrow: 1 }}>
            <h5>
              <MdEmail className="icon" onClick={this.handleEmailOpenClose} />
            </h5>
          </div>
        </div>

        {this.state.showEmail && (
          <Email handleEmailOpenClose={this.handleEmailOpenClose} />
        )}

        <Container>
          <TeamsList
            selectBuyingTeam={this.selectBuyingTeam}
            buyingTeam={this.state.buyingTeam}
          />
          <Negotiate
            negotiateResult={this.negotiateResult}
            buyingTeam={this.state.buyingTeam}
            result={this.state.result}
            showPrestige={this.state.showPrestige}
          />
          <NewResult
            roundsNEW={this.state.roundsNEW}
            updateRounds={this.updateRounds}
            clearMessages={this.clearMessages}
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
