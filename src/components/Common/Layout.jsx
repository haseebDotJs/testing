import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import "../../styles/sass/main.scss"

const Layout = ({ children }) => {
    return (
        <div className="layout"> 
            <Header />
                <div className="content">
                    {children} 
                </div>
            <Footer />
        </div>
    )
}  

export default Layout
