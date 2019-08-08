import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import "../App.css";
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
  height: 50px;
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
          {teams.map((data, index) => (
            <TeamItem
              team={data}
              selectBuyingTeam={this.props.selectBuyingTeam}
              selected={buyingTeam.name === data.name}
              key={index}
            />
          ))}
        </CardGrid>
      </div>
    );
  }
}
