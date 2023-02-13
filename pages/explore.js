import Link from "next/link";
import { Text,Flex,Box,Button } from "@chakra-ui/react";
import Image from "next/image";


import { baseUrl,fetchApi } from '@/utils/fetchApi';
import Property from "@/components/Property";

const Banner = ({ purpose,imageUrl,title1,title2,desc1,desc2,linkName,buttonText }) => (
    <Flex flexWrap={"wrap"} justifyContent="center" alignItems={"center"} padding={10}>
        
        <Image src={imageUrl} width={500} height={300} alt="banner" borderRadius={10}/>
        <Box p={5}>
            <Text color={"#d9d9d9"} fontSize="sm" fontWeight={"medium"}>{purpose}</Text>
            <Text color={"#000000"} fontSize="3xl" fontWeight={"bold"}>{title1} <br/> {title2}</Text>
            <Text color={"#000000"} fontSize="lg" paddingTop={"3"} paddingBottom="3">{desc1} <br/>{desc2}</Text>
            <Button fontSize={"xl"} bg={"#0f5252"} color="#ffffff">
                <Link href={linkName}>{buttonText}</Link>
            </Button>
        </Box>
    </Flex>
)
export default function explore ( {propertiesForRent,propertiesForSale}){
    // console.log(propertiesForRent,propertiesForSale);
    return (
        <div>
          
            <Banner
                 purpose="RENT A HOME"
                 title1="Rental Homes for"
                 title2="Everyone"
                 desc1="Explore from Apartments, Builder floors, Villas, Homes"
                 desc2="and more."
                 linkName="/Search?purpose=for-rent"
                 buttonText="Explore Renting"
                 imageUrl="/images/for-rent.jpg"
            />
            <Flex flexWrap={"wrap"} justifyContent="center">
                {propertiesForRent.map((property) => <Property property = {property} key={property.id}/>)}
            </Flex>
            <Banner
                 purpose="BUY A HOME"
                 title1="Find, Buy & Own your Dream Home"
                 title2="at a Click."
                 desc1="Explore from Apartments, Builder floors, Villas, Homes"
                 desc2="and more."
                 linkName="/Search?purpose=for-sale"
                 buttonText="Explore Buying"
                 imageUrl="/images/for-sale.jpg"
            />
            <Flex flexWrap={"wrap"} justifyContent="center" background={"#f7f7f7"}>
                {propertiesForSale.map((property) => <Property property = {property} key={property.id}/>)}
                
            </Flex>
            
        </div>
    )
}

export async function getStaticProps(){
    const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
    const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

    return {
        props:{
            propertiesForSale: propertyForSale?.hits,
            propertiesForRent: propertyForRent?.hits,
        }
    }
}