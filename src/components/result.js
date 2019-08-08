import React from "react";
import styled from "@emotion/styled";
import LoadingBar from "./loadingBar";

const ResultContainer = styled.div`
   {
    padding-right: 2%;
    padding-left: 2%;
  }
`;

const FinalResult = styled.div`
   {
    min-width: 120px;
    height: 75px;
    display: block;
  }
`;

export default class Negotiate extends React.PureComponent {
  render() {
    return (
      <ResultContainer>
        <p className="gridTitle">3. Result.</p>
        <LoadingBar
          percentage={this.props.percentage}
          loadingBar={this.props.loadingBar}
        />
        {this.props.showTeamWarning && (
          <p>Select a team to begin the negotiation.</p>
        )}
        <FinalResult>
          {this.props.showResult != null && (
            <p className="ResultText">
              {this.props.result ? "Sell Player" : "Keep Player"}
            </p>
          )}
        </FinalResult>

        {this.props.results !== [] && (
          <ul>
            {this.props.results.map(result => (
              <p className="ResultText">{result}</p>
            ))}
          </ul>
        )}
      </ResultContainer>
    );
  }
}
