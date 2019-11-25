import React, { Component } from "react";

export class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <button claasName="SearchButton">SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
