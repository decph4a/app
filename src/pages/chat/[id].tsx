import { Avatar, FormControl } from "@chakra-ui/react"
import { Text, Flex, Heading, Input, Button } from "@chakra-ui/react"
import Sidebar from "components/Sidebar"
import { useRouter } from "next/router"
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore'
import { db, auth } from 'lib/firebase/firebase'
import { addDoc, collection, doc, orderBy, query, Query, serverTimestamp } from "firebase/firestore"
import { useAuthState } from 'react-firebase-hooks/auth'
import getOtherEmail from 'utils/getOtherEmail'
import { useState } from "react"
import { async } from "@firebase/util"
import firebase from 'firebase/app';
import { User } from 'firebase/auth';
type Message = {
    sender: string;
    text: string;
    timestamp: number;
};
interface BottombarProps {
    id: string;
    user: User | null | undefined;
}

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

const Bottombar = ({ id, user }: BottombarProps) => {
    const [input, setInput] = useState('');

    const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await addDoc(collection(db, `chats/${id}/messages`), {
            text: input,
            sender: user && user.email,
            timestamp: serverTimestamp()
        });
    };

    return (
        <form onSubmit={sendMessage}>
            <FormControl p={3} as="div">
                <Input placeholder="入力" autoComplete="off" onChange={e => setInput(e.target.value)} value={input} />
                <Button type="submit" hidden>送信</Button>
            </FormControl>
        </form>
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
                <Bottombar id={id} user={user} />
            </Flex>
        </Flex>
    )
}
