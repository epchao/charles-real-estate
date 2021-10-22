import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navhome}>
        <Link href="/">
          <a>Charles Chao</a>
        </Link>
      </div>

      <button onClick={handleToggle} className={styles.hamburger} aria-label="hamburger-menu">
        <svg viewBox="-5 0 10 8" width="25">
          <line y2="8" stroke="#000" strokeWidth="10" strokeDasharray="1.5" />
        </svg>
      </button>
      <ul className={`${styles.navitems} ${navbarOpen ? styles.showMenu : ""}`}>
        <li className={styles.navitem} id={styles.listings}>
          <Link href="/listings">
            <a onClick={() => closeMenu()}>LISTINGS</a>
          </Link>
        </li>
        <li className={styles.navitem} id={styles.sell}>
          <Link href="/sell">
            <a onClick={() => closeMenu()}>SELL</a>
          </Link>
        </li>
        <li className={styles.navitem} id={styles.about}>
          <Link href="/about">
            <a onClick={() => closeMenu()}>ABOUT</a>
          </Link>
        </li>
        <li className={styles.navitem} id={styles.contact}>
          <Link href="/#landing-contact" scroll={false}>
            <a onClick={() => closeMenu()}>CONTACT</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
