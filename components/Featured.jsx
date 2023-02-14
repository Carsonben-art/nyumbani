import { Box,Flex,Text } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { BsCoin } from "react-icons/bs";
import {GiTimeTrap} from "react-icons/gi";
import { Spacer } from "@chakra-ui/react";

const Featured = () =>(
    <Box>
        <Flex justifyContent={"center"} flexDirection="column" alignItems={"center"} paddingBottom="30px">
            <Text color={"#d9d9d9"}>featured</Text>
            <Text fontSize={"3xl"} fontWeight="bold">What You Get?</Text>
            <Flex justifyContent={"center"} flexWrap="wrap">
                <Box width={"250px"} height="auto" marginRight={"2rem"}>
                    <Flex flexDirection={"column"} justifyContent="center" alignItems={"center"}>
                        <BiSearch fontSize={"1.8rem"} color="#0f5252"/>
                        <Text fontWeight={"bold"}>Easy to Find</Text>
                        <Text fontSize={"0.8rem"} color="#d9d9d9">Here you can find your residence easily because we have worked with hundreds of residence with quality
                            and affordable prices.
                        </Text>
                    </Flex>
                </Box>
                
                <Box width="250px" height="auto" marginRight="2rem">
                    <Flex flexDirection="column" justifyContent="center" alignItems="center">
                        <BsCoin fontSize="1.8rem" color="#0f5252"/>
                        <Text fontWeight="bold">Affordable Prices</Text>
                        <Text fontSize="0.8rem" color="#d9d9d9">Properties that we work with are more affordable than other places with the same facilities and better qualities than others.
                        </Text>
                    </Flex>
                </Box>
                <Spacer />
                <Box width="250px" height="auto">
                    <Flex flexDirection="column" justifyContent="center" alignItems={"center"}>
                        <GiTimeTrap fontSize="1.8rem" color="#0f5252"/>
                        <Text fontWeight="bold">Quick Process</Text>
                        <Text fontSize="0.8rem" color="#d9d9d9">With a quick process, you don&apost have to wait a long time to inhabit your dream home immediately with your family.
                        </Text>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    </Box>


);
export default Featured;