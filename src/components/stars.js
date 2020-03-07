import React, { Component } from "react";
import { MdStar, MdStarHalf } from "react-icons/md";

export default class stars extends Component {

drawStars = stars => {
  if (stars - Math.floor(stars) !== 0) {
    var starRating = [<MdStarHalf style={{ color: "yellow" }} />], i = 1
  }
  else { var starRating = [], i = 0;}

  for (i; i < stars; i++) { starRating.unshift(<MdStar style={{ color: "yellow" }} />);}
    return starRating;
  }

  render() {
    return <div>{this.drawStars(this.props.stars)}</div>;
  }
}

