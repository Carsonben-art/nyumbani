import Link from "next/link";
import { Heading, Text } from "@chakra-ui/react";
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
        <Text color="#ffffff" fontSize='0.6rem' fontWeight={"medium"} >FIND  YOUR DREAM HOME EAISLY AND QUIKLY HERE.</Text>
    </Flex>
    <Flex justifyContent={"center"} marginTop="10">
      <Flex  width='50%' height="55px" borderRadius="10" padding={"2"} justifyContent="center" className="search--container">
      
        <Box borderRight={"1px solid #d9d9d9"} className="input-container">
          <Flex justifyContent={"center"} alignItems="center"><Text> Location </Text><FiMapPin/></Flex>
          <Input placeholder="Thika, Kasarani" border={"none"} outline={"none"} height="20px" width={"160px"}/>
        </Box>
        <Box borderRight={"1px solid #d9d9d9"} className="input-container">
          <Flex justifyContent={"center"} alignItems="center"><Text> Rooms </Text><AiOutlineAppstore/></Flex>
          <Select placeholder='Bedsitters' border={"none"} outline={"none"} height="20px" width={"160px"}>
          
            <option value='option2'>1 Bedroom</option>
            <option value='option3'>2 Bedrooms</option>
            <option value='option3'>3 Bedrooms</option>
            <option value='option3'>4 Bedrooms</option>
          </Select>
        </Box>
        <Box className="input-container">
          <Flex justifyContent={"center"} alignItems="center"><Text> Price </Text><BiDollarCircle/></Flex>
          <Input placeholder="Ksh. 5000" type={"number"} border={"none"} outline={"none"} height="20px" width={"160px"}/>
        </Box>
        
        
         <Flex justifyContent={"center"} alignContent="center" alignItems={"center"} ><FcSearch fontSize={"1.2rem"}/></Flex>
      </Flex>
       
    </Flex>
  </Box>
)

export default Banner;
