// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
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

            {/* Pages à créer */}
            <Route
              path="/qui-suis-je"
              element={
                <div style={{ padding: "3rem 1rem", minHeight: "70vh" }}>
                  <h1>Qui suis-je</h1>
                  <p>Page en cours de construction...</p>
                </div>
              }
            />

            <Route
              path="/mes-approches"
              element={
                <div style={{ padding: "3rem 1rem", minHeight: "70vh" }}>
                  <h1>Mes approches</h1>
                  <p>Page en cours de construction...</p>
                </div>
              }
            />

            <Route
              path="/tdah"
              element={
                <div style={{ padding: "3rem 1rem", minHeight: "70vh" }}>
                  <h1>TDAH</h1>
                  <p>Page en cours de construction...</p>
                </div>
              }
            />

            <Route
              path="/hypnose"
              element={
                <div style={{ padding: "3rem 1rem", minHeight: "70vh" }}>
                  <h1>Hypnose</h1>
                  <p>Page en cours de construction...</p>
                </div>
              }
            />

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
              path="/contact"
              element={
                <div style={{ padding: "3rem 1rem", minHeight: "70vh" }}>
                  <h1>Contact</h1>
                  <p>Page en cours de construction...</p>
                </div>
              }
            />

            <Route
              path="/rendez-vous"
              element={
                <div style={{ padding: "3rem 1rem", minHeight: "70vh" }}>
                  <h1>Prendre rendez-vous</h1>
                  <p>Page en cours de construction...</p>
                </div>
              }
            />

            <Route
              path="/mon-compte"
              element={
                <div style={{ padding: "3rem 1rem", minHeight: "70vh" }}>
                  <h1>Mon compte</h1>
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
