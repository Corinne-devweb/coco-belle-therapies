// src/pages/Account/Account.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Account.scss";

const Account = () => {
  const [activeTab, setActiveTab] = useState("appointments");
  const [messageForm, setMessageForm] = useState({
    subject: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);

  // SIMULATION DE DONNÉES - TODO : remplacer par de vraies données d'API après
  const user = {
    firstName: "Marie",
    lastName: "Dupont",
    email: "marie.dupont@exemple.com",
    phone: "+33 6 12 34 56 78",
    memberSince: "15 septembre 2025",
  };

  const upcomingAppointments = [
    {
      id: 1,
      date: "2026-01-18",
      time: "14:00",
      service: "Accompagnement TDAH (ACT)",
      duration: "50 minutes",
      status: "confirmé",
      meetLink: "https://meet.google.com/abc-defg-hij",
    },
    {
      id: 2,
      date: "2026-01-25",
      time: "10:00",
      service: "Hypnothérapie Clinique",
      duration: "50 minutes",
      status: "confirmé",
      meetLink: "https://meet.google.com/xyz-abcd-efg",
    },
  ];

  const pastAppointments = [
    {
      id: 3,
      date: "2026-01-08",
      time: "15:00",
      service: "Consultation gratuite",
      duration: "20 minutes",
      status: "complété",
      hasReport: true,
    },
    {
      id: 4,
      date: "2025-12-20",
      time: "14:00",
      service: "Accompagnement TDAH (ACT)",
      duration: "50 minutes",
      status: "complété",
      hasReport: true,
    },
    {
      id: 5,
      date: "2025-12-15",
      time: "16:00",
      service: "Accompagnement TDAH (ACT)",
      duration: "50 minutes",
      status: "complété",
      hasReport: false,
    },
  ];

  const sessionReports = [
    {
      id: 1,
      appointmentId: 4,
      date: "2025-12-20",
      service: "Accompagnement TDAH (ACT)",
      summary:
        "Session axée sur la gestion des émotions et l'acceptation des pensées difficiles.",
      objectives: [
        "Identifier les déclencheurs émotionnels",
        "Pratiquer la défusion cognitive",
        "Établir des valeurs personnelles",
      ],
      progress:
        "Bonne compréhension des concepts ACT. Engagement actif dans les exercices.",
      homework:
        "Tenir un journal des pensées pendant 1 semaine. Pratiquer l'exercice de respiration 5 minutes par jour.",
      nextSession:
        "Nous travaillerons sur l'engagement dans l'action alignée avec vos valeurs.",
    },
    {
      id: 2,
      appointmentId: 3,
      date: "2026-01-08",
      service: "Consultation gratuite",
      summary:
        "Première rencontre pour faire connaissance et comprendre vos besoins.",
      objectives: [
        "Évaluation initiale des besoins",
        "Présentation de l'approche ACT",
        "Établir les objectifs thérapeutiques",
      ],
      progress:
        "Excellente ouverture et motivation pour le travail thérapeutique.",
      homework:
        "Réfléchir aux situations où le TDAH impacte le plus votre quotidien.",
      nextSession:
        "Nous commencerons à travailler sur la régulation émotionnelle.",
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleMessageChange = (e) => {
    const { name, value } = e.target;
    setMessageForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMessageSubmit = async (e) => {
    e.preventDefault();

    // TODO: Remplacer par API d'envoi d'email
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setMessageSent(true);
    setMessageForm({ subject: "", message: "" });

    setTimeout(() => {
      setMessageSent(false);
    }, 5000);
  };

  return (
    <div className="account">
      {/* Hero Section */}
      <section className="account-hero">
        <div className="account-hero__overlay"></div>
        <div className="container">
          <div className="account-hero__content">
            <h1 className="account-hero__title">Mon Compte</h1>
            <p className="account-hero__subtitle">
              Bienvenue {user.firstName} !
            </p>
          </div>
        </div>
      </section>

      {/* Account Content */}
      <section className="account-content">
        <div className="container">
          <div className="account-layout">
            {/* Sidebar */}
            <aside className="account-sidebar">
              <div className="user-card">
                <div className="user-card__avatar">
                  {user.firstName.charAt(0)}
                  {user.lastName.charAt(0)}
                </div>
                <h3 className="user-card__name">
                  {user.firstName} {user.lastName}
                </h3>
                <p className="user-card__email">{user.email}</p>
                <p className="user-card__info">
                  <span className="user-card__icon">📅</span>
                  Membre depuis {user.memberSince}
                </p>
              </div>

              <nav className="account-nav">
                <button
                  className={`account-nav__item ${
                    activeTab === "appointments" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("appointments")}
                >
                  <span className="account-nav__icon">📅</span>
                  <span>Mes rendez-vous</span>
                </button>
                <button
                  className={`account-nav__item ${
                    activeTab === "reports" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("reports")}
                >
                  <span className="account-nav__icon">📝</span>
                  <span>Comptes rendus</span>
                </button>
                <button
                  className={`account-nav__item ${
                    activeTab === "contact" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("contact")}
                >
                  <span className="account-nav__icon">💬</span>
                  <span>Contacter</span>
                </button>
              </nav>

              <div className="sidebar-actions">
                <Link to="/rendez-vous" className="btn btn--primary btn--block">
                  Nouveau rendez-vous
                </Link>
                <button
                  className="btn btn--outline btn--block"
                  onClick={() => {
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("userEmail");
                    window.location.href = "/connexion";
                  }}
                >
                  Déconnexion
                </button>
              </div>
            </aside>

            {/* Main Content */}
            <main className="account-main">
              {/* Tab: Appointments */}
              {activeTab === "appointments" && (
                <div className="appointments-section">
                  <h2 className="section-title">Mes rendez-vous</h2>

                  {/* Upcoming Appointments */}
                  <div className="appointments-group">
                    <h3 className="appointments-group__title">
                      <span className="appointments-group__icon">📅</span>
                      Rendez-vous à venir ({upcomingAppointments.length})
                    </h3>

                    {upcomingAppointments.length > 0 ? (
                      <div className="appointments-list">
                        {upcomingAppointments.map((appointment) => (
                          <div
                            key={appointment.id}
                            className="appointment-card upcoming"
                          >
                            <div className="appointment-card__header">
                              <div className="appointment-card__date">
                                <span className="date-day">
                                  {new Date(
                                    appointment.date
                                  ).toLocaleDateString("fr-FR", {
                                    day: "numeric",
                                  })}
                                </span>
                                <span className="date-month">
                                  {new Date(
                                    appointment.date
                                  ).toLocaleDateString("fr-FR", {
                                    month: "short",
                                  })}
                                </span>
                              </div>
                              <div className="appointment-card__info">
                                <h4>{appointment.service}</h4>
                                <p className="appointment-card__time">
                                  <span className="icon">🕐</span>
                                  {appointment.time} • {appointment.duration}
                                </p>
                                <span className="status-badge status-badge--confirmed">
                                  {appointment.status}
                                </span>
                              </div>
                            </div>
                            <div className="appointment-card__actions">
                              <a
                                href={appointment.meetLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--primary btn--small"
                              >
                                Rejoindre la session
                              </a>
                              <button className="btn btn--outline btn--small">
                                Modifier
                              </button>
                              <button className="btn btn--outline-danger btn--small">
                                Annuler
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="empty-state">
                        <p>Vous n'avez aucun rendez-vous à venir.</p>
                        <Link to="/rendez-vous" className="btn btn--primary">
                          Prendre rendez-vous
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Past Appointments */}
                  <div className="appointments-group">
                    <h3 className="appointments-group__title">
                      <span className="appointments-group__icon">✓</span>
                      Rendez-vous passés ({pastAppointments.length})
                    </h3>

                    <div className="appointments-list">
                      {pastAppointments.map((appointment) => (
                        <div
                          key={appointment.id}
                          className="appointment-card past"
                        >
                          <div className="appointment-card__header">
                            <div className="appointment-card__date">
                              <span className="date-day">
                                {new Date(appointment.date).toLocaleDateString(
                                  "fr-FR",
                                  { day: "numeric" }
                                )}
                              </span>
                              <span className="date-month">
                                {new Date(appointment.date).toLocaleDateString(
                                  "fr-FR",
                                  { month: "short" }
                                )}
                              </span>
                            </div>
                            <div className="appointment-card__info">
                              <h4>{appointment.service}</h4>
                              <p className="appointment-card__time">
                                <span className="icon">🕐</span>
                                {appointment.time} • {appointment.duration}
                              </p>
                              <span className="status-badge status-badge--completed">
                                {appointment.status}
                              </span>
                            </div>
                          </div>
                          {appointment.hasReport && (
                            <div className="appointment-card__actions">
                              <button
                                className="btn btn--outline btn--small"
                                onClick={() => setActiveTab("reports")}
                              >
                                Voir le compte rendu
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Reports */}
              {activeTab === "reports" && (
                <div className="reports-section">
                  <h2 className="section-title">Comptes rendus de sessions</h2>

                  {sessionReports.length > 0 ? (
                    <div className="reports-list">
                      {sessionReports.map((report) => (
                        <div key={report.id} className="report-card">
                          <div className="report-card__header">
                            <div className="report-card__date">
                              <span className="icon">📅</span>
                              {formatDate(report.date)}
                            </div>
                            <h3 className="report-card__service">
                              {report.service}
                            </h3>
                          </div>

                          <div className="report-card__content">
                            <div className="report-section">
                              <h4>Résumé de la session</h4>
                              <p>{report.summary}</p>
                            </div>

                            <div className="report-section">
                              <h4>Objectifs de la session</h4>
                              <ul className="report-list">
                                {report.objectives.map((objective, index) => (
                                  <li key={index}>
                                    <span className="icon">✓</span>
                                    {objective}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="report-section">
                              <h4>Progrès observés</h4>
                              <p>{report.progress}</p>
                            </div>

                            <div className="report-section">
                              <h4>Exercices à faire</h4>
                              <p>{report.homework}</p>
                            </div>

                            <div className="report-section report-section--highlight">
                              <h4>Prochaine session</h4>
                              <p>{report.nextSession}</p>
                            </div>
                          </div>

                          <div className="report-card__footer">
                            <button className="btn btn--outline btn--small">
                              Télécharger PDF
                            </button>
                            <button className="btn btn--outline btn--small">
                              Imprimer
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="empty-state">
                      <p>Aucun compte rendu disponible pour le moment.</p>
                      <p className="empty-state__subtext">
                        Les comptes rendus apparaîtront ici après vos sessions.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Tab: Contact */}
              {activeTab === "contact" && (
                <div className="contact-section">
                  <h2 className="section-title">
                    Contacter Coco Belle Therapies
                  </h2>

                  <div className="contact-info-cards">
                    <div className="contact-info-card">
                      <div className="contact-info-card__icon">📧</div>
                      <h3>Email</h3>
                      <p>info@cocobelletherapies.com</p>
                      <p className="contact-info-card__note">
                        Réponse sous 24-48h
                      </p>
                    </div>
                    <div className="contact-info-card">
                      <div className="contact-info-card__icon">📱</div>
                      <h3>WhatsApp</h3>
                      <p>+44 7801 766737</p>

                      <a
                        href="https://wa.me/447801766737"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--outline btn--small"
                      >
                        Ouvrir WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="message-form-container">
                    <h3>Envoyer un message</h3>

                    {messageSent && (
                      <div className="alert alert--success">
                        <span className="alert__icon">✓</span>
                        <span>Votre message a été envoyé avec succès !</span>
                      </div>
                    )}

                    <form
                      onSubmit={handleMessageSubmit}
                      className="message-form"
                    >
                      <div className="form-group">
                        <label htmlFor="subject" className="form-label">
                          Sujet <span className="required">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={messageForm.subject}
                          onChange={handleMessageChange}
                          className="form-input"
                          required
                        >
                          <option value="">Choisissez un sujet</option>
                          <option value="appointment">
                            Question sur un rendez-vous
                          </option>
                          <option value="report">
                            Question sur un compte rendu
                          </option>
                          <option value="payment">
                            Question sur le paiement
                          </option>
                          <option value="other">Autre question</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="message" className="form-label">
                          Message <span className="required">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={messageForm.message}
                          onChange={handleMessageChange}
                          className="form-textarea"
                          rows="6"
                          placeholder="Écrivez votre message ici..."
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="btn btn--primary btn--large"
                      >
                        Envoyer le message
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
