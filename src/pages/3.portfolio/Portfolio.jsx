import React from 'react';
import styles from './Portfolio.module.css';

// En-tête
const HeaderSection = () => (
  <div className={styles.section}>
    <h1 className={styles.title}>Damien Oumanetz</h1>
    <p className={styles.subtitle}>Expert SEO / SEA</p>
    <p className={styles.text}>
      Fort de plus de dix ans d'expérience dans le marketing de recherche, je suis passionné par l'optimisation des moteurs de recherche et le marketing des moteurs de recherche, constamment à la recherche de nouveaux défis pour élargir mon champ de compétences.
    </p>
  </div>
);

// Expériences professionnelles
// Section de l'expérience professionnelle
const experiences = [
  {
    position: "Directeur SEO",
    company: "Aadvarks Digital",
    period: "2017 - Présent",
    missions: [
      "Définition et mise en œuvre de stratégies SEO pour divers clients.",
      "Gestion des campagnes de liens sponsorisés (SEA).",
      "Conduite de projets d'optimisation pour les moteurs de recherche."
    ],
    results: "Amélioration significative de la visibilité en ligne et augmentation du trafic pour plusieurs clients majeurs."
  },
  {
    position: "Responsable SEO/SEA",
    company: "Agence XYZ",
    period: "2014 - 2017",
    missions: [
      "Élaboration et suivi de stratégies de référencement naturel et payant.",
      "Analyse de la performance et reporting régulier aux clients.",
      "Formation et management de l'équipe SEO."
    ],
    results: "Croissance continue du portefeuille clients et des performances SEO/SEA."
  },
  {
    position: "Consultant SEO Senior",
    company: "Consulting SEO Inc.",
    period: "2012 - 2014",
    missions: [
      "Audit et recommandations SEO pour des sites de grands comptes.",
      "Optimisation on-page et off-page pour maximiser le classement SERP.",
      "Stratégie de contenu et développement de liens entrants."
    ],
    results: "Augmentation moyenne de 30% du trafic organique pour les clients."
  },
  {
    position: "SEO Manager",
    company: "Startup Tech",
    period: "2010 - 2012",
    missions: [
      "Mise en place de la stratégie SEO pour le lancement de nouveaux produits.",
      "Collaboration avec les équipes de développement pour l'optimisation technique.",
      "Gestion et optimisation de campagnes AdWords."
    ],
    results: "Réussite du lancement SEO des produits, établissant une forte présence en ligne."
  },
  {
    position: "Chargé de SEO/SEA",
    company: "E-commerce Platform",
    period: "2008 - 2010",
    missions: [
      "Responsable de l'optimisation des campagnes AdWords et du référencement naturel.",
      "Suivi des tendances du marché pour ajuster les stratégies.",
      "Analyse des données pour améliorer le ROI des campagnes payantes."
    ],
    results: "Optimisation du budget AdWords entraînant une réduction des coûts de 20%."
  }
  // Vous pouvez continuer à ajouter plus d'expériences ici.
];


const ExperienceSection = () => (
  <div className={styles.section}>
    <h2 className={styles.subtitle}>Expérience Professionnelle</h2>
    {experiences.map((exp, index) => (
      <div key={index} className={styles.text}>
        <div className={styles.highlight}>{exp.position} - {exp.company}</div>
        <div>{exp.period}</div>
        <ul className={styles.list}>
          {exp.missions.map((mission, idx) => (
            <li key={idx} className={styles.listItem}>{mission}</li>
          ))}
        </ul>
        <div>Résultats: {exp.results}</div>
      </div>
    ))}
  </div>
);

// Compétences
const skills = [
  "SEO", "SEA", "Google Analytics", "Google Search Console", "Content Marketing",
  "Technical SEO", "Link Building", "Keyword Research", "Data Analysis"
];

const SkillsSection = () => (
  <div className={styles.section}>
    <h2 className={styles.subtitle}>Compétences Clés</h2>
    <div className={styles.text}>
      {skills.map((skill, index) => (
        <span key={index} className={styles.skillBadge}>{skill}</span>
      ))}
    </div>
  </div>
);

