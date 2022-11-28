// @flow
import React from "react";
import {
    Box,
    Flex,
    HStack,
    Icon,
    Image,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    SimpleGrid,
    Center,
    VStack,
    Heading,
    Stack,
    Spinner,
    Skeleton,
    useBreakpointValue,
    Spacer
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
// import {Suspense, useCallback, useState} from "react";

export const Home = () => {
  
    const navigate = useNavigate();


    const {
        root,
        carouselBox,
        home
    } = useHomeStyles();

    return (
       <Flex justifyContent={"center"}>
       <Box
          bgImage="url('/assets/bg.svg')"
          bgPosition="center"
          bgRepeat="no-repeat"
        />
        <Stack {...root} w={"100%"}>
         <Flex flexDir={"row"} justifyContent={"space-evenly"} alignItems={"center"} mt={"100px"}>
           {/* --------------------------- Banner Content ------------------------------------- */}
          {/* -------------------------------- LEFT SECTION ----------------------------------- */}
          <Flex flexDir={"column"}>
           <Heading bgGradient='linear(74.31deg, #85FFC4 0%, #5CC6FF 45.83%, #BC85FF 80.73%)'
            bgClip='text'
            fontSize='4xl'
            fontWeight='extrabold'
             mb={"20px"} 
           >
            TokenSwapComrade
            </Heading>
           <Spacer />
           <Text color={"#FFFFFF"}
            fontSize='5xl'
            fontWeight='extrabold' 
            maxW={"300px"}
            mb={"20px"}
           >
            Your Comrade Swap Dapp
          </Text>
           <Text
           color={"#7B61FF"}
           fontSize='2xl'
           maxW={"400px"}
           mb={"20px"}
           >Swap a native currency supported by any EVM blockchain to ERC20 TOKENs on TokenWapComrade.
           </Text>
          
          {/* ------------------------------------- CONTINUE BUTTON ----------------------------------- */}
            <Box
             as='button'
             p={4}
             color='white'
             fontWeight='bold'
             borderRadius='md'
             bgGradient='linear(to-r, teal.500, green.500)'
             _hover={{
               bgGradient: 'linear(to-r, red.500, yellow.500)',
             }}
             onClick={() => navigate("/swap")}
           >
             Continue
           </Box>
          
          </Flex>

          

            {/* -------------------------------- RIGHT SECTION ----------------------------------- */}
          <Text {...home}>Swap Time</Text>
         </Flex>
       </Stack>
      </Flex>
    );
};

export default Home;

const useHomeStyles = () => {
    return {
      root: {
      w: "100%",
      h: "100vh",
      px: [5, 5, 10, 20, 40],
      pt: "3%",
      overflow: "hidden",
      bg: '#201D29'
    },
        home: {
            color: "red",
            fontSize: 40,
            paddingInline: 30,
        },
        carouselBox: {
            h: ["600px", "700px", "700px", "700px", "800px", "900px"],
            w: "100%",
            bgRepeat: "no-repeat",
            bgSize: "cover",
            pt: "105px",
            px: {
                base: "0%",
                md: "5%",
            },
        },
        nameStyles: {
            fontSize: ["20px", "20px"],
        },
        button: {
            w: {
                base: "18%",
                md: "6%",
            },
            color: "dark",
            borderWidth: 0.5,
            backgroundColor: "light",
            fontSize: "15px",
        },
        loadMore: {
            w: "132px",
            h: "32px",
            alignSelf: "center",
            py: "10px",
            borderRadius: "100px",
        },
        font: {
            fontFamily: "GT America",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "22px",
            color: "#000000",
        },
        smallButton: {
            w: "95px",
            h: "42px",
            bg: "#000000",
            borderRadius: "100px",
        },
        smallButton1: {
            w: "95px",
            h: "42px",
            border: "1px",
            borderColor: "#000000",
            borderRadius: "100px",
            color: "#000000",
        },
        font1: {
            fontFamily: "GT America",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "17px",
            color: "#999999",
        },
        font2: {
            fontFamily: "GT America",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "22px",
            color: "#FFFFFF",
        },
    };
};