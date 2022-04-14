import {
    Flex,
    Image,
    Heading,
    Text
} from '@chakra-ui/react';
import bg from "../assets/png/border.png"
export default function TeamCard({
    heading,
    text,
    image
}) {
    return ( 
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
        <Image 
            src = {
                image
            }
            w = "250px"
            marginBottom="2%"
        />
        <Heading 
         textShadow="2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000"
            color = "white"
            mt = "1px" > {
            heading
        } </Heading> 
        <Text 
            textShadow="1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"
            color = "white"
            maxW = "300px"
            textAlign = "center"
            mt = "4px" > {
            text
            } 
        </Text> 
        </Flex>
    );
}