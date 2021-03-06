import React from "react";
import styled from "@emotion/styled";
import { COLOURS } from "../theme";
import "../App.css";

const LoadingBarContainer = styled.div`
  position: relative;
  height: 20px;
  background: #d3d3d347;
  border-radius: 25px;
`;

const LoadingBarFiller = styled.div`
  background: ${COLOURS.green};
  height: 100%;
  border-radius: 25px;
  width: ${props => props.percentage}%;
  transition: ${props => props.percentage === 100 && "width 3s ease-in"};
`;

export default class LoadingBar extends React.PureComponent {
  render() {
    return (
      <LoadingBarContainer>
        <LoadingBarFiller percentage={this.props.percentage} />
      </LoadingBarContainer>
    );
  }
}
