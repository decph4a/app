import { chakra, ChakraProvider } from '@chakra-ui/react'
import { AppProps } from "next/app";
import { initializeFirebaseApp } from '../lib/firebase/firebase'
import { AuthProvider } from '../feature/auth/provider/AuthProvider'
import { getApp } from 'firebase/app'
import { theme } from 'lib/chakra/theme'


initializeFirebaseApp()
export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <AuthProvider>
                <chakra.main
                    flex={1}
                    display={'flex'}
                    flexDirection={'column'}
                    minHeight={0}
                >
                    <Component {...pageProps} />
                </chakra.main>
            </AuthProvider>
        </ChakraProvider>
    )
}
