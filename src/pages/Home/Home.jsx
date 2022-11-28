// @flow
import React from "react";
import {
    Box,
    Flex,
    Avatar,
    Text,
    Heading,
    Stack,
    Spacer
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import Background from "../../components/Background";
import Images_Icons from "../../constant/icons-images";

export const Home = () => {
  
    const navigate = useNavigate();

    const {
        root,
        home
    } = useHomeStyles();

    return (
       <Flex justifyContent={"center"} position={"relative"}>
        <Stack {...root} w={"100%"}>
         <Flex flexDir={"row"} justifyContent={"space-evenly"} alignItems={"center"} mt={"100px"}>
           {/* --------------------------- Banner Content ------------------------------------- */}
          {/* -------------------------------- LEFT SECTION ----------------------------------- */}
          <Flex flexDir={"column"} zIndex={"1000"}>
          <Text color={"#FFFFFF"}
            fontSize='4xl'
            fontWeight='extrabold' 
            mb={"10px"}
           >
            Welcome to
          </Text>
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
           color={"#D4CCFF"}
           fontSize='xl'
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
             borderRadius='100px'
             bgGradient='linear(74.31deg, #85FFC4 0%, #5CC6FF 45.83%, #BC85FF 80.73%)'
             _hover={{
               bgGradient: 'linear(to-r, #85FFC4 0%, #BC85FF 80.73%)',
             }}
             onClick={() => navigate("/swap")}
           >
             Continue
           </Box>
          
          </Flex>

          {/* ---------------------------------- BACKGROUND STYLE IS HEREE ---------------------------- */}
            <Background />
          {/* ---------------------------------- THE END of BACKGROUND STYLE IS HEREE ---------------------------- */} 

            {/* -------------------------------- RIGHT SECTION ----------------------------------- */}
          <Flex flexDir={"column"}>

          <Flex mb={"4px"} gap="50px">
           <Avatar size={"xl"} src={Images_Icons.USDTLogo} />
           <Spacer />
           <Avatar size={"xl"} src={Images_Icons.EthereumLogo} />
          </Flex>
          
          <Flex>

             {/* ------------------------------ LINE UNDER THE TOKENS ---------------------------- */}
            <Box
             w={"100%"}
             h={"10px"}
             borderRadius='100px'
             bgGradient='linear(74.31deg, #85FFC4 0%, #5CC6FF 45.83%, #BC85FF 80.73%)'>
            </Box>
          </Flex>
         
          </Flex>
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