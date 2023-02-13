import Link from "next/link";
import { Button, Heading, Text } from "@chakra-ui/react";
import { Box,Flex } from "@chakra-ui/react";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import {AiOutlineAppstore} from "react-icons/ai";
import {BiDollarCircle} from "react-icons/bi";
import { FcSearch } from "react-icons/fc";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";



const Banner = () => (
  <Box 
    bgImage="url('/banner.png')"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    
    height='60vh'>
    
    <Flex justifyContent={"center"} >
        <Text color="#ffffff" fontSize='4xl' fontWeight={"bold"}>Find Your Dream Place</Text>
    </Flex>
    <Flex justifyContent={"center"}>
        <Text color="#ffffff" fontSize='0.6rem' fontWeight={"medium"} >FIND  YOUR DREAM HOME EASILY AND QUICKLY HERE.</Text>
    </Flex>
   
    <Flex justifyContent={"center"} alignItems="center" marginTop="3rem"><Button background="#0f5252" color="#ffffff"
    fontSize="2xl" fontWeight="bold"><Link href={'/Search'}>Search House</Link></Button></Flex>
    
  </Box>
)

export default Banner;
