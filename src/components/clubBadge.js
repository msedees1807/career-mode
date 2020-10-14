import React, { Component } from "react";

export default class clubBadge extends Component {
  render() {
    const { colors } = this.props;

    return (
      <div
        style={{
          height: "16px",
          width: "16px",
          borderRadius: "16px",
          border: "2px solid " + colors.secondary,
          margin: "5px auto"
        }}
      >
        <div
          style={{
            backgroundColor: colors.primary,
            display: "inline-block",
            height: "16px",
            width: "8px",
            borderBottomLeftRadius: "16px",
            borderTopLeftRadius: "16px",
            marginBottom: "2px"
          }}
        />
        <div
          style={{
            backgroundColor: colors.primary2,
            display: "inline-block",
            height: "16px",
            width: "8px",
            borderBottomRightRadius: "16px",
            borderTopRightRadius: "16px",
            marginBottom: "2px"
          }}
        />
      </div>
    );
  }
}
