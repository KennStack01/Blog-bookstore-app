import React from 'react'
import Header from './Header'
import Footer from './Footer'


const styles = {
    layoutContent: 'text-center flex flex-col h-screen',
    children: 'flex-grow',
}

const Layout = ({ children }) => {
    return (
        <div className={styles.layoutContent}>
            <Header/>
                <main className={styles.children}>
                    { children }
                </main>
            <Footer/>
        </div>
    )
}

export default Layout
