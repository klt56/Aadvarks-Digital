import React from 'react';
import styles from './Tpe.module.css';

function Tpe() {
    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>Votre Partenaire SEO pour les TPE</h1>
            <p className={styles.paragraph}>
                Bienvenue chez Aadvarks Digital, l'agence SEO dédiée à propulser les Très Petites Entreprises (TPE) vers de nouveaux sommets sur le web. En tant que spécialiste du SEO, je comprends les défis uniques auxquels sont confrontées les petites entreprises en matière de visibilité en ligne.
            </p>

            <h2 className={styles.subTitle}>Pourquoi choisir Aadvarks Digital ?</h2>
            <ul className={styles.featuresList}>
                <li>Spécialisation TPE : Je comprends les besoins, les budgets et les aspirations des TPE. Mon approche est adaptée pour offrir un retour sur investissement maximal.</li>
                <li>Expertise SEO : Avec des années d'expérience et des success stories à mon actif, je garantis des stratégies efficaces et à jour.</li>
                <li>Approche Personnalisée : Chaque entreprise est unique. J'offre des solutions sur mesure pour répondre aux besoins spécifiques de votre entreprise.</li>
            </ul>

            <h2 className={styles.subTitle}>Mes Prestations</h2>
            <ul className={styles.benefitsList}>
                <li>Audit SEO : Analyse approfondie de votre site pour identifier les opportunités et les améliorations.</li>
                <li>Optimisation On-page : De la structure du site aux méta-données, je m'assure que votre site est optimisé pour les moteurs de recherche.</li>
                <li>Stratégie de Contenu : Création de contenus de qualité, pertinents pour votre audience et optimisés pour le SEO.</li>
                <li>Netlinking : Augmentation de la notoriété de votre site à travers une stratégie de backlinks de qualité.</li>
            </ul>

            <div className={styles.testimonials}>
                <p><i>"Depuis que nous travaillons avec Aadvarks Digital, notre visibilité en ligne a explosé. Réactive et professionnelle !"</i></p>
                <footer>Sophie L., Gestionnaire de projets freelance</footer>
                <p><i>"Aadvarks a transformé notre site web en une véritable machine à attirer des clients."</i></p>
                <footer>Sophie L., Gestionnaire de projets freelance</footer>
            </div>

            <div className={styles.cta}>
                <p>Passez à la vitesse supérieure avec Aadvarks Digital !</p>
                <p>Prêt à améliorer votre visibilité en ligne et à attirer plus de clients ? Contactez-moi dès aujourd'hui.</p>
                <button onClick={() => window.location.href = '/contact'}>Contactez-moi</button>
            </div>
        </div>
    );
}

export default Tpe;
