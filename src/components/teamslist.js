import React from "react";
import "../App.css";
import { teams } from "../data/teams";

const cardGrid = {
  display: "flex",
  flexWrap: "wrap",
  gridTemplateColumns: "2fr 1fr 1.5fr",
  gridGap: "25px",
  justifyContent: "center"
};

const cardHead = {
  color: "#252525",
  fontSize: "16px",
  display: "unset"
};

const TeamItem = ({ team, selectBuyingTeam }) => {
  return (
    <div className="TeamCard" onClick={() => selectBuyingTeam(team)}>
      <h4 style={cardHead}>{team.name}</h4>
    </div>
  );
};

export default class teamsList extends React.PureComponent {
  render() {
    return (
      <div>
        <h3>1. Select Bidding Team</h3>
        <div style={cardGrid}>
          {teams.map((data, index) => (
            <TeamItem
              team={data}
              selectBuyingTeam={this.props.selectBuyingTeam}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}
