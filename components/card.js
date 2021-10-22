import React from "react"
import Link from "next/link"
import Target from './image'
import styles from '../styles/Home.module.css'

const Card = ({ property }) => {
    return (
        <div className={styles.cardui}>
            <Link as={`/property/${property.slug}`} href="/property/[id]">
                <a>
                    <div>
                        <Target target={property.target} />
                    </div>
                    <div className={styles.propertydetails}>
                        <div className={styles.propertyprice}>
                            <p>{property.price}</p>
                        </div>
                        <p>{property.category.name}</p>
                        <div className={styles.propertyaddress}>
                            <p>{property.address}</p>
                        </div>
                        <div className={styles.propertyoverview}>
                            <p>{property.overview}</p>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default Card