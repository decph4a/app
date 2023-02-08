import type { NextPage } from 'next'
import { Heading } from '@chakra-ui/react'
import { AuthGuard } from 'feature/auth/component/AuthGuard/AuthGuard'
const Index = () => {
    return (
        <AuthGuard>
            <Heading>Chakra UI</Heading>
        </AuthGuard >
    )
}

export default Index
