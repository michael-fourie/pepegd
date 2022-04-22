import React, {
    useState
} from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Input,
    transition
} from '@chakra-ui/react';
import cloud from '../assets/png/cloud.png';
import { isMobile } from 'react-device-detect';
//import GoldCat from '../assets/animation/gold_cat.json';
//import GradientCat from '../assets/animation/gradient_cat.json';
import "../style/Home.css"

export default function Home({
    data,
    account,
    loading,
    onMint,
    onMintPresale
}) {
    const [count, setCount] = useState(1);
    const {
        totalSupply,
        maxSupply,
        cost,
        saleActive,
        presaleActive
    } = data;
    console.log(data)

    const marginTop = isMobile ? "20%" : "5%"
    const btnText = isMobile ? "1xl" : "1xl";
    const minH = isMobile ? "0" : "100hv";
    const shd = isMobile ? "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000" : "2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000";

    return (
        <Flex
            className='border-mint'
            mt={marginTop}
            minH = {minH}
            position = "relative"
            flexDirection = "column"
            justifyContent = {
                {
                    base: 'center',
                    md: 'flex-start'
                }
            }   
            alignItems = "center"
        >
        {/* <Box id = "golden_cat" > </Box>
        <Box id = "gradient_cat" className = "gradient_cat"> </Box> */}
        <Heading
            textShadow={shd}
            letterSpacing="2px"
            textTransform = "uppercase"
            color = "white"
            fontSize = {
                {
                    base: '3xl',
                    md: '5xl'
                }
            }
        >
        Mint your Pepeg
        </Heading> 
        <Text 
            px = {
                {
                    base: '20px',
                    md: 0
                }
            }
            mt = {
                {
                    base: '20px',
                    md: 0
                }
            }
            textAlign = "center"
            letterSpacing="1.5px"
            color = "white"
            fontSize = {
                {
                    base: 'lg',
                    md: 'xl'
                }
        }>
        {
            `${totalSupply}/${maxSupply} Pepeg's minted at 0.15 ETH each`
        } 
        </Text>
            <Input onChange = {
                e => setCount(e.target.value)
            }
            type = "number"
            name = "count"
            bg = "white"
            w = "200px"
            h = "60px"
            color = "black"
            fontSize = "2xl"
            fontWeight = "bold"
            mt = "30px"
            value = {
                count
            }
            textAlign = "center"
            minLength = "1"
            min = "1" />
        <Box 
            className='jpegd-btn'
            as = "button"
            backgroundColor="rgb(0, 55, 130)"
            minW = "200px"
            px = "20px"
            h = "60px"
            fontSize = {btnText}
            letterSpacing="2px"
            mt = "20px"
            color = "white"
            textTransform = "uppercase"
            _hover={{
                boxShadow: "rgb(255 41 109) -4px 4px 0px 0.5px",
                transform: 'translate(5px, -5px)',
                transition: 'all 0.3s ease 0s'

            }}
            disabled = {!account || loading || (!saleActive && !presaleActive)
            }
            onClick = {
                () => {
                    console.log(account, !loading, saleActive, presaleActive);
                    if (account && !loading && saleActive) {
                        onMint(count, cost);
                    }
                    if (account && !loading && presaleActive) {
                        onMintPresale(count, cost);
                    }
                }
            }>
            {
                saleActive || presaleActive ? 'Mint' : 'Coming Soon'
            }
        </Box>
        </Flex>
    );
}