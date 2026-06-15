import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Zap, Mail, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "Twitter" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contato" ref={ref} className="section section--dark contact">
      <div className="container--narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="contact__icon">
            <Zap size={28} />
          </div>

          <h2 className="contact__title">
            Pronto para
            <br />
            <span>automatizar?</span>
          </h2>
          <p className="contact__desc">
            Se interessou? Entre em contato e nos conte sobre seu projeto. Retornaremos em até 24 horas.
          </p>

          <div className="contact__actions">
            <a href="mailto:contato@automsystem.com.br" className="contact__btn-primary">
              <Mail size={16} />
              contato@automsystem.com.br
            </a>
            <a href="https://wa.me/5511999999999" className="contact__btn-secondary">
              WhatsApp direto <ArrowRight size={16} className="icon" />
            </a>
          </div>

          <div className="contact__socials">
            {socialLinks.map(({ icon: Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="contact__social">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
