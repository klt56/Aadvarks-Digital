import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <h1 className={`${styles.title} text-center p-4`}>Expertise SEO & Stratégies Digitales sur Mesure</h1>
            <p className={`${styles.description} mx-5 text-center`}>Spécialiste en référencement naturel et stratégies digitales,
             Aadvarks Digital vous guide vers une visibilité en ligne optimale.
             Quelle que soit votre industrie ou votre taille d'entreprise,
             mes solutions sont adapté pour répondre à vos besoins spécifiques
             et vous propulser au sommet des résultats de recherche.</p>

            <div className={styles.parallaxSection}>
                <div className={styles.parallaxBackground}></div>
                {/* Ajoutez du contenu au-dessus de votre parallaxe ici si nécessaire */}
            </div>

            <section className={styles.contentBlock}>
                <img src="/assets/images/image1.jpg" alt="Description de l'image 1" className={styles.featureImg} />
                <div className={styles.textContent}>
                    <h2>Solutions sur Mesure</h2>
                    <p>Je comprend que chaque entreprise est unique. Mon approche est toujours adaptée à votre réalité.</p>
                </div>
            </section>

            <section className={styles.contentBlock}>
                <div className={styles.textContent}>
                    <h2>Collaboration Durable</h2>
                    <p>Au-delà d'un simple prestataire, je souhaite être le partenaire de confiance pour votre croissance numérique.</p>
                </div>
                <img src="/assets/images/image2.jpg" alt="Description de l'image 2" className={styles.featureImg} />
            </section>
        </div>
    )
}

export default Home;
