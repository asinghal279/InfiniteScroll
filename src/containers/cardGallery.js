import React, { Component } from "react";
import Card from "../components/card";
import axios from "axios";
import { Flex } from "@chakra-ui/react";

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
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);
  }

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      this.getData(this.state.page + 1);
    }
    this.setState({ prevY: y });
  }

  componentDidUpdate(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        profiles: [],
        page: 1,
        prevY: 0,
        seed: "",
      });
      this.getData(this.state.page);
    }
  }

  getData = async (page) => {
    this.setState({ loading: true });
    let nat = "";
    if (this.props.nationality[0]) {
      nat = nat.length ? nat + ",us" : nat + "us";
    }
    if (this.props.nationality[1]) {
      nat = nat.length ? nat + ",dk" : nat + "dk";
    }
    if (this.props.nationality[2]) {
      nat = nat.length ? nat + ",fr" : nat + "fr";
    }
    if (this.props.nationality[3]) {
      nat = nat.length ? nat + ",gb" : nat + "gb";
    }
    axios
      .get(
        `https://randomuser.me/api/?gender=${this.props.gender}&results=10&nat=${nat}&page=${page}&seed=${this.state.seed}`
      )
      .then((response) => {
        const result = response.data;
        this.setState(
          {
            profiles: [...this.state.profiles, ...result.results],
            loading: false,
            seed: result.info.seed,
            page: result.info.page,
          },
          () => console.log(this.state)
        );
      })
      .catch((err) => console.log(err));
  };

  render() {
    const loadingCSS = {
      height: "100px",
      margin: "30px",
      color: "White",
      fontSize: "24px",
    };

    const loadingTextCSS = { display: this.state.loading ? "block" : "none" };
    return (
      <>
        <Flex flexWrap="wrap" pl={0} justify="center">
          {this.state.profiles.map((user) => (
            <Card data={user} />
          ))}
        </Flex>
        <div
          ref={(loadingRef) => (this.loadingRef = loadingRef)}
          style={loadingCSS}
        >
          <span style={loadingTextCSS}>Loading...</span>
        </div>
      </>
    );
  }
}

export default cardGallery;
