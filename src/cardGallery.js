import React, { Component } from "react";
import Card from "./card";
import {getProfiles} from "./api";

class cardGallery extends Component {
  componentDidMount() {
    getProfiles();
  }
  render() {
    return <Card />;
  }
}

export default cardGallery;
