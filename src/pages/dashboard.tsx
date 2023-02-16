import { Footer } from 'components/Footer'
import { Header } from 'components/Header'

const Dashboard = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header />
            <div style={{ flex: 1, overflow: 'auto' }} />
            <Footer />
        </div>
    )
}
export default Dashboard
