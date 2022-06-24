import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Huma Trading</title>
                <meta
                    name="description"
                    content="E-Commerence Platform Based In Pakistan"
                />
            </Head>
            <Header />
        </>
    );
};

export default Home;
