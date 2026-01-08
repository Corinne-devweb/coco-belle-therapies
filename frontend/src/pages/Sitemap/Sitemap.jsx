// src/pages/Sitemap/Sitemap.jsx
import { Link } from "react-router-dom";

const Sitemap = () => {
  const siteStructure = [
    {
      title: "🏠 Accueil",
      path: "/",
      description: "Page d'accueil du site",
    },
    {
      title: "👤 À propos",
      path: null,
      children: [
        {
          title: "Qui suis-je",
          path: "/qui-suis-je",
          description: "Présentation de la thérapeute",
        },
        {
          title: "Mes approches",
          path: "/mes-approches",
          description: "Méthodologies et approches thérapeutiques",
        },
      ],
    },
    {
      title: "🧠 Services",
      path: null,
      children: [
        {
          title: "Accompagnement TDAH",
          path: "/tdah",
          description: "Prise en charge et accompagnement du TDAH",
        },
        {
          title: "Hypnose thérapeutique",
          path: "/hypnose",
          description: "Séances d'hypnose pour le bien-être",
        },
      ],
    },
    {
      title: "📝 Ressources",
      path: null,
      children: [
        {
          title: "Blog",
          path: "/blog",
          description: "Articles et actualités",
        },
      ],
    },
    {
      title: "📞 Contact & Rendez-vous",
      path: null,
      children: [
        {
          title: "Contact",
          path: "/contact",
          description: "Formulaire de contact",
        },
        {
          title: "Prendre rendez-vous",
          path: "/rendez-vous",
          description: "Réservation en ligne",
        },
      ],
    },
    {
      title: "👤 Espace personnel",
      path: null,
      children: [
        {
          title: "Mon compte",
          path: "/mon-compte",
          description: "Gestion de votre compte",
        },
      ],
    },
    {
      title: "⚖️ Informations légales",
      path: null,
      children: [
        {
          title: "Mentions légales",
          path: "/mentions-legales",
          description: "Informations légales sur le site",
        },
        {
          title: "Politique de confidentialité",
          path: "/politique-confidentialite",
          description: "Protection de vos données personnelles (RGPD)",
        },
        {
          title: "Gestion des cookies",
          path: "/gestion-cookies",
          description: "Paramétrage et informations sur les cookies",
        },
        {
          title: "Plan du site",
          path: "/plan-du-site",
          description: "Navigation complète du site",
        },
      ],
    },
  ];

  return (
    <div className="legal-page">
      <header className="legal-page__header">
        <h1 className="legal-page__title">Plan du Site</h1>
        <p className="legal-page__subtitle">
          Navigation complète - Dernière mise à jour :{" "}
          {new Date().toLocaleDateString("fr-FR")}
        </p>
      </header>

      {/* Introduction */}
      <div className="legal-page__info-box">
        <p>
          Retrouvez ici l'ensemble des pages du site{" "}
          <strong>Coco Belle Therapies</strong>
          pour faciliter votre navigation et accéder rapidement aux informations
          que vous recherchez.
        </p>
      </div>

      {/* Structure du site */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">Structure du site</h2>
        <div className="legal-page__section-content">
          {siteStructure.map((section, index) => (
            <div
              key={index}
              style={{
                marginBottom: "2.5rem",
                padding: "1.5rem",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
              }}
            >
              {/* Titre de section */}
              <h3
                style={{
                  fontSize: "1.3rem",
                  marginBottom: "1rem",
                  color: "#2A7A73",
                  fontWeight: "600",
                }}
              >
                {section.path ? (
                  <Link
                    to={section.path}
                    style={{
                      color: "#2A7A73",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    {section.title}
                    <span style={{ fontSize: "0.9rem" }}>→</span>
                  </Link>
                ) : (
                  section.title
                )}
              </h3>

              {/* Description si page unique */}
              {section.description && (
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#666",
                    marginBottom: "0",
                  }}
                >
                  {section.description}
                </p>
              )}

              {/* Sous-pages */}
              {section.children && (
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "1rem 0 0 0",
                  }}
                >
                  {section.children.map((child, childIndex) => (
                    <li
                      key={childIndex}
                      style={{
                        marginBottom: "1rem",
                        padding: "1rem",
                        backgroundColor: "white",
                        borderRadius: "4px",
                        border: "1px solid #e0e0e0",
                      }}
                    >
                      <Link
                        to={child.path}
                        style={{
                          textDecoration: "none",
                          display: "block",
                        }}
                      >
                        <strong
                          style={{
                            fontSize: "1.1rem",
                            color: "#2A7A73",
                            display: "block",
                            marginBottom: "0.25rem",
                          }}
                        >
                          {child.title}
                        </strong>
                        <span
                          style={{
                            fontSize: "0.9rem",
                            color: "#666",
                          }}
                        >
                          {child.description}
                        </span>
                        <span
                          style={{
                            display: "block",
                            marginTop: "0.5rem",
                            fontSize: "0.85rem",
                            color: "#999",
                            fontStyle: "italic",
                          }}
                        >
                          {child.path}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Statistiques du site */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">Statistiques du site</h2>
        <div className="legal-page__section-content">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
              marginTop: "1rem",
            }}
          >
            <div
              style={{
                padding: "1.5rem",
                backgroundColor: "#e1f0ef",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#2A7A73",
                }}
              >
                13
              </div>
              <div
                style={{ fontSize: "1rem", color: "#666", marginTop: "0.5rem" }}
              >
                Pages totales
              </div>
            </div>
            <div
              style={{
                padding: "1.5rem",
                backgroundColor: "#e1f0ef",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#2A7A73",
                }}
              >
                7
              </div>
              <div
                style={{ fontSize: "1rem", color: "#666", marginTop: "0.5rem" }}
              >
                Sections principales
              </div>
            </div>
            <div
              style={{
                padding: "1.5rem",
                backgroundColor: "#e1f0ef",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#2A7A73",
                }}
              >
                4
              </div>
              <div
                style={{ fontSize: "1rem", color: "#666", marginTop: "0.5rem" }}
              >
                Pages légales
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibilité */}
      <section className="legal-page__section">
        <h2 className="legal-page__section-title">Accessibilité</h2>
        <div className="legal-page__section-content">
          <p>
            Notre site est conçu pour être accessible au plus grand nombre. Nous
            nous efforçons de respecter les standards d'accessibilité WCAG 2.1
            niveau AA.
          </p>
          <ul className="legal-page__checklist">
            <li>Navigation au clavier</li>
            <li>Lecteurs d'écran compatibles</li>
            <li>Contrastes de couleurs adaptés</li>
            <li>Textes alternatifs sur les images</li>
            <li>Structure sémantique HTML</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <div className="legal-page__contact">
        <h3>Vous ne trouvez pas ce que vous cherchez ?</h3>
        <p>
          N'hésitez pas à nous contacter :
          <a href="mailto:info@cocobelletherapies.com">
            {" "}
            info@cocobelletherapies.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Sitemap;
