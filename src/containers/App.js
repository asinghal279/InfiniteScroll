import { Box } from "@chakra-ui/react";
import "./App.css";
import CardGallery from "./cardGallery";
import Header from "../components/header";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gender: "",
      nationality: [false, false, false, false],
    };
  }

  genderSelect = (e) => {
    console.log(e.target.value)
    this.setState({
      gender: e.target.value,
    });
  };

  nationalityChange = (e) => {
    // console.log(e.target.id)

    const id = e.target.id;
    let nationality = [...this.state.nationality];
    nationality[id] = !nationality[id];
    this.setState({
      nationality: nationality,
    });
  };
  render() {
    return (
      <Box className="App" bg="#282c34">
        <Header
          genderSelect={this.genderSelect}
          nationalityChange={this.nationalityChange}
        />
        <CardGallery gender={this.state.gender} nationality={this.state.nationality}/>
      </Box>
    );
  }
}

export default App;
