import React from "react";
import {
  ChakraProvider,
} from "@chakra-ui/react";
import tokenSwapComradeTheme from "./constant/theme";
import Home from "./pages/Home/Home";

function App() {
  return (
    <ChakraProvider theme={tokenSwapComradeTheme}>
     <Home />
    </ChakraProvider>
  );
}

export default App;
