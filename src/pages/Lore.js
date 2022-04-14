import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { isMobile } from "react-device-detect"
import dinos from "../assets/gif/wagif.gif"
import FAQ from "../components/FAQ"

export default function Lore() {

    const or = isMobile ? "column" : "row";
    const mt = isMobile ? "20%" : "0%";
    const w = isMobile ? "750px" : "450px";
    return (
        <Flex
            mt = "4%"
            flexDirection={or}
            justifyContent={{ base: 'flex-start', md: 'center' }}
            alignItems="center"
            pb="4%"
        >
            <Box
                margin="auto"
                maxW={{ base: "95%", md: '55%', lg: '35%' }}
                px={{ base: '20px', lg: 0 }}
            >
                <FAQ />
            </Box>
            <Box
                margin="auto"
                maxW={{ base: '100%', md: '70%', lg: '75%' }}
                px={{ base: '20px', lg: 0 }}
            >
                <Image
                    mt={mt}
                    src={dinos}
                    w={w}
                />
            </Box>
        </Flex>
    )

}

