import React from 'react'
import Properties from '../components/properties'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import { fetchAPI } from '../lib/strapiurl'

const Listings = ({properties }) => {
  return (
    <>
      <div className={styles.propertymain}>
        <Layout title={'Property Listings'}/>
        <div className={styles.propertybody}>
          <h1 className={styles.propertytitle}>Listings</h1>
          <Properties properties={properties}/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export async function getStaticProps() {
  const [ properties, categories ] = await Promise.all([
    fetchAPI('/articles'),
    fetchAPI('/categories'),
  ])

  return {
    props: { properties, categories },
    revalidate: 1,
  }
}

export default Listings