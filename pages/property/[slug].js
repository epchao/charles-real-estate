import React from "react"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import { fetchAPI } from "../../lib/strapiurl"
import { getStrapiMedia } from "../../lib/strapimedia"
import EmblaCarousel from "../../components/carousel"
import Footer from "../../components/footer"
import Contact from "../../components/contactform"
import styles from "../../styles/Home.module.css"

const Property = ({ property }) => {
  const IMAGEURL = getStrapiMedia(property.target)

  const seo = {
    metaTitle: property.address,
    metaDescription: property.description,
    shareImage: property.target,
  }

  return (
    <>
      <Seo seo={seo} />
      <Layout title={property.address} />
      <div data-src={IMAGEURL} data-srcset={IMAGEURL}></div>
      <div className={styles.herocontainer}>
        <EmblaCarousel gallery={property.gallery} />
        <h1>{property.address}</h1>
        <h2>{property.price}</h2>
      </div>
      <div className={styles.propertydescription}>
        <h1 className={styles.descriptionheader}>Description</h1>
        <p className={styles.descattri}>{property.overview}</p>
        <a className={styles.descattri}>{property.description}</a>
        <p className={styles.descattri}>{property.features}</p>
      </div>

      <div className={styles.mapcontainer}>
        <h1>Map</h1>
        <iframe
          width="600"
          height="400"
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB93CYxjQoC7SKIt8nHp_TANKxjR_flzEI&q=${property.address}`}
        ></iframe>
      </div>
      {property.category.slug == "active" && (
        <div className={styles.landingcontact}>
          <div className={styles.innercontent}>
            <h1 className={styles.contactheader}>Interested in this home?</h1>
            <p className={styles.contactcontent}>
              To get in touch with Charles about this house, please fill out
              this form
              <br /> and type the address in the subject textbox.
            </p>
          </div>
          <div className={styles.innercontent}>
            <Contact />
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const properties = await fetchAPI("/articles")

  return {
    paths: properties.map((property) => ({
      params: {
        slug: property.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const properties = await fetchAPI(`/articles?slug=${params.slug}`)

  return {
    props: { property: properties[0] },
    revalidate: 1,
  }
}

export default Property
