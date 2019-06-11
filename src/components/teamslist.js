import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import "../App.css";
import { teams } from "../data/teams";
import { COLOURS } from "../theme";

const cardGrid = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center"
};

const TeamItemContainer = styled.button`
  box-shadow: 15px 15px 15px 5px #80808014;
  border-radius: 8px;
  background-color: ${({ selected }) => (selected ? COLOURS.green : "white")};
  color: #252525;
  font-size: 15px;
  transition: transform 0.2s;
  width: 125px;
  height: 50px;
  margin: 8px;
  &:hover {
    background-color: #bfffbe;
    transform: scale(1.05);
  }
`;

const TeamItem = ({ team, selectBuyingTeam, selected }) => {
  return (
    <TeamItemContainer
      selected={selected}
      onClick={() => selectBuyingTeam(team)}
    >
      {team.name}
    </TeamItemContainer>
  );
};

export default class teamsList extends React.PureComponent {
  render() {
    const { buyingTeam } = this.props;

    return (
      <div
        css={css`
          padding: 8px;
        `}
      >
        <h4>1. Select Bidding Team</h4>
        <div style={cardGrid}>
          {teams.map((data, index) => (
            <TeamItem
              team={data}
              selectBuyingTeam={this.props.selectBuyingTeam}
              selected={buyingTeam.name === data.name}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}
