import React from 'react';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
// import Nyan from '../assets/animation/nyan_cat.json';
import { isMobile } from 'react-device-detect';
import pepe from "../assets/png/pepe_matrix.png";
import { Image } from "@chakra-ui/react";
import "../components/WhyCard";
import "../style/Why.css"

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
                <Heading textShadow={shd2} pt="7%" maxW="100%" color="white" fontSize={{ base: '5xl', md: '9xl' }}>
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
                            src={pepe}
                            w="420px"

                        />
                        <Flex
                            className='text-border'
                            position="relative"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent={{ base: 'flex-start', md: 'center' }}
                        >
                            <Heading textShadow={shd1} maxW="100%" color="white" fontSize={{ base: '3xl', md: '5xl' }}>
                                What is Pepeg'd?
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
                                    Pepeg'd is a legendary collection done by the JPEG'd community to commemorate the launch of the historic JPEG'd NFT lending protocol. 
                                    As a gift to the community, all JPEG'd Card Holders will have whitelist for this mint, on a 1:2 basis (1 Card = 2 Pepeg's).
                                    Pepeg's represent the weenis warming, slightly degen, jpg loving community behind the JPEG'd protocol.
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
                                src={pepe}
                                w="420px"

                            />
                            <Flex
                            position="relative"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent={{ base: 'flex-start', md: 'center' }}
                            className='text-border'
                        >
                                <Heading textShadow={shd1} mT="5%" maxW="100%" color="white" fontSize={{ base: '3xl', md: '5xl' }}>
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
                                    On completetion of minting, we will use 50% of funds raised to do an absolute chad market buy of $JPEGd.
                                    This $JPEGd will be farmed with liquididty mining and single-side staking.
                                    All yield will be used for airdrops and suprises for the Pepeg'd community.
                                    The other 50% of raised funds will be divided 20% into funding marketing and communitiy initiatives
                                    and 30% to the core team.
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
                                className='text-border'
                            >
                                <Heading textShadow={shd1} mT="5%" maxW="100%" color="white" fontSize={{ base: '3xl', md: '5xl' }}>
                                    The Pepeg'd Plan
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
                                    On completetion of minting, we will use 50% of funds raised to do an absolute chad market buy of $JPEGd.
                                    This $JPEGd will be farmed with liquididty mining and single-side staking.
                                    All yield will be used for airdrops and suprises for the Pepeg'd community.
                                    The other 50% of raised funds will be divided 20% into funding marketing and communitiy initiatives
                                    and 30% to the core team.
                                </Text>
                            </Flex>
                            <Image
                                src={pepe}
                                w="420px"

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
                            src={pepe}
                            w="420px"
                        />
                        <Flex
                            position="relative"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent={{ base: 'flex-start', md: 'center' }}
                            className='text-border'
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
                                    JPEGd is the leading NFT lending platform in the decentralized finance space. It is a novel and revolutionary platform that enables holders of certain NFTs to obtain a line of credit on their assets while still retaining ownership. After obtaining a line of credit on their NFTs, users can earn yield in DeFi. The protocol is permissionless, decentralized, and is governed by tokenholders of the platform, JPEG.
                            </Text>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </div>
    );
}
