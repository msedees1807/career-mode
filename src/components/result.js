import React from "react";
import styled from "@emotion/styled";
import LoadingBar from "./loadingBar";

const ResultContainer = styled.div`
   {
    padding-right: 2%;
    padding-left: 2%;
  }
`;

export default class Negotiate extends React.PureComponent {
  state = {
    messages: [],
  };

  componentWillReceiveProps(results) {
    for (let i = 0; i < results.results.length; i++) {
      this.state.messages.push(results.results[i]);
    }
  }

  render() {
    return (
      <ResultContainer>
        <p className="gridTitle">3. Result.</p>
        <LoadingBar
          percentage={this.props.percentage}
          loadingBar={this.props.loadingBar}
        />
      </ResultContainer>
    );
  }
}
