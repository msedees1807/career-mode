import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Prestige from "./prestige";
import Stars from "./stars";
import "../App.css";

const NegotiateButton = styled.button`
  box-shadow: 15px 15px 15px 5px #80808014;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  transition: transform 0.4s;
  margin: auto;
  width: 125px;
  height: 50px;
  font-family: "Oswald", sans-serif;
  font-size: 18px;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1.05);
  }
`;

export default class Negotiate extends React.PureComponent {
  render() {
    return (
      <div
        css={css`
          padding: 8px;
        `}
      >
        <p className="gridTitle">2. Begin negotiations.</p>
        <NegotiateButton
          disabled={this.props.buyingTeam.name === ""}
          className="NegotiateButton"
          onClick={() => {this.props.negotiateResult();}}
        >
          NEGOTIATE
        </NegotiateButton>
        {this.props.showPrestige && (
          <p>{this.props.buyingTeam.name} have placed a bid.</p>
        )}
        <Prestige prestige={this.props.buyingTeam.prestige}/>
        {this.props.showPrestige && <Stars stars={this.props.buyingTeam.rating} />}
      </div>
    );
  }
}
