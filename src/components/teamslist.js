import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import "../App.css";
import ClubBadge from "./clubBadge";
import { teams } from "../data/teams";
import { COLOURS } from "../theme";

const CardGrid = styled.div`
   {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const TeamItemContainer = styled.button`
  box-shadow: 15px 15px 15px 5px #80808014;
  border-radius: 8px;
  background-color: ${({ selected }) =>
    selected ? COLOURS.green : "#ffffff52"};
  color: ${({ selected }) => (selected ? "black" : "#ffffff")};
  font-size: 15px;
  transition: transform 0.2s;
  width: 125px;
  height: 100%;
  margin: 8px;
  &:hover {
    background-color: #4865f39e;
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
      <ClubBadge colors={team.colors}/>
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
        <p>1. Select bidding team.</p>
        <CardGrid>
          {teams.map((team, index) => (
            <TeamItem
              team={team}
              selectBuyingTeam={this.props.selectBuyingTeam}
              selected={buyingTeam.name === team.name}
              key={index}
            />
          ))}
        </CardGrid>
      </div>
    );
  }
}
