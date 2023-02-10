import Link from "next/link";
import Image from "next/image";
import { Flex,Box,Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { FaBed,FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

const Property = ({property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) =>(
    <Link href={`/property/${externalID}`} passHref>
        <Flex flexWrap={"wrap"} w='420px' p='5' paddingTop='0px' justifyContent={"flex-start"} cursor="pointer">
        <Box>
          <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} />
        </Box>
        <Box w='full'>
          <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
            <Flex alignItems='center'>
              <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
              <Text fontWeight='bold' fontSize='lg'>Ksh {price}{rentFrequency && `/${rentFrequency}`}</Text>
            </Flex>
            <Box>
              <Avatar size='sm' src={agency?.logo?.url}></Avatar>
            </Box>
          </Flex>
          <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='#000000'>
            {rooms}bd
            <FaBed color="#0f5252"/> | {baths}wr <FaBath color="#0f5252"/> | {millify(area)} sqft <BsGridFill color="0f5252"/>
          </Flex>
          <Text fontSize='lg'>
            {title.length > 30 ? title.substring(0, 30) + '...' : title}
          </Text>
        </Box>
        </Flex>
    </Link>
);

export default Property;