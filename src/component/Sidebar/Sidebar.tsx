import { Flex, Text } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/button"
import { Avatar } from "@chakra-ui/avatar"
import { ArrowLeftIcon } from "@chakra-ui/icons"

const Chat = () => {
    return (
        < Flex p={3} align="center" _hover={{ bg: "gray.100", cursor: "pointer" }}>
            <Avatar src="" marginEnd={3} />
            <Text>hogehoge</Text>
        </Flex >
    )
}
export default function Sidebar() {
    return (
        <Flex
            w="300px" h="100vh"
            borderEnd="1px solid" borderColor="gray.200"
            direction="column"
        >
            <Flex
                h="81px" w="100%"
                align="center" justifyContent="space-between"
                borderBottom="1px solid" borderColor="gray.200"
                p={3}
            >
                <Flex>
                    <Avatar src=" " marginEnd={3} />
                    <Text>hoge</Text>
                </Flex>

                <IconButton aria-label='Search database' size="sm" isRound icon={<ArrowLeftIcon />} />
            </Flex>

            <Button m={5} p={4}>New Chat</Button>
            <Flex overflowX="scroll" direction="column" sx={{ scrollbarwidth: "none" }}>
                <Chat />
            </Flex>

        </Flex>
    )
}
