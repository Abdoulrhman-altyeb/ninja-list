import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ninja List | Home </title>
      </Head>
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>Cupidatat fugiat adipisicing ut aute sint voluptate. Aliqua pariatur ad qui dolor aliqua quis exercitation cupidatat veniam laborum magna nulla. Eu ullamco ea fugiat velit incididunt adipisicing eiusmod consequat non non qui. Magna ea proident excepteur tempor ullamco labore minim irure sunt amet duis. Qui eiusmod ad mollit irure aute sint consectetur. In dolor exercitation tempor Lorem excepteur amet enim mollit. Amet elit aliquip occaecat aliqua nostrud eiusmod culpa.</p>
      <p className={styles.text}>Cupidatat fugiat adipisicing ut aute sint voluptate. Aliqua pariatur ad qui dolor aliqua quis exercitation cupidatat veniam laborum magna nulla. Eu ullamco ea fugiat velit incididunt adipisicing eiusmod consequat non non qui. Magna ea proident excepteur tempor ullamco labore minim irure sunt amet duis. Qui eiusmod ad mollit irure aute sint consectetur. In dolor exercitation tempor Lorem excepteur amet enim mollit. Amet elit aliquip occaecat aliqua nostrud eiusmod culpa.</p>
      <Link href='/ninjas'>   
        <a className={styles.btn}>see ninja listing</a>
      </Link>
    </div>
  )
}
