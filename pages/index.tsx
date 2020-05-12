import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import styles from './index.module.css';

const Home:React.FunctionComponent = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav>nav</nav>

        <main>
          body
        </main>

        <footer>
          footer
        </footer>
      </div>
    </Layout>
  );
}

export default Home;
