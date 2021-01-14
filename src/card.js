import { Avatar, Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";

export class card extends Component {
  render() {
    return (
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="white"
        mx={3}
        my={2}
        flex="0 0 33.33%"
      >
        <Flex p={5} justify="space-between">
          <Avatar
            size="xl"
            name="Christian Nwamba"
            src={this.props.data.picture.medium}
          />
          <Box textAlign="center">
            <Text>
              {this.props.data.name.first} {this.props.data.name.first}
            </Text>
            <Text>
              {this.props.data.dob.age} yrs, {this.props.data.gender}
            </Text>
          </Box>
        </Flex>
        <Divider />
        <Box>
          <Text>Phone : {this.props.data.phone}</Text>
          <Text>Email : {this.props.data.email}</Text>
        </Box>
      </Box>
    );
  }
}

export default card;
