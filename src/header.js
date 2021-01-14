import {
  Box,
  Button,
  Checkbox,
  Flex,
  flexbox,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Select,
} from "@chakra-ui/react";
import React, { Component } from "react";

class header extends Component {
  
  render() {
    return (
      <Flex bg="#49505e" justify="center" p={5}>
        Filters
        <Select
          w="30%"
          placeholder="Select Gender"
          mx={5}
          onChange={this.props.genderSelect}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Select>
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorScheme="blue">
            Select Nationality
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup>
              <Flex justify="center">
                <Checkbox
                  value="us"
                  id={0}
                  onChange={this.props.nationalityChange}
                >
                  USA
                </Checkbox>
              </Flex>
              <Flex justify="center">
                <Checkbox
                  value="dk"
                  id={1}
                  onChange={this.props.nationalityChange}
                >
                  Denmark
                </Checkbox>
              </Flex>
              <Flex justify="center">
                <Checkbox
                  value="fr"
                  id={2}
                  onChange={this.props.nationalityChange}
                >
                  France
                </Checkbox>
              </Flex>
              <Flex justify="center">
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
