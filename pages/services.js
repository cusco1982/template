import Head from 'next/head'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Image from 'next/image'
import styles from '../styles/Services.module.css'

import Jumbotron from '../components/Jumbotron'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | WJ Best Insulation - Edison, NJ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap" rel="stylesheet" />
      </Head>
      {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}






<Jumbotron/>









services












      {/*------------------------------------------------------------------ end ------------------------------------------------------------------------*/}
    </div>
  )
};
