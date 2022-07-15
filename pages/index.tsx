import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../componets/Footer'
import Header from '../componets/Header/header'
import Layout from '../componets/Layout'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Website bán mỹ phẩm</title>
        <meta name="description" content="Thông tin website bán mỹ phẩm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       Main
      </main>
      <Footer />
    </div>
  )
}

export default Home
