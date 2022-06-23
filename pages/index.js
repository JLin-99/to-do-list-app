import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout"
import TaskList from "../components/TaskList";
import defaultTasks from "../public/defaultTasks.json"

function HomePage() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <TaskList defaultTasks={defaultTasks}/>
        </Layout>
    )
}

export default HomePage