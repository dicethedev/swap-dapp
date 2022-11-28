import React from 'react';
import { Circle, Flex, Spacer } from "@chakra-ui/react";

const Background = () => {
  return (
    <Flex position="fixed" zIndex={""} right={"-25"} bottom={"0"} top={"-40"}>
           <Circle
             size="5xl"
             borderRadius='50%'
             border='1.4px solid #2F2A3C'>

            <Circle
             size="3xl"
             borderRadius='50%'
             border='1.4px solid #2F2A3C'>

               <Circle
             size="xl"
             borderRadius='50%'
             border='1.4px solid #2F2A3C'>
            </Circle>

            </Circle>

            </Circle>

            
    </Flex>
  );
};

export default Background;