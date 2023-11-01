import React from 'react';
import styles from './Operationel.module.css';

const Operationnel = () => {
  return (
    <div>
      <section className={styles.section}>
        <h1 className={styles.title}>Mise en Œuvre Pragmatique de Votre Stratégie</h1>
        <p className={styles.content}>
          Une stratégie est aussi bonne que sa mise en œuvre. C'est pourquoi je mets un point d'honneur à opérationnaliser chaque élément de votre stratégie SEO de manière efficace.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Audit Technique & Correction des Erreurs</h2>
        <p className={styles.content}>
          La première étape de l'opérationnalisation est de garantir que votre site est techniquement prêt. Je procède à un audit complet, identifiant et rectifiant toute erreur qui pourrait entraver vos performances SEO.
        </p>
        <div className={styles.highlight}>
          <p className={styles.content}>
            Des temps de chargement rapides aux structures URL optimisées, je m'assure que votre site est parfaitement optimisé pour les moteurs de recherche.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Création de Contenu Engageant & Optimisé</h2>
        <p className={styles.content}>
          La création de contenu est au cœur de l'opérationnel SEO. je produis du contenu de haute qualité qui non seulement plait aux moteurs de recherche, mais aussi engage et convertit vos visiteurs.
        </p>
        <div className={styles.highlight}>
          <p className={styles.content}>
            Chaque pièce de contenu est méticuleusement recherchée, écrite, et optimisée pour assurer qu'elle répond à la fois aux besoins de votre audience et aux exigences SEO.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Suivi, Analyse & Adaptation</h2>
        <p className={styles.content}>
          Le travail opérationnel ne s'achève jamais. Je suis les résultats, évalue l'efficacité des actions mises en œuvre, et j'adapte en fonction des retours et des changements dans l'environnement SEO.
        </p>
        <div className={styles.highlight}>
          <p className={styles.content}>
            A travers un processus d'amélioration continue, j'assure que vos efforts opérationnels sont toujours en phase avec les meilleures pratiques du marché.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Operationnel;
