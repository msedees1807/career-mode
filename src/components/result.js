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
        <h4 className="gridTitle">3. Result</h4>
        {this.props.showTeamWarning && (
          <p>Select a team to begin the negotiation.</p>
        )}
        <div style={resultContainer}>
          {this.props.result != null && (
            <h3 className="ResultText">
              {this.props.result ? "Sell Player" : "Keep Player"}
            </h3>
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
