import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nosClients.module.css';

function NosClients() {
    return (
        <div className={styles.container}>

            <h1 className={styles.headerText}>Votre Expertise SEO</h1>

            <p className={styles.text}>Quel que soit votre secteur d'activité ou votre besoin spécifique, je posséde l'expertise et l'expérience nécessaires pour propulser votre présence digitale vers de nouveaux sommets.</p>

            <h2 className={styles.subheading}>Mes Services</h2>
            <br/>
            <div className={styles.section}>
                <h3 className={styles.subheading}>Pour les Agences Web :</h3>
                <p className={styles.text}>Vous êtes une agence web cherchant à complémenter vos services avec une expertise SEO solide ? Découvrez comment nous pouvons collaborer pour renforcer la valeur ajoutée que vous offrez à vos clients.</p>
                <Link to="/Nos-clients/agences-web" className={styles.button}>En savoir plus</Link>
            </div>

            <div className={styles.section}>
                <h3 className={styles.subheading}>Pour les Agences de Recrutement Freelance :</h3>
                <p className={styles.text}>Vous recherchez un partenaire SEO fiable pour vos missions freelance ? Découvrez comment mon expertise peut s'intégrer à vos projets et garantir des résultats exceptionnels.</p>
                <Link to="/Nos-clients/recrutement-freelance" className={styles.button}>En savoir plus</Link>
            </div>

            <div className={styles.section}>
                <h3 className={styles.subheading}>Pour les TPE :</h3>
                <p className={styles.text}>Petites entreprises, bénéficiez d'une stratégie SEO sur mesure qui répond à vos besoins et vous aide à vous démarquer de la concurrence.</p>
                <Link to="/Nos-clients/tpe" className={styles.button}>En savoir plus</Link>
            </div>

            <h2 className={styles.subheading}>Pourquoi choisir Aadvarks Digital ?</h2>
            <ul className={styles.list}>
                <li><strong>Expertise reconnue : </strong>Mes années d'expérience et ma passion pour le SEO garantissent des résultats de qualité pour tous nos partenaires.</li>
                <li><strong>Approche sur mesure : </strong>Je comprend que chaque entreprise est unique. C'est pourquoi mes services sont adaptés à vos besoins spécifiques.</li>
                <li><strong>Partenariat durable : </strong>Votre succès est ma réussite. Je m'efforçe de construire des relations à long terme avec tous nos partenaires.</li>
            </ul>
        </div>
    );
}

export default NosClients;
