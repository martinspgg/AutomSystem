import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Bot, Brain, BarChart3, Workflow, Code2 } from "lucide-react";
import { services } from "../data/index.js";

const iconMap = { Bot, Brain, BarChart3, Workflow };

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicos" ref={ref} className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="services__header"
        >
          <div className="section-tag">
            <Code2 size={12} /> O que fazemos
          </div>
          <h2 className="section-title">
            Soluções que
            <br />
            <span>geram resultado real</span>
          </h2>
          <p className="section-desc">
            Combinamos expertise técnica profunda com foco pragmático em atender e solucionar problemas. Utilizando ferramentas que melhoram a eficiência e o desempenho dos nossos clientes.
          </p>
        </motion.div>

        <div className="services__grid">
          {services.map((s, i) => {
            const Icon = iconMap[s.iconName];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="service-card"
              >
                <div
                  className="service-card__overlay"
                  style={{
                    background: `radial-gradient(400px circle at 60% 50%, ${s.color}08, transparent)`,
                  }}
                />
                <div
                  className="service-card__icon"
                  style={{ backgroundColor: `${s.color}18` }}
                >
                  <Icon size={20} style={{ color: s.color }} strokeWidth={1.8} />
                </div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
