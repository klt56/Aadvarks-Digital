import React from 'react';
import styles from './Strategie.module.css';

const Strategie = () => {
  return (
    <div>
      <section className={styles.section}>
        <h1 className={styles.title}>Élaborer la Voie du Succès en Ligne</h1>
        <p className={styles.content}>
          Le succès en SEO ne provient pas d'actions isolées, mais d'une stratégie bien conçue et holistique. Chaque site web est unique, et j'élabore une stratégie personnalisée pour répondre aux besoins de chaque client.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Analyse de Marché & Recherche de Mots-Clés</h2>
        <p className={styles.content}>
          Je plonge profondément dans votre marché pour identifier les opportunités. La recherche de mots-clés ne se limite pas à trouver des termes populaires, mais à comprendre ce que votre audience cible recherche réellement.
        </p>
        <div className={styles.highlight}>
          <p className={styles.content}>
            Cette compréhension me permet de cibler les mots-clés qui conduisent à des conversions, et pas seulement à du trafic.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Optimisation du Contenu & Création de Liens</h2>
        <p className={styles.content}>
          Le contenu est roi, mais un roi a besoin d'un royaume. J'optimise votre contenu existant et en créer de nouveaux qui attirent et engagent votre audience. En parallèle, j'élaborons une stratégie de création de liens pour renforcer l'autorité de votre site.
        </p>
        <div className={styles.highlight}>
          <p className={styles.content}>
            Grâce à des partenariats et à une recherche approfondie, je trouve des opportunités de liens qui propulsent votre site dans les classements.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Analyse & Amélioration Continue</h2>
        <p className={styles.content}>
          Une stratégie SEO ne s'arrête jamais. Je suis continuellement les performances, analysant les données pour déceler de nouvelles opportunités ou ajuster la stratégie en fonction des tendances du marché.
        </p>
        <div className={styles.highlight}>
          <p className={styles.content}>
            Mon engagement envers une amélioration continue signifie que votre stratégie est toujours à jour, dynamique et prête à saisir de nouvelles opportunités.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Strategie;
