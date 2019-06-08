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
  //CONSTRUCTOR bind the function ===================
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0
    };
    // this.loading = this.loading.bind(this);
  }

  //LOADING function ==============================
  loading = () => {
    if (this.state.percentage !== 100) {
      return this.setState({ percentage: 100 });
    }
  };

  //RENDER function ================================
  render() {
    return (
      <div>
        <LoadingBarContainer percentage={this.state.percentage} />
        <button onClick={this.loading}>Click Me!</button>
      </div>
    );
  }
}
