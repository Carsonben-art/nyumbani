import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


import Banner from '@/components/Banner';
import PopularResidence from '@/components/PopularResidence';
import Faqs from '@/components/Faqs';
import FooterBanner from '@/components/FooterBanner';
import Featured from '@/components/Featured';





const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     
      
      <Banner />
      <PopularResidence />
      <Featured />
      <Faqs />
      <FooterBanner />

      
    </>
  )
}

// export async function getStaticProps(){
//   const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=2`);
//   const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=2`);

//   return {
//       props:{
//           propertiesForSale: propertyForSale?.hits,
//           propertiesForRent: propertyForRent?.hits,
//       }
//   }
// }

