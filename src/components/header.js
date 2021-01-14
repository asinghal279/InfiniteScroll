import {
  Button,
  Checkbox,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  Select,
} from "@chakra-ui/react";
import React, { Component } from "react";

class header extends Component {
  
  render() {
    return (
      <Flex bg="#49505e" justify="center" p={5}>
        <Select
          w="30%"
          placeholder="Select Gender"
          mx={5}
          color="black"
          onChange={this.props.genderSelect}
          variant="flushed"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorScheme="blue">
            Select Nationality
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup>
              <Flex justify="left" ml={4}>
                <Checkbox
                  value="us"
                  id={0}
                  onChange={this.props.nationalityChange}
                >
                  USA
                </Checkbox>
              </Flex>
              <Flex justify="left" ml={4}>
                <Checkbox
                  value="dk"
                  id={1}
                  onChange={this.props.nationalityChange}
                >
                  Denmark
                </Checkbox>
              </Flex>
              <Flex justify="left" ml={4}>
                <Checkbox
                  value="fr"
                  id={2}
                  onChange={this.props.nationalityChange}
                >
                  France
                </Checkbox>
              </Flex>
              <Flex justify="left" ml={4}>
                <Checkbox
                  value="gb"
                  id={3}
                  onChange={this.props.nationalityChange}
                >
                  Britain
                </Checkbox>
              </Flex>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Flex>
    );
  }
}

export default header;
