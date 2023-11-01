// Services.jsx
import { motion } from 'framer-motion';
import styles from './Services.module.css';

const staggerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Services = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerVariant} className={styles.p8}>

      <motion.h1 variants={fadeVariant} className={`${styles.text4xl} ${styles.fontBold} ${styles.mb4}`}>
        Votre Partenaire Expert en SEO et Création de Sites Web
      </motion.h1>

      <motion.p variants={fadeVariant} className={`${styles.textXl} ${styles.mb6}`}>
        Vous recherchez une agence spécialisée dans la conception de sites internet sur mesure et le référencement efficace ? Ne cherchez pas plus loin ! Je mets mon expertise technique et mon expérience dans le digital au service de votre visibilité en ligne.
      </motion.p>

      <motion.h2 variants={fadeVariant} className={`${styles.text3xl} ${styles.fontSemibold} ${styles.mb4}`}>
        Mes Services
      </motion.h2>

      <motion.ul variants={staggerVariant} className={`${styles.listDisc} ${styles.pl8} ${styles.mb6}`}>
        <motion.li variants={fadeVariant} className={`${styles.mb3}`}>
          Visibilité de Sites Web Optimaux : Des sites web optimisés pour tous les supports de lecture : ordinateurs, tablettes et mobiles. Chaque site est conçu sur mesure pour répondre à vos besoins spécifiques.
        </motion.li>
        <motion.li variants={fadeVariant} className={`${styles.mb3}`}>
          SEO de Haut Niveau : Je maîtrise les dernières techniques de référencement pour propulser votre site en tête des résultats de recherche. j'utilise des méthodes telles que le net linking et les bonnes pratiques SEO pour garantir une visibilité maximale.
        </motion.li>
        <motion.li variants={fadeVariant} className={`${styles.mb3}`}>
          Applications Web Complexes : Que vous soyez une start-up ou un grand groupe, je développe des solutions robustes, spécifiquement adaptées à vos besoins. Chaque projet intègre une stratégie de référencement dès sa conception.
        </motion.li>
        <motion.li variants={fadeVariant} className={`${styles.mb3}`}>
          Applications iOS et Android : Besoin d'une présence sur les plateformes mobiles ? Je conçois des applications pour iOS et Android pour toucher un public encore plus large.
        </motion.li>
      </motion.ul>

      <motion.div className={`${styles.flex} ${styles.justifyCenter} ${styles.itemsCenter} ${styles.mxAuto} ${styles.mb4}`}>
        <motion.svg
          whileHover={{ scale: 1.1 }}
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 3
          }}
          className={`${styles.w8} ${styles.h8} ${styles.mr3} ${styles.textPurple600}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 010 4m-6-8v2m0-2a2 2 0 100 4m0-4a2 2 0 010 4m0 5v9m0-9a2 2 0 100 4m0-4a2 2 0 010 4m6-3.965V18m0-13.965A2 2 0 0114 6a2 2 0 012 2v9.03a2 2 0 11-2 0V8a2 2 0 10-2-2zm-6 0V18m0-13.965A2 2 0 007 6a2 2 0 00-2 2v9.03a2 2 0 102 0V8a2 2 0 112-2z" />
        </motion.svg>
        <h3 className={`${styles.text2xl} ${styles.fontSemibold}`}>Ma Spécialité</h3>
      </motion.div>

      <p className={`${styles.textXl} ${styles.mb6}`}>En tant qu’expert SEO, je mets en œuvre l’expérience et le savoir-faire pour vous offrir des résultats concrets.</p>
      <motion.div className={`${styles.flex} ${styles.justifyCenter} ${styles.itemsCenter} ${styles.mxAuto} ${styles.mb4}`}>
        <motion.svg
          whileHover={{ scale: 1.1 }}
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 3
          }}
          className={`${styles.w8} ${styles.h8} ${styles.mr3} ${styles.textGreen600}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </motion.svg>
        <h3 className={`${styles.text2xl} ${styles.fontSemibold}`}>Outils de Référence</h3>
      </motion.div>

      <p className={`${styles.textXl} ${styles.mb6}`}>J’utilise des outils de renom tels que MajesticSEO, YoastSEO, SEMrush et bien d'autres pour maximiser l'impact de nos stratégies.</p>

      <motion.div className={`${styles.flex} ${styles.justifyCenter} ${styles.itemsCenter} ${styles.mxAuto} ${styles.mb4}`}>
        <motion.svg
          whileHover={{ scale: 1.1 }}
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 3
          }}
          className={`${styles.w8} ${styles.h8} ${styles.mr3} ${styles.textBlue600}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </motion.svg>
        <h3 className={`${styles.text2xl} ${styles.fontSemibold}`}>Mes Prestations :</h3>
      </motion.div>

      <p className={`${styles.textXl} ${styles.mb6}`}>Bénéficiez des méthodes les plus récentes et efficaces en SEO.</p>
      <ul>
        <li className={`${styles.mb3}`}>
          <strong>Analyse</strong> : J'évalue vos besoins et étudie votre positionnement actuel sur le web. Cette phase d'analyse me permet de définir les axes d'amélioration.<br/>
          <a href="/prestations/analyse" className={`${styles.textBlue800} ${styles.hoverUnderline} ${styles.hoverTextBlue950} ${styles.transitionColors}`}>
            en savoir plus
          </a>
        </li>
        <li className={`${styles.mb3}`}>
          <strong>Stratégie</strong> : Une fois l'analyse effectuée, j'établis une stratégie sur mesure. Cette feuille de route est élaborée pour répondre précisément à vos objectifs.<br/>
          <a href="/prestations/stratégie" className={`${styles.textBlue800} ${styles.hoverUnderline} ${styles.hoverTextBlue950} ${styles.transitionColors}`}>
            en savoir plus
          </a>
        </li>
        <li className={`${styles.mb3}`}>
          <strong>Opérationnel</strong> : Je me charge de la mise en œuvre des actions SEO prévues : optimisation on-page, améliorations techniques, etc.<br/>
          <a href="/prestations/opérationel" className={`${styles.textBlue800} ${styles.hoverUnderline} ${styles.hoverTextBlue950} ${styles.transitionColors}`}>
            en savoir plus
          </a>
        </li>
        <li className={`${styles.mb3}`}>
          <strong>Technique</strong> : Outre le SEO on-page, la technique est au cœur de mes préoccupations. Vitesse de chargement, adaptabilité mobile, structure du site : tout est peaufiné pour plaire aux moteurs de recherche.<br/>
          <a href="/prestations/technique" className={`${styles.textBlue800} ${styles.hoverUnderline} ${styles.hoverTextBlue950} ${styles.transitionColors}`}>
            en savoir plus
          </a>
        </li>
        <li className={`${styles.mb3}`}>
          <strong>Contenus</strong> : Le contenu est roi ! Je veille à ce qu'il soit de qualité, optimisé SEO, et qu'il apporte une réelle valeur ajoutée à vos utilisateurs.<br/>
          <a href="/prestations/contenus" className={`${styles.textBlue800} ${styles.hoverUnderline} ${styles.hoverTextBlue950} ${styles.transitionColors}`}>
            en savoir plus
          </a>
        </li>
        <li className={`${styles.mb3}`}>
          <strong>Backlink</strong> : Je mets en place une stratégie de netlinking solide, pour renforcer votre autorité sur le web.<br/>
          <a href="/prestations/backlink" className={`${styles.textBlue800} ${styles.hoverUnderline} ${styles.hoverTextBlue950} ${styles.transitionColors}`}>
            en savoir plus
          </a>
        </li>
      </ul>

      <motion.p variants={fadeVariant} className={`${styles.textXl} ${styles.mb6}`}>
        Vous souhaitez propulser votre présence en ligne et atteindre les sommets des résultats de recherche ? Contactez Aadvarks Digital dès aujourd'hui et découvrez comment je peut faire décoller votre visibilité en ligne.
      </motion.p>

      <motion.a href="/contact" whileHover={{ scale: 1.05 }} className={`${styles.block} ${styles.mt6} ${styles.textCenter} ${styles.p4} ${styles.bgBlue900} ${styles.hoverBgBlue950} ${styles.transitionColors} ${styles.textWhite} ${styles.rounded}`}>
        Contactez-moi
      </motion.a>
      <br/>
      <h3 className={`${styles.text2xl} ${styles.fontSemibold} ${styles.mb4}`}>Accompagnement Personnalisé</h3>
      <p className={`${styles.textXl} ${styles.mb6}`}>
        Je crois en l'importance de l'écoute et de la compréhension pour la réussite de votre projet. C'est pourquoi je vous offre un accompagnement complet, avec des méthodologies et des outils sur mesure pour une communication efficace et transparente.
      </p>

    </motion.div>
  );
}

export default Services;
