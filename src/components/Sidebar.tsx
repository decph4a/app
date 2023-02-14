import React from 'react'
import { Flex, Text } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/button"
import { Avatar } from "@chakra-ui/avatar"
import { ArrowLeftIcon } from "@chakra-ui/icons"
import { signOut } from 'firebase/auth'
import { auth, db } from 'lib/firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection } from "firebase/firestore"
import getOtherEmail from 'utils/getOtherEmail'

interface Chat {
    id: string;
    users: string[];
    [key: string]: any;
}
interface User {
    email: string | null;
}
function displayEmail(user: User | null | undefined) {
    if (user && user.email != null) {
        console.log(user.email);
    } else {
        console.log("Email not available");
    }
}

const Sidebar: React.FC = () => {
    const [user, loading, error] = useAuthState(auth);
    const [snapshot, chatsLoading, chatsError] = useCollection(collection(db, "chats"));
    const chats = snapshot?.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Chat[];
    const email = user?.email || '';
    const chatlist = () => {
        return (
            chats?.filter(chat => chat.users.includes(user?.email || ''))
                .map(
                    (chat) => (
                        <Flex key={Math.random()} p={3} align="center" _hover={{ bg: "gray.100", cursor: "pointer" }}>
                            <Avatar src="" marginEnd={3} />
                            <Text>
                                {user && user.email ? getOtherEmail(chat.users, user) : 'Email not found'}
                            </Text>
                        </Flex>
                    )
                )
        );
    };

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
                    <Text>{user?.displayName}</Text>
                </Flex>

                <IconButton aria-label='Sign out' size="sm" isRound icon={<ArrowLeftIcon />} onClick={() => signOut(auth)} />
            </Flex>

            <Button m={5} p={4}>New Chat</Button>
            <Flex overflowX="scroll" direction="column" sx={{ scrollbarwidth: "none" }} flex={1}>
                {chatlist()}
            </Flex>
        </Flex>
    );
};

export default Sidebar;
