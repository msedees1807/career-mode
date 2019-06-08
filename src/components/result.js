import React from "react";
import LoadingBar from "./loadingBar";
import LoadingBarNew from "./newLoadingBar";

const resultContainer = {
  minWidth: "120px",
  height: "75px",
  display: "block"
};

export default class Negotiate extends React.PureComponent {
  render() {
    return (
      <div className="ResultContainer">
        <h3 className="gridTitle">3. Result</h3>
        {this.props.showTeamWarning && (
          <h4>Select a team to begin the negotiation.</h4>
        )}
        <div style={resultContainer}>
          {this.props.result != null && (
            <h2 className="ResultText">
              {this.props.result ? "Sell Player" : "Keep Player"}
            </h2>
          )}
        </div>
        <LoadingBarNew
          percentage={this.props.percentage}
          loadingBar={this.props.loadingBar}
        />
      </div>
    );
  }
}
