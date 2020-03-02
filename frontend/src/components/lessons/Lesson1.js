import React, { Component } from "react";
import { connect } from "react-redux";
import { CM } from "../common/CM";

export class Lesson1 extends Component {
  render() {
    return (
      <div>
        <h1>Dars #1</h1>
        <div className="row">
          <div className="col-6">
            <CM code={"Mirror#1"} />
          </div>
          <div className="col-6">
            <CM code={"Mirror#2"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Lesson1;
