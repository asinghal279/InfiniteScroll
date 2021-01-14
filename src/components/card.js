import { Avatar, Box, Divider, Flex, Text } from "@chakra-ui/react";
import React, { Component } from "react";

export class card extends Component {
  render() {
    const { picture, name, gender, dob, phone, email } = this.props.data;
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
          <Avatar size="xl" name="Christian Nwamba" src={picture.medium} />
          <Box textAlign="center">
            <Text>
              {name.first} {name.first}
            </Text>
            <Text>
              {dob.age} yrs, {gender}
            </Text>
          </Box>
        </Flex>
        <Divider />
        <Box>
          <Text>Phone : {phone}</Text>
          <Text>Email : {email}</Text>
        </Box>
      </Box>
    );
  }
}

export default card;
