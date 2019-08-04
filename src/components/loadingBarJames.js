import React from "react";
import styled from "@emotion/styled";
import { COLOURS } from "../theme";
import "../App.css";

const LoadingBarContainer = styled.div`
  position: absolute;
  height: 30px;
  z-index: 2;
  width: 100%;
  border: 5px solid rgb(105, 105, 105);
  border-radius: 25px;
`;

const LoadingBarFiller = styled.div`
  background: ${COLOURS.green};
  position: absolute;
  z-index: 1;
  top: 5px;
  left: 5px;
  height: 100%;
  border-radius: 25px;
  width: ${props => props.percentage}%;
  transition: ${props => props.percentage === 100 && "width 3s ease-in"};
`;

export default class LoadingBar extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingRight: "5px",
          height: "35px",
          background: "lightgray",
          borderRadius: "25px"
        }}
      >
        <LoadingBarContainer />
        <LoadingBarFiller percentage={this.props.percentage} />
      </div>
    );
  }
}
