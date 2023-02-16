import { Avatar, FormControl } from "@chakra-ui/react"
import { Text, Flex, Heading, Input, Button } from "@chakra-ui/react"
import Sidebar from "components/Sidebar"
import { useRouter } from "next/router"
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore'
import { db, auth } from 'lib/firebase/firebase'
import { addDoc, collection, doc, orderBy, query, Query, serverTimestamp } from "firebase/firestore"
import { useAuthState } from 'react-firebase-hooks/auth'
import getOtherEmail from 'utils/getOtherEmail'
import { useRef, useEffect } from "react"
import Topbar from "../../components/Topbar"
import Bottombar from "../../components/Bottombar"
import { Footer } from 'components/Footer'
import { Header } from "components/Header"


export default function Chat() {
    const router = useRouter();
    const { id } = router.query;
    const [user] = useAuthState(auth);
    const [chat] = useDocumentData(doc(db, "chats", id));
    const q = query(collection(db, `chats/${id}/messages`), orderBy("timestamp"));
    const [messages] = useCollectionData(q);
    const bottomOfChat = useRef();

    const getMessages = () =>
        messages?.map(msg => {
            const sender = msg.sender === user.email;
            return (
                <Flex key={Math.random()} alignSelf={sender ? "flex-start" : "flex-end"} bg={sender ? "blue.100" : "green.100"} w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                    <Text>{msg.text}</Text>
                </Flex>
            )
        })
    useEffect(() => {
        const timeout = setTimeout(() => {
            bottomOfChat.current.scrollIntoView({ behavior: "smooth", block: 'start' })
        }, 100)
        return () => clearTimeout(timeout)
    }, [messages])


    return (
        <Flex
            maxW="100%"
            h="calc(100vh - 60px)"
            flexDir="column"
            justifyContent="space-between"
        >
            <Header flex="0 0 auto" />

            <Flex
                h="100%"
                alignItems="stretch"
                justifyContent="stretch"
                minW="0"
            >
                <Sidebar flex="0 0 auto" />
                <Flex
                    flex={1}
                    direction="column"
                >
                    <Topbar email={user ? getOtherEmail(chat?.users, user) : ''} />
                    <Flex direction="column" flex={1} overflowY="scroll" sx={{ scrollbarWidth: "none" }}>
                        {getMessages()}
                        <div ref={bottomOfChat}></div>
                    </Flex>
                    <Bottombar id={id} user={user} />
                </Flex>
            </Flex>

            <Footer flex="0 0 auto" />

        </Flex>
    );

}
