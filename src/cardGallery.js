import React, { Component } from "react";
import Card from "./card";
import { getProfiles } from "./api";
import axios from "axios";
import { Box, Flex } from "@chakra-ui/react";

class cardGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: [],
      loading: false,
      page: 1,
      prevY: 0,
      seed: "",
    };
  }

  componentDidMount() {
    this.getData(this.state.page);
  }

  getData = async (page) => {
    this.setState({ loading: true });
    axios
      .get(`https://randomuser.me/api/?results=10&nat=us,dk,fr,gb&page=${page}`)
      .then((response) => {
        const result = response.data;
        this.setState(
          {
            profiles: [...this.state.profiles, ...result.results],
            loading: false,
            seed: result.info.seed,
          },
          () => console.log(this.state)
        );
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Flex flexWrap="wrap" pl={0} justify="center">
        {this.state.profiles.map((user) => (
          <Card data={user}/>
        ))}
      </Flex>
    );
  }
}

export default cardGallery;
