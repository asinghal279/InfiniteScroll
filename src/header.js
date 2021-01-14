import { Box, Button, Flex, Menu, MenuButton, MenuDivider, MenuItemOption, MenuList, MenuOptionGroup, Select } from '@chakra-ui/react'
import React, { Component } from 'react'

class header extends Component {
    render() {
        return (
            <Flex bg="#49505e" justify="center" p={5}>
                Filters
                <Select w="30%" placeholder="Select Gender" mx={5}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </Select>
                <Menu closeOnSelect={false}>
                    <MenuButton as={Button} colorScheme="blue">
                        Select Nationality
                    </MenuButton>
                    <MenuList minWidth="240px">
                        <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
                            <MenuItemOption value="asc">Ascending</MenuItemOption>
                            <MenuItemOption value="desc">Descending</MenuItemOption>
                        </MenuOptionGroup>
                        <MenuDivider />
                        <MenuOptionGroup title="Country" type="checkbox">
                            <MenuItemOption value="email">Email</MenuItemOption>
                            <MenuItemOption value="phone">Phone</MenuItemOption>
                            <MenuItemOption value="country">Country</MenuItemOption>
                        </MenuOptionGroup>
                    </MenuList>
                </Menu>
            </Flex>
        )
    }
}

export default header
