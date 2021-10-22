import Image from 'next/image'
import styles from '../styles/Home.module.css'

function ImageCaption({img, body}) {
    return(
        <div className={styles.ImageCaption}>
            <Image 
            src={img}
            alt=""
            layout="responsive"
            width={150}
            height={100}
            className={styles.xImage}
            />
            <p className={styles.caption}>{body}</p>
        </div>
    ) 
}

export default ImageCaption