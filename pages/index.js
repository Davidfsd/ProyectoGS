import Head from "next/head";
import Hero from "../Componentes/Hero";
import Layout from "../Componentes/Layout";
import Menu from "../Componentes/menu";
import Services from "../Componentes/Services";
import { client } from "../lib/client";
import css from '../styles/Home.module.css'

export default function Home({pizzas}) {
  return (
      <Layout>
        <div className={css.container}>
          <Head>
            <title>bocAxo</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/Logo.png" />
            <link href="https://fonts.googleapis.com/css2?family=Crafty+Girls&display=swap" rel="stylesheet"/>
          </Head>
          {/* body */}
          <main>
            <Hero/> 
            <Services/>   
            <Menu pizzas={pizzas}/>
          </main>
        </div>
      </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "pizza" && !(_id in path("drafts.**"))]';
  const pizzas = await client.fetch(query);
  return {
    props: {
      pizzas,
    },
  };
};

