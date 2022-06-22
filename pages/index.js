import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout"
import TaskList from "../components/TaskList";

function HomePage() {
    return (
        <Layout>
            <Head>
                <title>siteTitle</title>
            </Head>
            <TaskList />
        </Layout>
    )
}

export default HomePage