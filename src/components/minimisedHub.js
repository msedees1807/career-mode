import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import styled from "@emotion/styled";
import { MdZoomOutMap } from "react-icons/md";

const MinimisedHub = styled.div`
  cursor: default;
  position: fixed;
  bottom: 0px;
  right: 20px;
  width: auto;
  padding: 10px 20px 10px 20px;
  background-color: rgba(0, 0, 0, 0.687);
  color: white;
  border-radius: 8px 8px 0px 0px;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    background-color: rgba(35, 35, 35, 0.687);
  }

  &:active {
  }
`;

export default class minimisedHub extends Component {
  render() {
    const hub = (
      <MinimisedHub onClick={this.props.minimiseHub}>
        Negotiation Hub
        <MdZoomOutMap
          style={{
            marginLeft: "15px"
          }}
        />
      </MinimisedHub>
    );

    return (
      <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {hub}
      </CSSTransitionGroup>
    );
  }
}
