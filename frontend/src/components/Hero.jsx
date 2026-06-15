import { motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { stats } from "../data/index.js";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__grid" />
      <div className="hero__glow-1" />
      <div className="hero__glow-2" />

      <div className="hero__content">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero__badge"
        >
          <span className="hero__badge-dot" />
          Automação com IA · Software · Dados
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero__title"
        >
          Transformamos
          <br />
          <span>processos em</span>
          <br />
          inteligência
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero__subtitle"
        >
          Desenvolvemos automações com IA, sistemas inteligentes e software moderno
          que realmente funcionam — do MVP ao produto escalável.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hero__actions"
        >
          <a href="#projetos" className="hero__btn-primary">
            Ver projetos <ArrowRight size={16} />
          </a>
          <a href="#contato" className="hero__btn-secondary">
            Falar com a equipe <ChevronRight size={16} className="icon" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="hero__stats"
        >
          {stats.map((s) => (
            <div key={s.label} className="hero__stat">
              <div className="hero__stat-value">
                {s.value}<span>{s.suffix}</span>
              </div>
              <div className="hero__stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
