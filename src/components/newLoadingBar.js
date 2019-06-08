import React from "react";
import "../App.css";

const LoadingBarContainer = props => {
  return (
    <div className="loadingBarContainer">
      <LoadingBarFiller percentage={props.percentage} />
    </div>
  );
};

const LoadingBarFiller = props => {
  return (
    <div
      className="loadingBarFiller"
      style={{ width: `${props.percentage}%` }}
    />
  );
};

export default class LoadingBar extends React.PureComponent {
  render() {
    return (
      <div>
        <LoadingBarContainer percentage={this.props.percentage} />
      </div>
    );
  }
}
