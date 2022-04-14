import React from 'react';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
// import Nyan from '../assets/animation/nyan_cat.json';
import { isMobile } from 'react-device-detect';
import metaverse from "../assets/png/metaverse.png";
import merch from "../assets/png/merch.png";
import exclusive from "../assets/png/exclusive.png";
import { Image } from "@chakra-ui/react";
import "../components/WhyCard";

export default function Why() {
    const direction = isMobile ? "column" : "row"
    const mt = isMobile ? "-35%" : "-10%"
    const w = isMobile ? "90%" : "100%"
    const pb = isMobile ? "25%" : "0%"
    const shd1 = isMobile ? "2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000" : "3px 0 0 #000, 0 -3px 0 #000, 0 3px 0 #000, -3px 0 0 #000";
    const shd2 = isMobile ? "3px 0 0 #000, 0 -3px 0 #000, 0 3px 0 #000, -3px 0 0 #000" : "4px 0 0 #000, 0 -4px 0 #000, 0 4px 0 #000, -4px 0 0 #000";

    return (
        <div h="fit-content" w="100%">
            <Box
                margin="auto"
                height="fit-content"
                pb="15%"
                maxW={{ base: '100%', lg: '95%' }}
                px={{ base: '20px', lg: 0 }}

            >
                <Heading textShadow={shd2} pt="15%" maxW="100%" color="white" fontSize={{ base: '5xl', md: '8xl' }}>
                    Why should you ape a Pepeg, anon?
                </Heading>
            </Box>


            <Flex
                position="relative"
                flexDirection="column"
                justifyContent={{ base: 'flex-start', md: 'center' }}
                alignItems="center"
                pt={{ base: '50px', lg: 0 }}
            >
                <Box
                    margin="auto"
                    mt="-5%"
                    maxW={{ base: '100%', md: '70%', lg: '75%' }}
                    px={{ base: '20px', lg: 0 }}
                    paddingBottom={pb}

                >
                    <Flex
                        position="relative"
                        flexDirection={direction}
                        alignItems="center"
                        justifyContent={{ base: 'flex-start', md: 'center' }}
                    >
                        <Image
                            src={metaverse}
                            w={{ base: '350px', md: "450px", xl: '550px' }}

                        />
                        <Flex
                            position="relative"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent={{ base: 'flex-start', md: 'center' }}
                        >
                            <Heading textShadow={shd1} maxW="100%" color="white" fontSize={{ base: '3xl', md: '5xl' }}>
                                The Pepeg'd Plan
                            </Heading>
                            <Text
                                textShadow="1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"
                                color="white"
                                maxW={w}
                                textAlign="center"
                                fontSize={
                                    {
                                        base: '1xl',
                                        lg: '2xl'
                                    }
                                }
                                mt="4px" >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Text>
                        </Flex>
                    </Flex>
                </Box>

                {isMobile ?
                    <Box
                        margin="auto"
                        mt="5%"
                        maxW={{ base: '100%', md: '70%', lg: '75%' }}
                        px={{ base: '20px', lg: 0 }}
                        paddingBottom={pb}

                    >
                        <Flex
                        position="relative"
                        flexDirection={direction}
                        alignItems="center"
                        justifyContent={{ base: 'flex-start', md: 'center' }}
                    >
                            <Image
                                src={merch}
                                w={{ base: '200px', md: "275px", lg: '315px' }}

                            />
                            <Flex
                            position="relative"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent={{ base: 'flex-start', md: 'center' }}
                        >
                                <Heading textShadow={shd1} mT="5%" maxW="100%" color="white" fontSize={{ base: '3xl', md: '5xl' }}>
                                    How The Mint Goes Down
                                </Heading>
                                <Text
                                    textShadow="1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"
                                    color="white"
                                    maxW={w}
                                    textAlign="center"
                                    fontSize={
                                        {
                                            base: '1xl',
                                            lg: '2xl'
                                        }
                                    }
                                    mt="4px" >
                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Text>
                            </Flex>

                        </Flex>
                    </Box>
                    :
                    <Box
                        margin="auto"
                        mt="5%"
                        maxW={{ base: '100%', md: '70%', lg: '75%' }}
                        px={{ base: '20px', lg: 0 }}
                        paddingBottom={pb}

                    >
                        <Flex
                            position="relative"
                            flexDirection={direction}
                            alignItems="center"
                            marginRight="10%"
                            justifyContent={{ base: 'flex-start', md: 'center' }}
                        >
                            <Flex
                                position="relative"
                                flexDirection="column"
                                alignItems="center"
                                marginRight="2%"
                                justifyContent={{ base: 'flex-start', md: 'center' }}
                            >
                                <Heading textShadow={shd1} mT="5%" maxW="100%" color="white" fontSize={{ base: '3xl', md: '5xl' }}>
                                    How The Mint Goes Down
                                </Heading>
                                <Text
                                    textShadow="1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"
                                    color="white"
                                    maxW={w}
                                    marginRight="3%"
                                    textAlign="center"
                                    fontSize={
                                        {
                                            base: '1xl',
                                            lg: '2xl'
                                        }
                                    }
                                    mt="4px" >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Text>
                            </Flex>
                            <Image
                                src={merch}
                                w="315px"

                            />
                        </Flex>
                    </Box>
                }

                <Box
                    margin="auto"
                    mt="5%"
                    maxW={{ base: '100%', md: '70%', lg: '75%' }}
                    px={{ base: '20px', lg: 0 }}
                    paddingBottom={pb}

                >
                    <Flex
                        position="relative"
                        flexDirection={direction}
                        alignItems="center"
                        justifyContent={{ base: 'flex-start', md: 'center' }}
                    >
                        <Image
                            src={exclusive}
                            w="415px"
                        />
                        <Flex
                            position="relative"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent={{ base: 'flex-start', md: 'center' }}
                        >
                            <Heading textShadow={shd1} maxW="100%" color="white" fontSize={{ base: '3xl', md: '5xl' }}>
                                JPEG'd Protocol
                            </Heading>
                            <Text

                                textShadow="1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"
                                color="white"
                                maxW={w}
                                textAlign="center"
                                fontSize={
                                    {
                                        base: '1xl',
                                        lg: '2xl'
                                    }
                                }
                                mt="4px" >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Text>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </div>
    );
}
