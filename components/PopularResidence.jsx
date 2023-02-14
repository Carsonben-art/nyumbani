import Link from "next/link";
import { Box, Button, Flex, Text} from "@chakra-ui/react";
import { Spacer } from "@chakra-ui/react";
import Image from "next/image";
import {MdVerified, MdBathtub} from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";






// import { baseUrl,fetchApi } from '@/utils/fetchApi';
// import Property from "@/components/Property";

const PopularResidence = () =>(
    <Box background="#ffffff" padding="1rem">
        <Flex padding="2rem">
            <Box>
                <Text color="#d9d9d9">Best Choice</Text>
                <Text fontWeight="bold" fontSize="1.2rem">Popular Residences</Text>
            </Box>
            <Spacer />
            <Link href="/explore"><Text color="#d9d9d9">See All</Text></Link>
        </Flex>
        <Flex  marginBottom="-100px" flexWrap="wrap">
            <Spacer/>
            <Box width="250px" boxShadow="8px #000000" background="#ffffff">
                <Image src="/images/house1.jpg" width="250"  height="300" alt="home"/>
                <Flex>
                    <MdVerified color="#0f5252"/> <Spacer/><Text fontSize="1.2rem" fontWeight="bold">Ksh. 76M</Text> <Spacer/> 
                    <Image
                        borderRadius='50'
                        boxSize='50px'
                        width='30'
                        height='30'
                        src='/images/agencydp.png'
                        alt='Dan Abramov'
                        />
                </Flex>
               
                <Flex  alignItems="center"><Text>4bd  </Text> <FaBed color="#5b8181"/> | <Text>3wr </Text> <MdBathtub color="5b8181"/> | <Text> 256sqft</Text> <AiFillAppstore color="#5b8181"/></Flex>
                <Text>Executive | Exclusive | Cool</Text>
                <Text fontSize="1.2rem" >Ruiru</Text>
                <Flex justifyContent="center" alignItems="center" marginBottom="20px"><Link href="/book-house"><Button background="#0f5252" color="#ffffff">Book Now</Button></Link></Flex>
                
            </Box>
            <Spacer/>
            <Box width="250px" boxShadow="8px #000000" background="#ffffff">
                <Image src="/images/house1.jpg" width="250"  height="300" alt="home"/>
                <Flex>
                    <MdVerified color="#0f5252"/> <Spacer/><Text fontSize="1.2rem" fontWeight="bold">Ksh. 76M</Text> <Spacer/> 
                    <Image
                        borderRadius='50'
                        boxSize='50px'
                        width='30'
                        height='30'
                        src='/images/agencydp.png'
                        alt='Dan Abramov'
                        />
                </Flex>
                
                <Flex  alignItems="center"><Text>4bd  </Text> <FaBed color="#5b8181"/> | <Text>3wr </Text> <MdBathtub color="5b8181"/> | <Text> 256sqft</Text> <AiFillAppstore color="#5b8181"/></Flex>
                <Text>Executive | Exclusive | Cool</Text>
                <Text fontSize="1.2rem" >Ruiru</Text>
                <Flex justifyContent="center" alignItems="center" marginBottom="20px"><Link href="/book-house"><Button background="#0f5252" color="#ffffff">Book Now</Button></Link></Flex>
                
            </Box>
            <Spacer/>

            <Box width="250px" boxShadow="8px #000000" marginRight="30px" background="#ffffff">
                <Image src="/images/house1.jpg" width="250"  height="300" alt="home"/>
                <Flex>
                    <MdVerified color="#0f5252"/> <Spacer/><Text fontSize="1.2rem" fontWeight="bold">Ksh. 76M</Text> <Spacer/> 
                    <Image
                        borderRadius='full'
                        boxSize='50px'
                        width={"50"}
                        height="50"
                        src='/images/agencydp.png'
                        alt='Dan Abramov'
                        />
                </Flex>
                <Flex  alignItems="center"><Text>4bd  </Text> <FaBed color="#5b8181"/> | <Text>3wr </Text> <MdBathtub color="5b8181"/> | <Text> 256sqft</Text> <AiFillAppstore color="#5b8181"/></Flex>
                <Text>Executive | Exclusive | Cool</Text>
                <Text fontSize="1.2rem" >Nyeri</Text>
                <Flex justifyContent="center" alignItems="center" marginBottom="20px"><Link href="/book-house"><Button background="#0f5252" color="#ffffff">Book Now</Button></Link></Flex>
            </Box>
            <Spacer/>
            <Box width="250px" boxShadow="8px #000000" background="#ffffff">
                <Image src="/images/house1.jpg" width="250"  height="300" alt="home"/>
                <Flex>
                    <MdVerified color="#0f5252"/> <Spacer/><Text fontSize="1.2rem" fontWeight="bold">Ksh. 23M</Text> <Spacer/> 
                    <Image
                        borderRadius='full'
                        boxSize='50px'
                        width={"50"}
                        height="50"
                        src='/images/agencydp.png'
                        alt='Dan Abramov'
                        />
                </Flex>
                <Flex  alignItems="center"><Text>4bd  </Text> <FaBed color="#5b8181"/> | <Text>3wr </Text> <MdBathtub color="5b8181"/> | <Text> 256sqft</Text> <AiFillAppstore color="#5b8181"/></Flex>
                <Text>Executive | Exclusive | Cool</Text>
                <Text fontSize="1.2rem" >Kisumu</Text>
                <Flex justifyContent="center" alignItems="center" marginBottom="20px"><Link href="/book-house"><Button background="#0f5252" color="#ffffff">Book Now</Button></Link></Flex>
            </Box>
            <Spacer/>
    
            
            
        </Flex>
        <Box background="#000000" height="60vh">
            <Flex  alignItems="center" justifyContent="center" paddingTop="150px" flexWrap="wrap">
                <Spacer/>
                <Box>
                    <Text fontSize="1rem" fontWeight="bold" color="#ffffff">Ben Carson</Text>
                    <Text fontSize="0.6rem" color="#ffffff">Founder Nyumbani</Text>
                </Box>
                <Spacer/>
                <Box>
                    <Text color="#ffffff" fontSize="1.2rem" fontWeight="bold">&apos Here you can find your dream house <br/> easily, quickly and very practically with carious types.&apos</Text>
                </Box>
                <Spacer/>
            </Flex>
        </Box>
        
    </Box>
);



export default PopularResidence;

