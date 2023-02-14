import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import Chat from 'components/Chat';

const Index = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header />
            <Chat />
            <div style={{ flex: 1, overflow: 'auto' }} />
            <Footer />
        </div>
    )
}
export default Index
