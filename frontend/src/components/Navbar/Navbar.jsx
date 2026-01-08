// src/components/Navbar/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu au clic extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Gestion du clavier (Escape pour fermer)
  const handleKeyDown = (e) => {
    if (e.key === "Escape" && menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <nav
      ref={navRef}
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      role="navigation"
      aria-label="Navigation principale"
      onKeyDown={handleKeyDown}
    >
      <div className="navbar__container container">
        {/* Logo */}
        <Link
          to="/"
          className="navbar__logo"
          aria-label="Coco Belle Therapies - Retour à l'accueil"
        >
          <img
            src="/logo.png"
            alt="Logo Coco Belle Therapies"
            className="navbar__logo-img"
          />
        </Link>

        {/* Menu burger - Mobile */}
        <button
          className="navbar__burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          type="button"
        >
          <span className="navbar__burger-line"></span>
          <span className="navbar__burger-line"></span>
          <span className="navbar__burger-line"></span>
          <span className="visually-hidden">Menu</span>
        </button>

        {/* Menu navigation */}
        <ul
          id="navbar-menu"
          className={`navbar__menu ${menuOpen ? "navbar__menu--open" : ""}`}
          role="menubar"
        >
          <li role="none">
            <NavLink
              to="/"
              role="menuitem"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Accueil
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              to="/qui-suis-je"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              Qui suis-je
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              to="/mes-approches"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              Mes approches
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              to="/tdah"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              TDAH
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              to="/hypnose"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              Hypnose
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              to="/blog"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              to="/contact"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Actions - Boutons à droite */}
        <div className="navbar__actions">
          <Link
            to="/rendez-vous"
            className="navbar__cta"
            aria-label="Prendre rendez-vous avec un thérapeute"
          >
            Prendre RDV
          </Link>
          <Link
            to="/mon-compte"
            className="navbar__account"
            aria-label="Accéder à mon compte"
            S
          >
            <i className="fas fa-user" aria-hidden="true"></i>
            <span className="visually-hidden">Mon compte</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
