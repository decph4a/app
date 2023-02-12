import { Footer } from 'component/Footer/Footer'
import { Header } from 'component/Header/Header'

const Index = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header />
            <div style={{ flex: 1, overflow: 'auto' }} />
            <Footer />
        </div>
    )
}
export default Index
