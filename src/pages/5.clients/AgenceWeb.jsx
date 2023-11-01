import React from 'react';
import styles from './AgenceWeb.module.css';

function AgenceWeb() {
    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>Expert SEO pour les Agences Web</h1>
            <p className={styles.paragraph}>
                Bienvenue chez Aadvarks Digital, votre partenaire SEO pour optimiser les projets de vos clients.
                Je sais à quel point il est crucial pour les agences web d'offrir des sites performants, et
                je suis ici pour garantir que ces sites brillent également en matière de SEO.
            </p>

            <h2 className={styles.subTitle}>Pourquoi collaborer avec Aadvarks Digital ?</h2>
            <ul className={styles.featuresList}>
                <li><strong>Complémentarité : </strong>Concentrez-vous sur le design et le développement, et laissez-moi prendre en main le SEO.</li>
                <li><strong>Expertise SEO reconnue : </strong>Forts de mon expérience, j'emploie des stratégies à la pointe pour assurer la visibilité de vos projets.</li>
                <li><strong>Communication fluide : </strong>Je travaille comme une extension de votre équipe, garantissant une communication transparente et efficace à chaque étape.</li>
            </ul>

            <h2 className={styles.subTitle}>Mes Services dédiés aux Agences Web</h2>
            <ul className={styles.benefitsList}>
                <li><strong>Consultation SEO pré-lancement : </strong>Assurez-vous que les sites que vous développez sont optimisés pour le SEO dès le départ.</li>
                <li><strong>Optimisation technique : </strong>De la vitesse du site à la structure des URL, je m'assure que tout est en place pour plaire aux moteurs de recherche.</li>
                <li><strong>Stratégie de Contenu pour vos clients : </strong>J'élabore une stratégie de contenu qui se traduit par un trafic de qualité et une conversion accrue.</li>
                <li><strong>Formation SEO : </strong>Offrez à vos équipes une formation pour qu'elles intègrent les meilleures pratiques SEO dans leur travail quotidien.</li>
            </ul>

            <div className={styles.testimonials}>
                <p><i>"Travailler avec Aadvarks Digital a été un game changer pour nous. Nous pouvons maintenant offrir un package complet à nos clients sans nous soucier du SEO."</i> <br />- Stéphane R., Directeur d'agence web</p>
                <p><i>"Leur expertise SEO a fait des merveilles pour les sites que nous avons développés. Une collaboration fructueuse à chaque fois !"</i><br /> - Emilie P., Chef de projet digital</p>
            </div>

            <div className={styles.cta}>
                <p>Élevons ensemble les standards du web !</p>
                <p>Prêt à offrir à vos clients une solution web complète incluant une expertise SEO de premier ordre ? Contactez Aadvarks Digital dès aujourd'hui pour discuter d'un partenariat.</p>
                <button onClick={() => window.location.href = '/contact'}>Contactez-moi</button>
            </div>
        </div>
    );
}

export default AgenceWeb;
