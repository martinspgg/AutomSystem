import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Zap, Menu, X } from "lucide-react";
import { navLinks } from "../data/index.js";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`nav${scrolled ? " nav--scrolled" : ""}`}
    >
      <div className="nav__inner">
        <a href="#" className="nav__brand">
          <div className="nav__logo-wrap">
            <Zap size={16} strokeWidth={2.5} />
          </div>
          <span className="nav__brand-name">
            Synapse<em>AI</em>
          </span>
        </a>

        <div className="nav__links">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
          <a href="#contato" className="nav__cta">
            Falar com a equipe
          </a>
        </div>

        <button className="nav__burger" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="nav__mobile"
        >
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="nav__mobile-link"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="nav__mobile-cta"
            onClick={() => setOpen(false)}
          >
            Falar com a equipe
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
