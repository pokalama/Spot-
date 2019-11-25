import React, { Component } from "react";
import "./Track/Track.css";

export class Track extends Component {
  // This is the dynamc button for the + or -
  renderAction() {
    if (this.props.isRemoval) {
      return <buton className="Track-action">-</buton>;
    } else {
      return <button className="Track-action">+</button>;
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>track name</h3>
          <p> track artist | track album </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
