import { chakra, Container, Flex, Link } from '@chakra-ui/react'
import { Navigate } from 'components/Navigate/Navigate'

export const Footer = () => {
    return (
        <chakra.footer py={4} bgColor={'blue.600'} color={'white'}>
            <Container maxW={'container.lg'}>
                <Flex flexDirection={'column'} gap={2} alignItems={'start'}>
                    <Navigate href={(path) => path.dashboard.$url()}>
                        <Link lineHeight={1}>ダッシュボード</Link>
                    </Navigate>
                    <Navigate href={(path) => path.chat.$url()}>
                        <Link lineHeight={1}>チャット</Link>
                    </Navigate>
                </Flex>
            </Container>
        </chakra.footer>
    )
}
