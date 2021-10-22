import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Contact from '../components/contactform'
import Footer from '../components/footer'
import ImageCaption from '../components/imagecaption'
import Layout from '../components/layout'

export default function Home() {
  return (
    <div className={styles.main}>
      <Layout title={'Home'} />
      <div className={styles.hero}>
        <div className={styles.herotext}>
          <h1 id={styles.heroheading}>CHARLES CHAO</h1>
          <p id={styles.heropara}>Southland Regional Real Estate Agent</p>
        </div>
      </div>
      
      <div className={styles.locations}>
        <h1>Locations</h1>
        <div className={styles.toplocationsgrid}>
          {/* Los Angeles County */}
          <ImageCaption
          img='/Webaliser-Los-Angeles-County.jpg'
          body="Los Angeles County"/>

          {/* San Bernardino */}
          <ImageCaption
          img='/Fran-Hogan-San-Bernardino-County.jpg'
          body="San Bernardino County"/>

          {/* San Diego */}
          <ImageCaption
          img='/Digital-Marketing-Agency-San-Diego-County.jpg'
          body="San Diego County"/>
        </div>
        <div className={styles.bottomlocationsgrid} >
          {/* San Francisco */}
          <ImageCaption
          img='/Ross-Joyner-San-Francisco-County.jpg'
          body="San Francisco County"/>

          {/* Orange County */}
          <ImageCaption
          img='/Blake-Wheeler-Orange-County.jpg'
          body="Orange County"/>
        </div>
      </div>

      <div className={styles.landingcontact} id="landing-contact">
        <div className={styles.innercontent}>
          <h1 className={styles.contactheader}>Contact Charles</h1>
          <Image
            src='/Charles-Chao-Portrait.jpg'
            alt="Charles Chao Portrait"
            width={510}
            height={350}
          />
        </div>
        <div className={styles.innercontent}>
          <Contact/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
