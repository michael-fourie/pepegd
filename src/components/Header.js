import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import logo from "../assets/png/pepegdLogo.png";
import {
  Flex,
  Link,
  Image,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Box,
  Text,
} from "@chakra-ui/react";
import "../style/Headers.css";

export default function Headers({ onConnect, account }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = useState("right");
  const formatAddress = (str) => {
    return str ? str.slice(0, 5) + "..." + str.slice(str.length - 5) : "";
  };
  return (
    <Flex

      px={{
        base: "10px",
        md: "15px",
        lg: "20px",
        xl: "85px",
      }}
      py="20px"
      justifyContent={{
        base: "center",
        lg: "space-between",
      }}
      paddingTop="-373%"
      alignItems="center">
      <Image
        mt="2%"
        src={logo}
        w={{
          base: "230px",
          md: "200px",
          lg: "300px",
        }}
      />

      <Flex className="desktop-only">
        <Link
          mr="50px"
          color="white"
          fontSize="2xl"
          textTransform="uppercase"
          href="https://opensea.io/"
          isExternal>
          Opensea
        </Link>
        <Link
          mr="50px"
          color="white"
          fontSize="2xl"
          textTransform="uppercase"
          href="https://jpegd.io"
          isExternal>
          JPEG'd
        </Link>
        <Link
          mr="50px"
          color="white"
          fontSize="2xl"
          textTransform="uppercase"
          href="https://twitter.com/"
          isExternal>
          Twitter
        </Link>
      </Flex>
      <Flex alignItems="center">
        {" "}
        {!account ? (
          <Flex
          _hover={{
            transform: 'translate(5px, -5px)',
            transition: 'all 0.3s ease 0s',
            boxShadow: "rgb(255 41 109) -4px 4px 0px 0.5px",
            }}
            justifyContent="center"
            alignItems="center"
            color="white"
            as="button"
            w="200px"
            h="50px"
            backgroundColor="rgb(151, 240, 237)"
            textShadow="0.9px 0 0 #000, 0 -0.9px 0 #000, 0 0.9px 0 #000, -0.9px 0 0 #000"
            mr="10px"
            className="desktop-only"
            letterSpacing="2px"
            fontSize="18px"
            onClick={onConnect}>
            Connect Wallet
          </Flex>
        ) : (
          <Text color="white" className="desktop-only">
            {" "}
            {formatAddress(account)}
          </Text>
        )}
        <Box
          as="button"
          p="2"
          onClick={onOpen}
          display={{
            base: "block",
            md: "none",
          }}
          position="absolute"
          right="10px"
          className="mobile-only">
          <HiMenu color="white" size="40" />
        </Box>
      </Flex>
      <Drawer 
        background="green"
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
        display={{
          base: "block",
          md: "none",
        }}>
        <DrawerOverlay />
        <DrawerContent background="black">
          <DrawerHeader color="white" borderBottomWidth="1px"> Menu</DrawerHeader>
          <DrawerBody>
            <Link
              mr="50px"
              color="white"
              fontSize="2xl"
              textTransform="uppercase"
              display="block"
              mb="20px"
              href="https://opensea.io/"
              isExternal>
              Opensea
            </Link>
            <Link
              mr="50px"
              color="white"
              fontSize="2xl"
              textTransform="uppercase"
              display="block"
              mb="20px"
              href="https://jpegd.io"
              isExternal>
              JPEG'd
            </Link>
            <Link
              mr="50px"
              color="white"
              fontSize="2xl"
              textTransform="uppercase"
              display="block"
              mb="20px"
              href="https://twitter.com"
              isExternal>
              Twitter
            </Link>{" "}
            {!account ? (
              <Flex
                _hover={{
                  transform: 'translate(5px, -5px)',
                  transition: 'all 0.3s ease 0s',
                  boxShadow: "rgb(255 41 109) -4px 4px 0px 0.5px",
                }}
                justifyContent="center"
                alignItems="center"
                color="white"
                fontWeight="bold"
                as="button"
                w="200px"
                backgroundColor="rgb(151, 240, 237)"
                borderWidth="1px"
                h="50px"
                borderColor="white"
                borderRadius="25px"
                mr="10px"
                className="desktop-only"
                onClick={onConnect}
                >
                Connect Wallet
              </Flex>
            ) : (
              <Text color="black"> {formatAddress(account)} </Text>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