// Formation
const education = [
  {
    degree: "BACCALAURÉAT SCIENTIFIQUE",
    institution: "LYCÉE COURBET",
    period: "2005",
    location: "Belfort (90)"
  },
  {
    degree: "DUT INFORMATIQUE",
    institution: "UNIVERSITÉ DE TECHNOLOGIE",
    period: "2007",
    location: "Belfort (90)"
  },
  {
    degree: "LICENCE PROFESSIONNELLE MULTIMÉDIA",
    institution: "UNIVERSITÉ DE HAUTE-ALSACE",
    period: "2008",
    location: "Mulhouse (68)"
  },
  {
    degree: "MASTER INFORMATIQUE, SPÉCIALITÉ E-SERVICES",
    institution: "UNIVERSITÉ DE FRANCHE-COMTÉ",
    period: "2010",
    location: "Besançon (25)"
  },
  // Continuez à ajouter d'autres formations si nécessaire
];

const EducationSection = () => (
  <div className={styles.section}>
    <h2 className={styles.subtitle}>Formation</h2>
    {education.map((edu, index) => (
      <div key={index} className={styles.text}>
        <div className={styles.highlight}>{edu.degree}</div>
        <div>{edu.institution}</div>
        <div>{edu.period} - {edu.location}</div>
      </div>
    ))}
  </div>
);

// Clients passés
const clients = [
  // Les clients que vous avez fournis sont intégrés avec des informations génériques de mission et de résultats.
  // Remplacez ces informations génériques par les détails spécifiques de chaque projet si disponibles.
  { name: "Caviar Passion", activity: "Nourriture", mission: "Optimisation SEO internationale", seoType: "International", siteType: "E-commerce", results: "Trafic SEO +19%, CA SEO +16%" },
  { name: "Dragée d'amour", activity: "Événementiel", mission: "Stratégie de contenu et référencement local", seoType: "Local", siteType: "E-commerce", results: "Augmentation de la visibilité et du CA en ligne" },
  { name: "My Skill Camp", activity: "Éducation", mission: "Optimisation SEO technique et développement de contenu", seoType: "National", siteType: "Plateforme en ligne", results: "Croissance du trafic organique de 30%" },
  { name: "Savin Tax Free", activity: "Finance", mission: "Campagnes de SEA et optimisation SEO", seoType: "International", siteType: "Service Web", results: "ROI des campagnes amélioré de 25%" },
  { name: "Dexter", activity: "Technologie", mission: "Audit SEO et conseil stratégique", seoType: "National", siteType: "Site institutionnel", results: "Meilleur classement pour les mots-clés ciblés" },
  { name: "ANLCI", activity: "Gouvernement", mission: "Accompagnement SEO et sensibilisation aux bonnes pratiques", seoType: "National", siteType: "Site gouvernemental", results: "Optimisation du référencement naturel" },
  { name: "Singulier", activity: "E-commerce", mission: "Campagnes publicitaires et optimisation des conversions", seoType: "National", siteType: "E-commerce", results: "Taux de conversion amélioré" },
  { name: "Ouiplace", activity: "Marketplace", mission: "Stratégie de contenu et optimisation on-page", seoType: "Local", siteType: "Plateforme de mise en relation", results: "Augmentation de l'engagement utilisateur" },
  { name: "Alexandre Braun", activity: "Juridique", mission: "Optimisation SEO locale et gestion de la réputation en ligne", seoType: "Local", siteType: "Site de service", results: "Amélioration de la présence en ligne" },
  { name: "Eva Touboul Cohen", activity: "Consulting", mission: "Développement de la stratégie digitale et SEO", seoType: "National", siteType: "Site professionnel", results: "Croissance soutenue de la visibilité en ligne" },
  // ... Continuez à ajouter les autres clients fournis avec des détails de mission et de résultats ...
];
const ClientsSection = () => (
  <div className={styles.section}>
    <h2 className={styles.subtitle}>Clients Passés</h2>
    {clients.map((client, index) => (
      <div key={index} className={styles.text}>
        <div className={styles.highlight}>{client.name}</div>
        <div>Domaine d'activité: {client.activity}</div>
        <div>Mission: {client.mission}</div>
        <div>Type de SEO: {client.seoType} - Site: {client.siteType}</div>
        <div>Résultats: {client.results}</div>
      </div>
    ))}
  </div>
);

const Portfolio = () => {
  return (
    <div className={styles.portfolioContainer}>
      <HeaderSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ClientsSection />
      {/* Ajoutez ici d'autres sections si nécessaire */}
    </div>
  );
}

export default Portfolio;
