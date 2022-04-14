import React from 'react';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import lottie from 'lottie-web';
import crack from "../assets/png/crack.png"
import { isMobile } from 'react-device-detect';

export default function About() {

  const bg = isMobile ? null : null;
  const mt = isMobile ? "-25%" : "2%";
  const shd1 = isMobile ? "2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000" : "3px 0 0 #000, 0 -3px 0 #000, 0 3px 0 #000, -3px 0 0 #000";
  const shd2 = isMobile ? "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000" : "2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000";
  const w = isMobile ? "95%" : "70%"
  const ml = isMobile ? "2%" : "8%"

  return (
    <Flex
      position="relative"
      minH="100vh"
      flexDirection="column"
      justifyContent={{ base: 'flex-start', md: 'center' }}
      alignItems="center"
      pt={{ base: '50px', lg: 0 }}
    >
      <Box
        margin="auto"
        height= "fit-content"
        backgroundImage={bg}
        mt={mt}
        maxW={{ base: '100%', md: '85%', lg: '85%' }}
        px={{ base: '20px', lg: 0 }}
        
      >
        <Heading  textShadow={shd1}  maxW="100%" color="white" fontSize={{ base: '4xl', md: '7xl' }}>
          Long ago, The Wagmisaurs resided on the dystopian plains of Web2...
        </Heading>
        <Box>
          <Text marginTop="4%" marginLeft={ml} textAlign="center" alignContent="center" textShadow={shd2}   width={{ base: '100%', md: '85%', lg: '85%' }} color="white" fontSize={{ base: '2xl', md: '4xl' }}>
          Knowing damn well their kind were ngmi there, the Wagmisaurs banded together to preserve 5,555 of the rarest eggs to send on an inter-network cross dimensional portal to Web3! Each wagmisaur egg costs 0.05 ETH to hatch! Hatch a wagmisaur and join the vibrant community of Dino's that never forget to say GM.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
