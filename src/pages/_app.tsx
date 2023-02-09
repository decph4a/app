import { chakra, ChakraProvider } from '@chakra-ui/react'
import { AppProps } from "next/app";
import { initializeFirebaseApp } from '../lib/firebase/firebase'
import { AuthProvider } from '../feature/auth/provider/AuthProvider'
import { getApp } from 'firebase/app'
import { Header } from '../component/Header/Header'
import { Footer } from '../component/Footer/Footer'
import { theme } from 'lib/chakra/theme'


initializeFirebaseApp()
export default function App({ Component, pageProps }: AppProps) {
    console.log(getApp())
    return (
        <ChakraProvider theme={theme}>
            <AuthProvider>
                <Header />
                <chakra.main flex={1} display={'flex'} flexDirection={'column'}>
                    <Component {...pageProps} />
                </chakra.main>
                <Footer />
            </AuthProvider>
        </ChakraProvider>
    )
}
