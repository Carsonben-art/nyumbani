import '@/styles/globals.css'

import Head from 'next/head';
import Link from 'next/link';
import { NProgress } from 'nprogress';

import { ChakraProvider } from '@chakra-ui/react';

import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  return(
    <>
      <Head></Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </ChakraProvider>
    </>

  )
}
