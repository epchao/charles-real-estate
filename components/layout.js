import Head from 'next/head'
import Navbar from './navbar';

const Layout = ({ title }) => (
    <>
        <Head>
            <title>{title} | Charles Chao</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar/>
    </>
)

export default Layout