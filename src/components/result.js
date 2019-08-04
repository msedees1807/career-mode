import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import LoadingBarJames from "./loadingBarJames";
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
        <h4 className="gridTitle">3. Result</h4>
        <LoadingBar
          percentage={this.props.percentage}
          loadingBar={this.props.loadingBar}
        />
        {this.props.showTeamWarning && (
          <p>Select a team to begin the negotiation.</p>
        )}
        <FinalResult>
          {this.props.showResult != null && (
            <h3 className="ResultText">
              {this.props.result ? "Sell Player" : "Keep Player"}
            </h3>
          )}
        </FinalResult>

        {this.props.results !== [] && (
          <ul css={css``}>
            {this.props.results.map((result, i) => (
              <h3 className="ResultText">{result}</h3>
            ))}
          </ul>
        )}
      </ResultContainer>
    );
  }
}
