import React from 'react';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
// import Nyan from '../assets/animation/nyan_cat.json';
import { isMobile } from 'react-device-detect';
import trade from "../assets/png/trade.png";
import mint from "../assets/png/mint.png";
import jpegd from "../assets/png/jpegd.png";
import { Image } from "@chakra-ui/react";
import "../components/WhyCard";
import "../style/Why.css"

export default function Why() {
    const mt = isMobile ? "-35%" : "-10%"
    const w = isMobile ? "100%" : "70%"
    const pb = isMobile ? "25%" : "0%"
    const shd1 = isMobile ? "2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000" : "3px 0 0 #000, 0 -3px 0 #000, 0 3px 0 #000, -3px 0 0 #000";
    const shd2 = isMobile ? "3px 0 0 #000, 0 -3px 0 #000, 0 3px 0 #000, -3px 0 0 #000" : "4px 0 0 #000, 0 -4px 0 #000, 0 4px 0 #000, -4px 0 0 #000";

    return (
        <div h="fit-content" w="100%">


            <Flex
                position="relative"
                flexDirection="column"
                justifyContent={{ base: 'flex-start', md: 'center' }}
                alignItems="center"
                pt={{ base: '50px', lg: 0 }}
            >

                    <Box
                        margin="auto"
                        maxW={{ base: '100%', md: '70%', lg: '75%' }}
                        px={{ base: '20px', lg: 0 }}
                        paddingBottom={pb}

                    >
                        <Flex
                        position="relative"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent={{ base: 'flex-start', md: 'center' }}
                    >
                        <Image
                            src={jpegd}
                            w="520px"

                        />
                            <Flex
                            mt="1%"
                            width={w}
                            position="relative"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent={{ base: 'flex-start', md: 'center' }}
                            className='text-border'
                        >
                                <Heading textShadow={shd1} mT="5%" maxW="100%" color="white" fontSize={{ base: '5xl', md: '8xl' }}>
                                    The Pepeg'd Plan
                                </Heading>

                                <Text
                                    textShadow="1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"
                                    color="white"
                                    maxW="90%"
                                    textAlign="center"
                                    fontSize={
                                        {
                                            base: '1xl',
                                            lg: '2xl'
                                        }
                                    }
                                    mt="4px" >
                                    On completetion of minting, we will use 50% of the funds raised to do an absolute giga chad market buy of $JPEGd.
                                    The pepeg'd community will hold a susbtatinal position in JPEG'd protocol governance.
                                    This $JPEGd will be farmed through liquididty mining and single-side staking. The initial amount of purchased $JPEG'd
                                    will never leave these farms, and is thus virtually removed from the $JPEGd supply.
                                    The yield generated will be returned to the pepeg'd communitiy through token airdrops, funding of further art initiatives, and eventually Sandbox land for the Pepeg's.
                                    
                                </Text>
                            </Flex>
                        </Flex>
                    </Box>
                   
            </Flex>
        </div>
    );
}
