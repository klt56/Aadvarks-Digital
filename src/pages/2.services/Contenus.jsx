import React from 'react';
import styles from './Contenus.module.css';

const Contenus = () => {
  return (
    <div>
      <section className={styles.section}>
        <h1 className={styles.title}>Importance et Stratégies Pragmatiques</h1>
        <p className={styles.content}>
          Nous savons que le contenu est au cœur de toute stratégie SEO réussie. Je travaille méticuleusement pour créer des contenus pertinents et de haute qualité pour votre site web.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Recherche et Sélection des Mots-clés</h2>
        <p className={styles.content}>
          Chaque contenu commence par une recherche approfondie des mots-clés. J'identifie les termes que votre audience cible utilise le plus et je les intégre naturellement dans le contenu.
        </p>
        <div className={styles.highlight}>
          <p className={styles.content}>
            De la longue traîne aux mots-clés principaux, je m'assure que votre contenu est parfaitement aligné sur les requêtes des utilisateurs.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Création de Contenu Original et Pertinent</h2>
        <p className={styles.content}>
          Nos équipes de rédacteurs et d'experts SEO collaborent étroitement pour produire des contenus uniques qui se démarquent de la concurrence tout en respectant les meilleures pratiques SEO.
        </p>
        <div className={styles.highlight}>
          <p className={styles.content}>
            De l'identification des sujets tendance à la rédaction elle-même, chaque étape est soigneusement planifiée et exécutée.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Optimisation On-Page</h2>
        <p className={styles.content}>
          Au-delà de la création de contenu, je m'assure que chaque page de votre site est parfaitement optimisée. Des balises méta à la structure HTML, rien n'est laissé au hasard.
        </p>
        <div className={styles.highlight}>
          <p className={styles.content}>
            Mon objectif est de garantir que chaque contenu est non seulement attrayant pour vos visiteurs, mais aussi pour les moteurs de recherche.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contenus;
