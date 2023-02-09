import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { initializeFirebaseApp } from '../lib/firebase/firebase'
import { AuthProvider } from '../feature/auth/provider/AuthProvider'
import { getApp } from 'firebase/app'
import { Header } from '../component/Header/Header'
import { Footer } from '../component/Footer/Footer'


initializeFirebaseApp()
export default function App({ Component, pageProps }: AppProps) {
    console.log(getApp())
    return (
        <ChakraProvider>
            <AuthProvider>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </AuthProvider>
        </ChakraProvider>
    )
}
