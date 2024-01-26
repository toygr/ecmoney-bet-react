import { ReactNode } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-full min-h-screen font-roboto'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export default HomeLayout