import React from 'react'
import {  Box , Image , Button , VStack  } from '@chakra-ui/react'
import Logo from "../Images/Instagram-logo.png";

function Navbar() {
  return (
    <Box  width="100%" bgColor="gray" height="100vh">
        <Image margin="auto" width="70%" src={Logo} alt='Website Logo'/>
        <VStack>
            <Button>Home</Button>
            <Button>Home</Button>
            <Button>Home</Button>
            <Button>Home</Button>
            <Button>Home</Button>
        </VStack>
    </Box>
  )
}

export default Navbar
