import "../style/WhyCard.css"

import { Image, Flex, Box, Heading, Text } from '@chakra-ui/react';

function WhyCard(img, heading){
    return(
        <Flex w = {
            {
                base: '70%',
                md: '50%',
                lg: "100%"
            }
        }
        flexDirection = "column"
        alignItems = "center"
        mb = "50px"
         >
        <Image src = {
            img
        }
        w = "270px" />
        <Heading color = "white"
        mt = "1px" > {
            heading
        } </Heading> 
        </Flex>
    )

}

export default WhyCard