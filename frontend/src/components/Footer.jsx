import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <Zap size={12} strokeWidth={2.5} />
          </div>
          <span className="footer__brand-name">
            Synapse<em>AI</em>
          </span>
        </div>
        <p className="footer__copy">© 2024 SynapseAI · Todos os direitos reservados</p>
        <div className="footer__links">
          <a href="#" className="footer__link">Privacidade</a>
          <a href="#" className="footer__link">Termos</a>
        </div>
      </div>
    </footer>
  );
}
