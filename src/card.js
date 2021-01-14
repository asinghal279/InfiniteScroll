import { Box, Image } from '@chakra-ui/react'
import React, { Component } from 'react'

export class card extends Component {
    render() {
        return (
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg" alt="k" />

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <Box
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            ml="2"
                        >
                            new
                    </Box>
                    </Box>

                    <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                    >
                        john doe
                    </Box>

                    <Box>
                        
                        <Box as="span" color="gray.600" fontSize="sm">
                            / wk
                    </Box>
                    </Box>

                    <Box d="flex" mt="2" alignItems="center">
                        <Box as="span" ml="2" color="gray.600" fontSize="sm">
                         reviews
                    </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default card
