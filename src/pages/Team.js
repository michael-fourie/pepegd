import {
    Flex,
    Heading,
    Text,
    Box,
    Grid
} from '@chakra-ui/react';
import skitzo from "../assets/png/skitzo.png"
import degen from "../assets/jpg/degen.jpg"
import sexy from "../assets/jpg/sexy.jpg"
import unhatched from "../assets/gif/wagmi-unrevealed.gif"
import TeamCard from '../components/TeamCard';
import { isMobile } from 'react-device-detect';


export default function Team() {

    const pb = isMobile ? "0px" : "80px";
    return (
        <Flex

            px="30px"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            flex="wrap"
            w="100%"
            minH="100vh">
            <Heading
                textShadow="3px 0 0 #000, 0 -3px 0 #000, 0 3px 0 #000, -3px 0 0 #000"
                mt="15%"
                fontSize={
                    {
                        base: '5xl',
                        lg: '6xl'
                    }
                }
                color="white"
                textAlign="center"
                w="100%"
                mb="50px" >
                The Pepeg'd Team
            </Heading>
            {isMobile ?
                <Flex
                    flexWrap="wrap"
                    justifyContent="center"
                    flexDirection="row"
                >
                    <TeamCard
                        image={skitzo}
                        heading="Skitzo"
                        text="Degen Chad Developer" />


                    <TeamCard
                        image={sexy}
                        heading="Sexychungus"
                        text="Master of Meme's and Operations" />

                    <TeamCard
                        image={degen}
                        heading="Degen Sholze"
                        text="Core Boosted Degen Chad" />
                    <TeamCard
                        image={unhatched}
                        heading="Richard NFG"
                        text="Grand Master of Art" />
                </Flex>
                :
                <Flex
                    flexWrap="wrap"
                    justifyContent="center"
                    flexDirection="column"
                >
                    <Flex
                        justifyContent="center"
                        flexDirection="row"
                        mb="5%"
                    >
                        <TeamCard
                            image={skitzo}
                            heading="Skizto"
                            text="Degen Chad Developer" />
                        <Flex
                            width="150px"
                        >

                        </Flex>
                        <TeamCard
                            image={sexy}
                            heading="Sexychungus"
                            text="Master of Meme's and Operations" />

                    </Flex>
                    <Flex
                        justifyContent="center"
                        flexDirection="row"
                    >
                    <TeamCard
                        image={degen}
                        heading="Degen Sholze"
                        text="Core Boosted Degen Chad" />
                    <TeamCard
                        image={unhatched}
                        heading="Richard NFG"
                        text="Grand Master of Art" />
                    </Flex>
                </Flex>
            }
        </Flex>
    );
}