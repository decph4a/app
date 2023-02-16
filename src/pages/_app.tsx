
import { ChakraProvider, Spinner, Center } from '@chakra-ui/react'
import { AppProps } from "next/app";
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "lib/firebase/firebase"
import Login from 'components/Login'


function App({ Component, pageProps }: AppProps) {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return (
            <ChakraProvider>
                <Center h="100vh">
                    <Spinner />
                </Center>
            </ChakraProvider>
        )
    }

    if (!user) {
        return (
            < ChakraProvider >
                < Login />
            </ChakraProvider >
        )

    }
    return (
        <ChakraProvider >
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default App
