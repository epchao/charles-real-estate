import styles from '../styles/Home.module.css'
import Contact from '../components/contactform'
import Footer from '../components/footer'
import Layout from '../components/layout'

export default function Sell() {
    return (
        <div className={styles.contactmain}>
            <Layout title={'Sell Your Property'} />
            <div className={styles.contacthero}>
                <div className={styles.contactherotext}>
                    <h1 id={styles.contactheroheading}>Need help selling your property?</h1>
                </div>
            </div>

            <div className={styles.landingcontact}>
              <div className={styles.innercontent}>
                <h1 className={styles.contactheader}>We can help.</h1>
                <p className={styles.contactcontent}>To get in touch with Charles about selling your house, <br/>please fill out this form.</p>
              </div>
              <div className={styles.innercontent}>
                <Contact/>
              </div>
            </div>
            <Footer/>
        </div>
    )
}