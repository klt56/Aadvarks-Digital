import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <h1 className={styles.contactTitle}>Contactez-moi</h1>
            <p>Je suis impatient de discuter de votre projet et de vos besoins !</p>
            <br />
            <p>Que vous soyez une TPE, une agence web ou une agence de recrutement freelance, je suis là pour vous accompagner dans votre parcours SEO. Contactez-moi pour découvrir comment nous pouvons collaborer.
</p>
            <div className={styles.contactInfo}>
                <h3>Coordonnées</h3>
                <p><strong>Email :</strong> <a href="mailto:votre.email@example.com">votre.email@example.com</a></p>
                <p><strong>Téléphone :</strong> <a href="tel:+1234567890">+12 345 678 90</a></p>
                <p><strong>Adresse :</strong> 123 rue de la Ville, Code Postal, Ville</p>

                <button className={styles.emailButton} onClick={() => window.location.href = 'mailto:votre.email@example.com'}>Envoyez-moi un e-mail</button>
            </div>
        </div>
    );
}

export default Contact;
