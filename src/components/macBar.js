import React, { Component } from "react";
import { IoLogoApple, IoIosWifi, IoMdBatteryCharging } from "react-icons/io";
import moment from "moment";

export default class macBar extends Component {
  render() {
    return (
      <span
        style={{
          position: "fixed",
          backgroundColor: "#1b1b1bd9",
          width: "100%",
          height: "25px",
          top: "0px"
        }}
      >
        <div style={{ float: "left", display: "flex" }}>
          <IoLogoApple
            className="macBarText"
            style={{ color: "white", fontSize: "20px", margin: "2px 10px" }}
          />
          <div className="macBarText" style={{ fontWeight: "700" }}>
            Hub
          </div>
          <div className="macBarText">File</div>
          <div className="macBarText">Edit</div>
          <div className="macBarText">View</div>
          <div className="macBarText">Window</div>
          <div className="macBarText">Help</div>
        </div>
        <div>
          <div
            className="macBarText"
            style={{ float: "right", display: "inline-flex" }}
          >
            <IoIosWifi style={{ fontSize: "18px", margin: "4px 5px" }} />
            <IoMdBatteryCharging
              style={{
                fontSize: "18px",
                transform: "rotate(90deg)",
                margin: "4px 5px"
              }}
            />
            <div className="macBarText">{moment().format("h:mm")}</div>
          </div>
        </div>
      </span>
    );
  }
}
