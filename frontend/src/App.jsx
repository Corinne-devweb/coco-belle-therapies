// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

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
            <Route
              path="/"
              element={
                <div
                  style={{
                    padding: "3rem 1rem",
                    textAlign: "center",
                    minHeight: "70vh",
                  }}
                >
                  <h1>Bienvenue sur Coco Belle Therapies</h1>
                  <p>Accompagnement TDAH et Hypnose thérapeutique</p>
                  <p style={{ marginTop: "2rem", color: "#555" }}>
                    Le site est en cours de développement...
                  </p>
                </div>
              }
            />
          </Routes>
        </main>

        {/* Footer temporaire */}
        <footer
          style={{
            padding: "2rem",
            background: "#1a1a1a",
            color: "white",
            textAlign: "center",
          }}
        >
          <p>© 2025 Coco Belle Therapies - Tous droits réservés</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
