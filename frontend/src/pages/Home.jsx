import React from "react";
import { Heading, Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Chat from "../components/Chat";
function Home() {
  return (
    <>
      <Flex width="100%">
        <Box width="15%">
          <Navbar />
        </Box>
        <Box width="60%" bg="red" overflowY="auto" maxHeight="100vh">
          <Heading>I'm a Home Page</Heading>
        </Box>
        <Box width="25%" bg="black">
          <Chat />
        </Box>
      </Flex>
    </>
  );
}

export default Home;
