import { Avatar, FormControl } from "@chakra-ui/react"
import { Text, Flex, Heading, Input, Button } from "@chakra-ui/react"
import Sidebar from "components/Sidebar"

const Topbar = () => {
    return (
        <Flex
            h="81px" w="100%"
            align="center"
            p={5}
        >
            <Avatar src="" marginEnd={3} />
            <Heading size="lg">hogeohosca@gmail</Heading>
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
    return (
        <Flex
            h="100vh">

            <Sidebar />

            <Flex
                flex={1}
                direction="column"
            >

                <Topbar />
                <Flex flex={1} direction="column" pt={4} mx={5} overflowX="scroll" sx={{ scrollbarWidth: "none" }}>
                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>hoge</Text>
                    </Flex>
                    <Flex bg="blue.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
                        <Text>hoge</Text>
                    </Flex>
                    <Flex bg="green.100" w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1} alignSelf="flex-end">
                        <Text>hoge</Text>
                    </Flex>

                </Flex>

                <Bottombar />
            </Flex>
        </Flex>

    )
}
