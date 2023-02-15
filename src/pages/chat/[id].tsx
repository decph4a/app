import { Avatar, FormControl } from "@chakra-ui/react"
import { Text, Flex, Heading, Input, Button } from "@chakra-ui/react"
import Sidebar from "components/Sidebar"
import { useRouter } from "next/router"
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore'
import { db, auth } from 'lib/firebase/firebase'
import { collection, doc, orderBy, query } from "firebase/firestore"
import { useAuthState } from 'react-firebase-hooks/auth'
import getOtherEmail from 'utils/getOtherEmail'

type Message = {
    sender: string;
    text: string;
    timestamp: number;
};

const Topbar = ({ email }: { email: string }) => {
    return (
        <Flex
            h="81px" w="100%"
            align="center"
            p={5}
        >
            <Avatar src="" marginEnd={3} />
            <Heading size="lg">{email}</Heading>
        </Flex>
    )
}

const Bottombar = () => {
    return (
        <FormControl>
            <Input placeholder="入力" autoComplete="off" />
            <Button type="submit" hidden>送信</Button>
        </FormControl>
    )
}

export default function Chat() {
    const router = useRouter()
    const { id } = router.query as { id: string }
    const [user] = useAuthState(auth);

    const q = query(collection(db, `chats/${id}/message`), orderBy("timestamp"))
    const [message] = useCollectionData<Message>(q, { idField: 'id' });

    const [chat] = useDocumentData(doc(db, "chats", id.toString()))

    const getMessages = () => {
        if (!user) {
            return null;
        }
        return message?.map(msg => {
            const sender = msg.sender === user.email
            return (
                <Flex key={msg.timestamp} alignSelf={sender ? "flex-start" : "flex-end"} bg={sender ? "blue.100" : "green.100"} flex={1} direction="column" pt={4} mx={5} overflowX="scroll" sx={{ scrollbarWidth: "none" }}>
                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>{msg.text}</Text>
                    </Flex>
                </Flex>
            )
        })
    }

    return (
        <Flex
            h="100vh">
            <Sidebar />
            <Flex
                flex={1}
                direction="column"
            >
                <Topbar email={user ? getOtherEmail(chat?.users, user) : ''} />
                <Flex direction="column" flex={1} overflowY="scroll">
                    {getMessages()}
                </Flex>
                <Bottombar />
            </Flex>
        </Flex>
    )
}
