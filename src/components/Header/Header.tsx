import {
    Avatar,
    Button,
    chakra,
    Container,
    Flex,
    Heading,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spacer,
    useToast,
} from '@chakra-ui/react'
import { useAuthContext } from 'feature/auth/provider/AuthProvider'
import { FirebaseError } from '@firebase/util'
import { getAuth, signOut } from 'firebase/auth'
import { Navigate } from 'components/Navigate/Navigate'
import { useRouter } from 'hooks/useRouter/useRouter'

export const Header = () => {
    const { user } = useAuthContext()
    const toast = useToast()
    const { push } = useRouter()

    const handleSignOut = async () => {
        try {
            const auth = getAuth()
            await signOut(auth)
            toast({
                title: 'ログアウトしました。',
                status: 'success',
                position: 'top',
            })
            push((path) => path.signin.$url())
        } catch (e) {
            if (e instanceof FirebaseError) {
                console.log(e)
            }
        }

    }
    return (
        <chakra.header py={4} bgColor={'blue.600'}>
            <Container maxW={'container.lg'}>
                <Flex>
                    <Navigate href={(path) => path.dashboard.$url()}>
                        <chakra.a
                            _hover={{
                                opacity: 0.8,
                            }}
                        >
                            <Heading color={'white'}>Catapult</Heading>
                        </chakra.a>
                    </Navigate>
                    <Spacer aria-hidden />
                    {user ? (
                        <Menu>
                            <MenuButton>
                                <Avatar flexShrink={0} width={10} height={10} />
                            </MenuButton>
                            <MenuList py={0}>
                                <MenuItem onClick={handleSignOut}>サインアウト</MenuItem>
                            </MenuList>
                        </Menu>
                    ) : (
                        <Navigate href={(path) => path.$url()}>
                            <Button as={'a'} colorScheme={'teal'}>
                                サインイン
                            </Button>
                        </Navigate>
                    )}
                </Flex>
            </Container >
        </chakra.header >
    )
}
