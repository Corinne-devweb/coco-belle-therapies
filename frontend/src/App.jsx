// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Skip link pour accessibilité */}
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>

        {/* Header temporaire */}
        <header
          style={{
            padding: "2rem",
            background: "#1a1a1a",
            color: "white",
            textAlign: "center",
          }}
        >
          <h1>Coco Belle Therapies</h1>
          <p>Site en construction...</p>
        </header>

        {/* Contenu principal */}
        <main
          id="main-content"
          style={{
            minHeight: "60vh",
            padding: "3rem 1rem",
            textAlign: "center",
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h2>Bienvenue sur Coco Belle Therapies</h2>
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
