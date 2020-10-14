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
    messages: []
  };

  componentWillReceiveProps(results) {
    console.log(results);
    for (let i = 0; i < results.length; i++) {
      setTimeout(() => {
        this.state.messages.push(<p key={i}>{results[i]}</p>);
      }, i * 2000);
    }
    console.log(this.state.messages);
  }

  // revealResults = results => {
  //   for (let i = 0; i < results.length; i++) {
  //     setTimeout(() => {
  //       this.state.messages.push(<p key={i}>{results[i]}</p>);
  //     }, i * 2000);
  //   }
  // };

  render() {
    return (
      <ResultContainer>
        <p className="gridTitle">3. Result.</p>
        <LoadingBar
          percentage={this.props.percentage}
          loadingBar={this.props.loadingBar}
        />
        {/* {this.props.results !== [] && (
          <ul>
            {this.props.results.sort().map(result => (
              <p className="ResultText">{result}</p>
            ))}
          </ul>
        )} */}
        {/* {this.revealResults(this.props.results.sort())} */}

        {this.state.message &&
          this.state.messages
            .sort()
            .map(message => <p className="ResultText">{message}</p>)}
      </ResultContainer>
    );
  }
}
