import { chakra, ChakraProvider, Spinner, Center } from '@chakra-ui/react'
import { AppProps } from "next/app";
import { initializeFirebaseApp } from '../lib/firebase/firebase'
import { AuthProvider } from '../feature/auth/provider/AuthProvider'
import { getApp } from 'firebase/app'
import { theme } from 'lib/chakra/theme'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from 'lib/firebase/firebase'
import Login from 'component/Login/Login'


initializeFirebaseApp()
export default function App({ Component, pageProps }: AppProps) {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return (
            < ChakraProvider >
                <Center h="100vh">
                    <Spinner size="x1" />
                </Center>
            </ChakraProvider >
        )
    }
    if (user) {
        return (
            <ChakraProvider>
                <Login />
            </ChakraProvider>
        )
    }
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}
