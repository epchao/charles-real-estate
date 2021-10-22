import React from "react"
import Card from "./card"
import styles from '../styles/Home.module.css'

const Properties = ({ properties }) => {
    return (
        <div className={styles.cards}>
            {properties.map((property, i) => {
                return (
                    <Card property={property} key={`${property.slug}`}/>
                )
            })}
        </div>
    )
}

export default Properties