import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout"
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function HomePage() {
    return (
        <Layout>
            <Head>
                <title>siteTitle</title>
            </Head>
            <TaskForm />
        </Layout>
    )
}

export default HomePage