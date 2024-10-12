import React from "react";
import styles from "./Header.module.scss";

import hamburgerIcon from "../../assets/images/hamburger.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <h2 className={styles.logo}>relocate</h2>
      <ul className={styles.navbar}>
        <li className={styles.navItem}>Destinations</li>
        <li className={styles.navItem}>Deals</li>
        <li className={styles.navItem}>Explore</li>
        <li className={styles.navItem}>Resources</li>
        <li className={styles.navItem}>
          <img src={hamburgerIcon} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
