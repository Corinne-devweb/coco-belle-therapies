// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Approaches from "./pages/Approaches/Approaches";
import ADHD from "./pages/ADHD/ADHD";
import Hypnotherapy from "./pages/Hypnotherapy/Hypnotherapy";
import Booking from "./pages/Booking/Booking";
import Account from "./pages/Account/Account";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Contact from "./pages/Contact/Contact";
import LegalNotice from "./pages/LegalNotice/LegalNotice";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy/CookiesPolicy";
import Sitemap from "./pages/Sitemap/Sitemap";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Skip link pour accessibilité */}
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>

        {/* Navbar */}
        <Navbar />

        {/* Contenu principal */}
        <main id="main-content" className="main-content">
          <Routes>
            {/* Page d'accueil */}
            <Route path="/" element={<Home />} />

            {/* Page Qui suis-je */}
            <Route path="/qui-suis-je" element={<About />} />

            {/* Page Mes approches */}
            <Route path="/mes-approches" element={<Approaches />} />

            {/* Page TDAH */}
            <Route path="/tdah" element={<ADHD />} />

            {/* Page Hypnose */}
            <Route path="/hypnose" element={<Hypnotherapy />} />

            {/* Page Rendez-vous */}
            <Route path="/rendez-vous" element={<Booking />} />

            {/* Page Mon Compte - PROTÉGÉE */}
            <Route
              path="/mon-compte"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />

            {/* Page Connexion */}
            <Route path="/connexion" element={<Login />} />

            {/* Page Inscription */}
            <Route path="/inscription" element={<Register />} />

            {/* Page Contact */}
            <Route path="/contact" element={<Contact />} />

            {/* Pages à créer */}
            <Route
              path="/blog"
              element={
                <div style={{ padding: "3rem 1rem", minHeight: "70vh" }}>
                  <h1>Blog</h1>
                  <p>Page en cours de construction...</p>
                </div>
              }
            />

            <Route
              path="/mot-de-passe-oublie"
              element={
                <div style={{ padding: "3rem 1rem", minHeight: "70vh" }}>
                  <h1>Mot de passe oublié</h1>
                  <p>Page en cours de construction...</p>
                </div>
              }
            />

            {/* Pages légales - TOUTES CRÉÉES */}
            <Route path="/mentions-legales" element={<LegalNotice />} />
            <Route
              path="/politique-confidentialite"
              element={<PrivacyPolicy />}
            />
            <Route path="/gestion-cookies" element={<CookiesPolicy />} />
            <Route path="/plan-du-site" element={<Sitemap />} />

            {/* Page 404 */}
            <Route
              path="*"
              element={
                <div
                  style={{
                    padding: "3rem 1rem",
                    minHeight: "70vh",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h1 style={{ fontSize: "4rem", color: "#2A7A73" }}>404</h1>
                  <h2>Page non trouvée</h2>
                  <p style={{ marginTop: "1rem" }}>
                    Désolé, la page que vous recherchez n'existe pas.
                  </p>

                  <a
                    href="/"
                    style={{
                      marginTop: "2rem",
                      padding: "0.75rem 1.5rem",
                      backgroundColor: "#2A7A73",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "4px",
                      fontWeight: "500",
                    }}
                  >
                    Retour à l'accueil
                  </a>
                </div>
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
