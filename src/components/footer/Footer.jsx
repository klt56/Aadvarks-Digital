import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
            <h4 className={styles.footerTitle}>Aadvarks Digital</h4>
  {/* Ajoutez la classe ici */}

            </div>
            <div className={styles.footerSocial}>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    );
}

export default Footer;
