import React from "react";
import styled from "@emotion/styled";

const BasicText = styled.p`
   {
    text-align: left;
    font-size: 0.7em;
    padding-left: 30px;
    padding-right: 30px;
    background: #ffffffad;
    color: #34343c;
    padding: 20px;
    border-radius: 8px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export default class Email extends React.PureComponent {
  render() {
    return (
      <BasicText>
        <i
          class="far fa-envelope"
          style={{
            fontSize: "2rem",
            paddingRight: "10px"
          }}
        />
        <i
          class="fas fa-window-close"
          style={{
            fontSize: "2rem",
            float: "right"
          }}
          onClick={this.props.handleEmailOpenClose}
        />
        <b>Dear Mr. Manager,</b>
        <br />
        <br />
        As a small club, larger teams will often look to our players when they
        become successful. If you receive a bid from one of the following teams,
        you must use the hub to determine whether the bid is successful. We will
        allow a<b> maximum of 5 players to leave, per season,</b> as a result of
        these negotiations. We will not stand in the way of our players' dream
        club.
        <br />
        <br />
        It is our goal to build a sustainable club by capping our spending on
        players to <b>£30m</b> per purchase and <b>£50,000</b> per week on
        salaries for each player.
        <br />
        <br />
        As a result of our financial situation, we currently cannot rely on our
        youth system, therefore all signings must be made from other clubs.
        <br />
        <br />
        In Summary:
        <br />
        - We must sell up to 5 key players per season.
        <br />
        - Transfers (Fee + player sign on bonus) are capped at £30m and salaries
        at £50,000 per week.
        <br />
        - No Youth Academy Prospects.
        <br />
        - No Free Pre Contract Signings or free agents.
        <br />
        <br />
        <b>The Board.</b>
      </BasicText>
    );
  }
}
