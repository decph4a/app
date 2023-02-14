import { Flex, Text } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/button"
import { Avatar } from "@chakra-ui/avatar"
import { ArrowLeftIcon } from "@chakra-ui/icons"
import { signOut } from 'firebase/auth'
import { auth } from 'lib/firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

const Chat = () => {
    return (
        < Flex p={3} align="center" _hover={{ bg: "gray.100", cursor: "pointer" }}>
            <Avatar src="" marginEnd={3} />
            <Text>hogehoge</Text>
        </Flex >
    )
}
export default function Sidebar() {

    const [user] = useAuthState(auth);
    return (
        <Flex
            h="100%"
            w="300px"
            borderEnd="1px solid" borderColor="gray.200"
            direction="column"
        >
            <Flex
                h="81px" w="100%"
                align="center" justifyContent="space-between"
                borderBottom="1px solid" borderColor="gray.200"
                p={3}
            >
                <Flex
                    align="center"
                >
                    <Avatar src={user?.photoURL || ''} marginEnd={3} />
                    <Text>{user && user.displayName}</Text>

                </Flex>

                <IconButton aria-label='Search database' size="sm" isRound icon={<ArrowLeftIcon />} onClick={() => signOut(auth)} />
            </Flex>

            <Button m={5} p={4}>New Chat</Button>
            <Flex overflowX="scroll" direction="column" sx={{ scrollbarwidth: "none" }} flex={1}>
                <Chat />
            </Flex>

        </Flex >
    )
}
