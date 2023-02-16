import {
    chakra,
    Container,
    Heading,
    useToast,
} from '@chakra-ui/react'
import { useAuthContext } from 'feature/auth/provider/AuthProvider'
import { FirebaseError } from '@firebase/util'
import { getAuth, signOut } from 'firebase/auth'
import { Navigate } from 'components/Navigate'
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
            push((path) => path.$url())
        } catch (e) {
            if (e instanceof FirebaseError) {
                console.log(e)
            }
        }

    }
    return (
        <chakra.header py={4} bgColor={'blue.600'}>
            <Container maxW={'container.lg'}>
                <Navigate href={(path) => path.dashboard.$url()}>
                    <chakra.a
                        _hover={{
                            opacity: 0.8,
                        }}
                    >
                        <Heading color={'white'}>Catapult</Heading>
                    </chakra.a>
                </Navigate>
            </Container >
        </chakra.header >
    )
}
