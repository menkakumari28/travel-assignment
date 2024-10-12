import React from "react";

import styles from "./Footer.module.scss";
import Facebook from "../../assets/images/facebook.svg";
import Instagram from "../../assets/images/instagram.svg";
import Twitter from "../../assets/images/twitter.svg";
import linkedin from "../../assets/images/linkedin.svg";
import Wave from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <div className={styles.wave}>
      <div>
        <img src={Wave} className={styles.bgImg} alt="footer" />
      </div>
      <div className={styles.footer}>
        <div>
          <h6>Legal</h6>
          <p>MSA Self Managed</p>
          <p>Privacy</p>
          <p>GDPR</p>
          <p>Guidelines for Law Enforcement</p>
          <p>Terms of Service</p>
          <p> Manage Cookies</p>
        </div>
        <div>
          <h6>Product</h6>
          <p>Why move?</p>
          <p>Features</p>
          <p>Omnichannel</p>
          <p>Community</p>
          <p>Webinars</p>
          <p>Marketplace</p>
        </div>
        <div>
          <h6>company</h6>
          <p>Team</p>
          <p>About</p>
          <p>Jobs</p>
          <p>Partners</p>
          <p>Press</p>
          <p>Blog</p>
          <p>Newsletter</p>
        </div>
        <div className={styles.icon}>
          <img src={Twitter} alt="twiter" />
          <img src={Instagram} alt="instagram" />
          <img src={linkedin} alt="linkdin" />
          <img src={Facebook} alt="facebook" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
