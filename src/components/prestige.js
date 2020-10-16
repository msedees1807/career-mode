import React, { Component } from "react";
import { MdFavorite } from "react-icons/md";

export default class prestige extends Component {
  drawPrestige = (prestige) => {
    let prestigeRating = [];
    for (let i = 0; i < prestige; i++) {
      prestigeRating.push(<MdFavorite style={{ color: "red" }} key={i} />);
    }
    return prestigeRating;
  };

  render() {
    return <div>{this.drawPrestige(this.props.prestige)}</div>;
  }
}
