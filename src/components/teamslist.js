import React from "react";

import { teams } from "../data/teams";

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridGap: "25px",
  justifyContent: "center"
};

const teamCard = {
  boxShadow: "15px 15px 15px 5px #80808014",
  borderRadius: "8px",
  backgroundColor: "white"
};

const cardHead = {
  color: "#252525",
  fontSize: "16px"
};

const TeamItem = ({ teams }) => {
  return (
    <div style={teamCard}>
      <h4 style={cardHead}>{teams.name}</h4>
    </div>
  );
};

export default class teamsList extends React.Component {
  render() {
    return (
      <div>
        <h4>Select Bidding Team</h4>
        <div style={cardGrid}>
          {teams.map(data => (
            <TeamItem teams={data} />
          ))}
        </div>
      </div>
    );
  }
}
