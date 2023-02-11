import Sidebar from 'component/Sidebar/Sidebar'
import { Flex, Heading, } from "@chakra-ui/layout"
import { Avatar } from "@chakra-ui/avatar"
import { Input, Button, Text } from "@chakra-ui/react"
const Topbar = () => {
    return (
        <Flex
            bg="gray.100"
            h="81px" w="100%"
            align="center"
            p={5}
        >
            <Avatar src="" marginEnd={3} />
            <Heading size="lg">hogehoge@gmail</Heading>
        </Flex>
    )
}

const Bottombar = () => {
    return (
        <Flex
            p={3}
        >
            <Input placeholder="メッセージを入力" />
        </Flex>
    )

}
export default function Chat() {
    return (

        <Flex
            h="100vh"
        >
            <Sidebar />
            <Flex
                flex={1}
                direction="column"
            >
                <Topbar />
                <Flex flex={1} direction="column" pt={4} mx={5} overflowX="scroll" sx={{ scrollbarWidth: "none" }}>
                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>ダミー</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>ダミー</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>ダミー</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>ダミー</Text>
                    </Flex>                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>ダミー</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>ダミー</Text>
                    </Flex>                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>ダミー</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>ダミー</Text>
                    </Flex>                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>ダミー</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>ダミー</Text>
                    </Flex>                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>ダミー</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>ダミー</Text>
                    </Flex>                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>ダミー</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>ダミー</Text>
                    </Flex>                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>ダミー</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>ダミー</Text>
                    </Flex>
                </Flex>
                <Bottombar />
            </Flex>
        </Flex>
    )
}
