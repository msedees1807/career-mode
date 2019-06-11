import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
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
    background-color: #bfffbe;
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
        <h4 className="gridTitle">2. Begin Negotiations</h4>
        <NegotiateButton
          className="NegotiateButton"
          onClick={() => {
            this.props.negotiateResult();
          }}
        >
          NEGOTIATE
        </NegotiateButton>
        {this.props.showTier && (
          <p>{this.props.buyingTeam.name} have placed a bid.</p>
        )}
        {this.props.showTier && <h5>Tier: {this.props.buyingTeam.tier}</h5>}
      </div>
    );
  }
}
