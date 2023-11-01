import React from 'react';
import styles from './Technique.module.css';

const Technique = () => {
  return (
    <div>
      <section className={styles.section}>
        <h1 className={styles.title}>La Clé de Votre Visibilité en Ligne</h1>
        <p className={styles.content}>
          Je suis convaincu que le SEO technique est le pilier de toute stratégie de référencement réussie. Il va bien au-delà des mots-clés ; il s'agit de la structure, de la performance et de l'expérience utilisateur de votre site.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Optimisation On-Page pour une Meilleure Performance</h2>
        <p className={styles.content}>
          L'optimisation on-page englobe toutes les modifications que j'effectue directement sur votre site pour améliorer sa visibilité. Cela inclut la structure des URLs, la balise title, la meta description, le maillage interne, et bien plus encore.
        </p>
        <div className={styles.highlight}>
          <p className={styles.content}>
            En me focalisant sur ces détails techniques, je m'assure que votre site est non seulement conforme aux normes des moteurs de recherche, mais qu'il offre également une expérience utilisateur fluide.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Analyse de la Vitesse et de la Performance</h2>
        <p className={styles.content}>
          La vitesse de chargement de votre site web a un impact direct sur votre taux de conversion. Un site lent peut décourager les visiteurs, d'où l'importance de l'optimisation de la performance.
        </p>
        <div className={styles.highlight}>
          <p className={styles.content}>
            Je me plonge dans les détails pour m'assurer que chaque élément, des images aux scripts, est optimisé pour une vitesse maximale.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Sécurité et Accessibilité</h2>
        <p className={styles.content}>
          La sécurité de votre site web est primordiale. Un site sécurisé inspire confiance à vos visiteurs et est également favorisé par les moteurs de recherche. De plus, assurer l'accessibilité de votre site à tous les utilisateurs, y compris ceux ayant des besoins spécifiques, est essentiel.
        </p>
        <div className={styles.highlight}>
          <p className={styles.content}>
            Je veille à ce que votre site soit à jour, protégé contre les menaces potentielles et accessible à tous.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Technique;
