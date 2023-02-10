import { Box, Flex, } from "@chakra-ui/react";
import Link from "next/link";
import { Text } from "@chakra-ui/react";
import {SiTwitter} from "react-icons/si";
import {FaInstagram} from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer =()=>(
    <Box background="#000000">
        <Flex justifyContent='center' wrap='wrap'>
            <Box paddingLeft='10' alignContent='center' justifyContent='center' >
                <Text fontSize="3xl" color='#ffffff'>NYUMBANI</Text>
                <Text fontSize='0.7rem' color='#ffffff'>Find Your Dream Home Faster and Easily!</Text>
            </Box>
            <Box paddingLeft='10' justifyContent='center' justifyItems='center'>
                <Text fontSize='2xl' color='#ffffff'>Quick links</Text>
                <Link href='/' >
                    <Text color='#ffffff' fontSize='0.8rem' _hover='#5b8181'>HOME</Text>
                </Link>
                <Link href='/' >
                    <Text color='#ffffff' fontSize='0.8rem'>EXPLORE HOMES</Text>
                </Link>
                <Link href='/' >
                    <Text color='#ffffff' fontSize='0.8rem'>SEARCH</Text>
                </Link>
                <Link href='/' >
                    <Text color='#ffffff' fontSize='0.8rem'>BUY PROPERTY</Text>
                </Link>
                <Link href='/' >
                    <Text color='#ffffff' fontSize='0.8rem'>RENT PROPERTY</Text>
                </Link>
            </Box>

            <Box paddingLeft='10' justifyContent='center' justifyItems='center'>
                <Text fontSize='2xl' color='#ffffff'>Services</Text>
                <Link href='/' >
                    <Text color='#ffffff' fontSize='0.8rem' _hover='#5b8181'>FAQ</Text>
                </Link>
                <Link href='/' >
                    <Text color='#ffffff' fontSize='0.8rem'>HOW WE WORK</Text>
                </Link>
                <Link href='/' >
                    <Text color='#ffffff' fontSize='0.8rem'>SECURITY</Text>
                </Link>
                
            </Box>
            <Box paddingLeft='10' justifyContent='center' justifyItems='center'>
                <Text fontSize='2xl' color='#ffffff'>About Us</Text>
                <Link href='/' >
                    <Text color='#ffffff' fontSize='0.8rem' _hover='#5b8181'>CAREER</Text>
                </Link>
                <Link href='/' >
                    <Text color='#ffffff' fontSize='0.8rem'>HOW WE WORK</Text>
                </Link>
                <Link href='/' >
                    <Text color='#ffffff' fontSize='0.8rem'>NEWS & BLOG</Text>
                </Link>
                
            </Box>
            <Box paddingLeft='10' justifyContent='center' justifyItems='center'>
                <Text fontSize='2xl' color='#ffffff'>Connect With Us</Text>
                <Flex justifyContent='center' wrap='wrap'>
                    <Link href='/' >
                        <Text color='#5b8181' fontSize='1.5rem' marginRight='5'><SiTwitter/></Text>
                    </Link>
                    <Link href='/' >
                        <Text color='#5b8181' fontSize='1.5rem' marginRight='5'><FaInstagram/></Text>
                    </Link>
                    <Link href='/' >
                        <Text color='#5b8181' fontSize='1.5rem' marginRight='5'><BsFacebook/></Text>
                    </Link>
                    <Link href='/' >
                        <Text color='#5b8181' fontSize='1.5rem'><FaLinkedin/></Text>
                    </Link>
                </Flex>
            </Box>
            
        </Flex>
        
        <Flex justifyContent='center'><FaRegCopyright color="#ffffff" /><Text color='#ffffff' >Apperstar, 2023 | info@apperstar.com  |  +2541 1476 589</Text></Flex>
    </Box>
)
    
    
export default Footer;