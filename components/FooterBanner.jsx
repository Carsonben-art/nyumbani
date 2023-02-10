import { Box,Flex,Text, Button } from "@chakra-ui/react";
import Link from "next/link";

const FooterBanner=()=>(
    <Box backgroundImage="url('/banner.png')" backgroundPosition={"center"} backgroundRepeat="no-repeat" height={"50vh"} >
        <Flex flexDirection={"column"} justifyContent="center" alignItems={"center"} alignContent="center">
            <Text color={"#ffffff"} fontSize="4xl" fontWeight={"bold"} marginTop="20px">Get Started With Nyumbani</Text>
            <Text color={"#ffffff"}>Join us and get crazy promo promos from us <br/> find your dream house right away.</Text>
            <Link href="/register"><Button background={"#0f5252"} color="#ffffff" fontWeight={"bold"} marginTop="20px" fontSize={"1.7rem"}>Get Started</Button></Link>
        </Flex>
    </Box>
);
export default FooterBanner;
