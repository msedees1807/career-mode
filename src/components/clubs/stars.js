import React, { Component } from "react";
import { MdStar, MdStarHalf } from "react-icons/md";

export default class stars extends Component {
  drawStars = (stars) => {
    let starRating = [];
    let i = 0;

    if (stars - Math.floor(stars) !== 0) {
      starRating = [<MdStarHalf style={{ color: "yellow" }} key={i} />];
      i = 1;
    }

    for (i; i < stars; i++) {
      starRating.unshift(<MdStar style={{ color: "yellow" }} key={i} />);
    }

    return starRating;
  };

  render() {
    return <div>{this.drawStars(this.props.stars)}</div>;
  }
}
