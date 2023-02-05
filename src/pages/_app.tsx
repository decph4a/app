import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { initializeFirebaseApp } from '../lib/firebase/firebase'
import { getApp } from 'firebase/app'


initializeFirebaseApp()
export default function App({ Component, pageProps }: AppProps) {
    console.log(getApp())
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}
