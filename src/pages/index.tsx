import Head from 'next/head'
import { Navigate } from 'components/Navigate/Navigate'
import { Link, ChakraProvider, Center, Box, Stack, Button } from '@chakra-ui/react'
import { ChatIcon } from "@chakra-ui/icons"

export default function Home() {
    return (
        <div>
            <ChakraProvider>
                <Head>
                    <title>Login</title>
                </Head>

                <Center h="100vh">
                    <Stack
                        align="center"
                        bgColor="gray.600"
                        p={16}
                        rounded="3xl"
                        spacing={12}
                        boxShadow="lg"
                    >
                        <Box
                            bgColor="blue.500"
                            w="fit-content"
                            p={5}
                            rounded="3xl"
                            boxShadow="md"
                        >
                            <ChatIcon w="100px" h="100px" color="white" />
                        </Box>
                        <Button boxShadow="md">
                            <Navigate href={(path) => path.signin.$url()}>
                                <Link lineHeight={1}>サインイン</Link>
                            </Navigate>
                        </Button>
                        <Button boxShadow="md">
                            <Navigate href={(path) => path.signup.$url()}>
                                <Link lineHeight={1}>サインアップ</Link>
                            </Navigate>
                        </Button>
                    </Stack>
                </Center>
            </ChakraProvider>
        </div >
    )
}
