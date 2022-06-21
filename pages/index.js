import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout"

function HomePage() {
    return (
        <Layout>
            <Head>
                <title>siteTitle</title>
            </Head>
        </Layout>
    )
}

export default HomePage