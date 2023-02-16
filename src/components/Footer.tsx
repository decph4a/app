import { chakra, Container, Flex, Link } from '@chakra-ui/react'
import { Navigate } from 'components/Navigate'

export const Footer = () => {
    return (
        <chakra.footer py={4} bgColor="blue.600" color="white">
            <Container maxW="container.lg">
                <Flex
                    flexDirection={['column', 'column', 'row', 'row']}
                    justifyContent={['center', 'center', 'flex-end', 'flex-end']}
                    alignItems="center"
                >
                    <Flex
                        flexDirection={['column', 'column', 'row', 'row']}
                        gap={2}
                        alignItems={['start', 'start', 'center', 'center']}
                        mb={[4, 4, 0, 0]}
                    >
                        <Navigate href={(path) => path.dashboard.$url()}>
                            <Link lineHeight={1}>ダッシュボード</Link>
                        </Navigate>
                        <Navigate href={(path) => path.$url()}>
                            <Link lineHeight={1}>チャット</Link>
                        </Navigate>
                    </Flex>
                    <chakra.div
                    />
                </Flex>
            </Container>
        </chakra.footer>
    )
}
