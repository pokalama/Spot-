import React, { Component } from "react";
import TrackList from '../TrackList/TrackList';

export class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultvalue={'New Playlist'} />
        {/* <!-- Add a TrackList component --> */}
        <button class="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
