import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Bot, ArrowRight, Shield, Zap, Brain, Code2 } from "lucide-react";
import { aboutValues } from "../data/index.js";

const iconMap = { Shield, Zap, Brain, Code2 };

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" ref={ref} className="section about">
      <div className="about__glow" />

      <div className="container">
        <div className="about__grid">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag">
              <Bot size={12} /> Sobre a SynapseAI
            </div>
            <h2 className="about__title">
              Engenheiros que
              <br />
              <span>entendem negócio</span>
            </h2>
            <p className="about__text">
              Somos uma equipe multidisciplinar — engenheiros de software, cientistas de
              dados e especialistas em IA — unidos pela obsessão em fazer tecnologia
              complexa funcionar de forma simples.
            </p>
            <p className="about__text">
              Fundada em 2021, a SynapseAI nasceu da frustração com projetos de IA que
              nunca saíam do POC. Hoje entregamos sistemas em produção, com SLA, com
              documentação, e com o cliente capaz de operar e evoluir o que criamos.
            </p>
            <a href="#contato" className="about__cta">
              Conhecer a equipe <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="about__values"
          >
            {aboutValues.map((v, i) => {
              const Icon = iconMap[v.iconName];
              return (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="about__value"
                >
                  <div className="about__value-icon">
                    <Icon size={16} strokeWidth={1.8} />
                  </div>
                  <h4 className="about__value-label">{v.label}</h4>
                  <p className="about__value-desc">{v.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
