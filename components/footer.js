import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.contentheader}>
        <ul className={styles.informationlist}>
          <li className={styles.footeritem}>
            <h1 className={styles.footertitle}>CHARLES CHAO</h1>
          </li>
          <li className={styles.footeritem}>
            <a>LICENSE: DRE#02092302</a>
          </li>
          <br />
          <li className={styles.footeritem}>
            <a>
              CORPORATE OFFICE LOCATION: 2603 CAMINO RAMON SUITE 200, <br /> SAN
              RAMON, CA 94583
            </a>
          </li>
          <br />
          <li className={styles.footeritem}>
            <a>EMAIL: CHARLES.CHAO@EXPREALTY.COM</a>
          </li>
          <li className={styles.footeritem}>
            <a>PHONE NUMBER: (818)-626-6450</a>
          </li>
        </ul>
      </div>
      <div className={styles.infoheader}>
        <Image
          src="/2020_MLS_TRANSPARENT.jpeg"
          width={450}
          height={170}
          layout="responsive"
        />
        <a>
          Southland Regional - eXp Realty of California, Inc. CA Dre#01878277
        </a>
        <div className={styles.servicecontent}>
          <a>© 2021 Charles Chao</a>
          <div className={styles.termsofagreementcontent}>
            <Link href="/">
              <a>Privacy Policy</a>
            </Link>
            <Link href="/">
              <a>Terms of Service</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
