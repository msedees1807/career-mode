import React from "react";
import "../App.css";
import { teams } from "../data/teams";

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridGap: "25px",
  justifyContent: "center"
};

const cardHead = {
  color: "#252525",
  fontSize: "16px"
};

const TeamItem = ({ teams }) => {
  return (
    <div className="TeamCard">
      <h4 style={cardHead}>{teams.name}</h4>
    </div>
  );
};

export default class teamsList extends React.Component {
  render() {
    return (
      <div>
        <h4>1. Select Bidding Team</h4>
        <div style={cardGrid}>
          {teams.map(data => (
            <TeamItem teams={data} />
          ))}
        </div>
      </div>
    );
  }
}
