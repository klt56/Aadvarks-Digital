import React from 'react';
import styles from './RecrutementFreelance.module.css';

function RecrutementFreelance() {
    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>Spécialiste SEO pour vos Missions Freelance</h1>
            <p className={styles.paragraph}>Le monde du digital évolue rapidement, et pour rester compétitif, vous avez besoin des meilleurs talents à vos côtés. Aadvarks Digital est là pour vous fournir une expertise SEO de pointe pour toutes vos missions freelance.</p>

            <h2 className={styles.subTitle}>Pourquoi choisir Aadvarks Digital pour vos missions ?</h2>
            <ul className={styles.featuresList}>
                <li><strong>Expérience éprouvée :</strong> Avec une solide track record dans le SEO, j'ai déjà aidé de nombreuses marques à accroître leur visibilité en ligne.</li>
                <li><strong>Adaptabilité :</strong> Familiarisé avec les exigences des missions freelance, je peut m'intégrer rapidement à tout projet, quel que soit son stade d'avancement.</li>
                <li><strong>Communication claire :</strong> Je comprends l'importance des échéances et de la transparence. Vous serez toujours informé des progrès réalisés.</li>
            </ul>

            <h2 className={styles.subTitle}>Ce que nous apportons à vos missions freelance</h2>
            <ul className={styles.benefitsList}>
                <li><strong>Expertise SEO complète :</strong> De l'audit à l'optimisation, je couvre tous les aspects du SEO pour garantir d'excellents résultats.</li>
                <li><strong>Stratégies à jour :</strong> Le monde du SEO change rapidement. Je veille à être toujours informés des dernières tendances et mises à jour.</li>
                <li><strong>Reporting régulier :</strong> Restez informé avec des rapports détaillés et compréhensibles pour suivre les performances et les résultats.</li>
            </ul>

            <div className={styles.testimonials}>
                <blockquote>
                    <p><i>"Aadvarks Digital a été un véritable atout pour notre mission SEO. Réactif, compétent et professionnel."</i></p>
                    <footer>Sophie L., Gestionnaire de projets freelance</footer>
                </blockquote>
                <blockquote>
                    <p><i>"Nous faisons appel à Aadvarks Digital à chaque fois que nous avons besoin d'une expertise SEO fiable. Il ne déçois jamais."</i></p>
                    <footer>Romain D., Coordinateur de missions freelance</footer>
                </blockquote>
            </div>

            <div className={styles.cta}>
                <p className={styles.paragraph}>Donnons vie à vos missions avec une expertise SEO de pointe.</p>
                <button onClick={() => window.location.href = '/contact'}>Contactez-moi</button>
            </div>
        </div>
    );
}

export default RecrutementFreelance;
