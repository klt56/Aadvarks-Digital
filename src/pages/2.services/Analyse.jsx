import React from 'react';
import styles from './Analyse.module.css';

const Analyse = () => {
  return (
    <div>
      <section className={styles.section}>
        <h1 className={styles.title}>Analyse SEO : Votre Trajectoire vers la Réussite</h1>
        <p className={styles.content}>
          L'analyse SEO n'est pas simplement une étape préliminaire ; c'est le fondement sur lequel repose toute stratégie de référencement efficace. Je débute toujours par une évaluation approfondie de vos besoins et un diagnostic précis de votre positionnement actuel sur le web.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Un Audit SEO Complet pour des Résultats Mesurables</h2>
        <p className={styles.content}>
          Cette phase critique d'analyse me permet d'identifier les atouts et les axes d'amélioration de votre site. En comprenant votre situation unique, je peut définir une stratégie sur mesure qui transforme les défis en opportunités de croissance.
        </p>
        <div className={styles.highlight}>
          <p className={styles.content}>
            Chaque analyse est le début d'un parcours optimisé vers l'excellence SEO. Votre réussite dans l'écosystème numérique commence ici.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Analyse;
