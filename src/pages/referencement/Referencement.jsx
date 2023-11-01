import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import styles from './referencement.module.css';

function Referencement() {
    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 500
    });

    return (
        <div className={styles.container}>
            <animated.div style={fadeIn} className={styles.headerText}>Services de Référencement : Application, Local et International</animated.div>
            <animated.div style={fadeIn}>

                <div className={styles.section}>
                    <h2 className={styles.subheading}>Optimisation pour Applications Mobiles</h2>
                    <p className={styles.text}> Mes service d'optimisation pour applications mobiles vise à propulser votre présence sur les stores, que ce soit sur Google Play ou l'App Store d'Apple. Grâce à des stratégies de référencement spécifiquement conçues pour les applications, je maximise la visibilité de votre produit dans les résultats de recherche. En utilisant des techniques avancées telles que l'optimisation des mots-clés, l'amélioration de la convivialité et la gestion des avis, je m'assure que votre application soit trouvée par les utilisateurs potentiels.
                    </p>
                    <Link to="/referencement/optimisation-mobile" className={styles.button}>En savoir plus sur l'optimisation pour applications mobiles</Link>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.subheading}>Stratégies de Référencement International</h2>
                    <p className={styles.text}> Mon expertise en référencement international vous ouvre les portes des marchés mondiaux. Que vous ciblez un public spécifique à l'étranger ou que vous cherchiez à étendre votre portée à l'international, je développe des stratégies sur mesure pour répondre à vos besoins. En utilisant des techniques telles que la localisation de contenu, l'optimisation multilingue et la recherche de mots-clés internationaux, je vous aide à établir une présence solide sur la scène mondiale.
                    </p>
                    <Link to="/referencement/referencement-international" className={styles.button}>Découvrir mes stratégies internationales</Link>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.subheading}>Référencement Localisé</h2>
                    <p className={styles.text}>Pour les entreprises qui cherchent à renforcer leur présence locale, mon service de référencement localisé est la solution idéale. J'utilise des techniques éprouvées de référencement géographique pour garantir que votre entreprise soit en tête des résultats de recherche locaux. Grâce à une optimisation minutieuse des fiches Google My Business, des avis clients et des stratégies de ciblage géographique, je vous aide à atteindre votre public local de manière efficace.
                    </p>
                    <Link to="referencement-localise" className={styles.button}>En savoir plus sur le référencement localisé</Link>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.subheading}>Analyse et Suivi Continu</h2>
                    <p className={styles.text}>Une fois que votre stratégie de référencement est en place, il est essentiel de la surveiller et de l'ajuster en fonction des tendances du marché. Mon service d'analyse et de suivi continu vous fournit des rapports détaillés sur les performances de votre site ou de votre application. En utilisant des outils avancés d'analyse de trafic, j'identie les opportunités d'optimisation et veille à ce que votre présence en ligne reste compétitive, qu'il s'agisse d'un marché local, national ou international.
                    </p>
                </div>

            </animated.div>
        </div>
    );
}

export default Referencement;
