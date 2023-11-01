import React from 'react';
import styles from './Backlink.module.css';

const Backlink = () => {
  return (
    <div>
      <section className={styles.section}>
        <h1 className={styles.title}>Plus qu'une Connexion, un Levier de Croissance pour Votre Site</h1>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Définition des Backlinks</h2>
        <p className={styles.content}>
          Les backlinks, ces ponts numériques reliant votre site au vaste écosystème d'Internet,
          sont bien plus que de simples liens hypertextes. Ils représentent un vote de confiance,
          une recommandation précieuse d'autres acteurs du web vers votre contenu. Dans l'univers SEO,
          ces liens entrants sont des atouts stratégiques, distingués des liens internes, qui eux,
          tissent votre site en une toile cohérente et navigable.
        </p>
      </section>

      {/* Continuez avec les autres sections en utilisant la même structure */}

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Le "Linkjuice" : Alimentez Votre Site avec de la Popularité</h2>
        <div className={styles.linkjuice}>
          <p className={styles.content}>
            Le fameux "Linkjuice", ou jus de liens, n'est autre que la valeur transmise de site à site via les backlinks.
            Une page qui reçoit un flux dense et diversifié de backlinks voit sa "jus de lien" augmenter,
            signifiant à Google que votre contenu est précieux et recherché. Ma stratégie
            est d'enrichir ce flux vers votre site, fortifiant ainsi votre position dans l'écosystème digital.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Votre Partenaire pour un Netlinking de Qualité</h2>
        <p className={styles.content}>
          En somme, Je me contente pas de créer des liens ;
          je forge des relations numériques qui portent votre site à de nouveaux sommets.
          Une stratégie de backlinks soigneusement équilibrée et diversifiée est essentielle pour un référencement réussi,
          et je suis là pour vous guider à chaque étape de cette ascension.
        </p>
      </section>

    </div>
  );
}

export default Backlink;
