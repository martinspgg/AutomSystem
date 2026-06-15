import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Zap, ExternalLink } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-card__image-wrap">
        <img
          src={`https://images.unsplash.com/${project.image}?w=600&h=400&fit=crop&auto=format`}
          alt={project.name}
        />
        <div className="project-card__gradient" />

        <div className="project-card__year">{project.year}</div>

        <div
          className="project-card__category"
          style={{
            backgroundColor: `${project.accent}22`,
            color: project.accent,
            border: `1px solid ${project.accent}40`,
          }}
        >
          {project.category}
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-card__header">
          <h3 className="project-card__name">{project.name}</h3>
          <motion.div
            className="project-card__ext"
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 6 }}
            transition={{ duration: 0.2 }}
          >
            <ExternalLink size={16} />
          </motion.div>
        </div>

        <p className="project-card__desc">{project.description}</p>

        <div
          className="project-card__result"
          style={{ backgroundColor: `${project.accent}15`, color: project.accent }}
        >
          <Zap size={12} />
          {project.result}
        </div>

        <div className="project-card__tags">
          {project.tech.map((t) => (
            <span key={t} className="project-card__tag">{t}</span>
          ))}
        </div>
      </div>

      <motion.div
        className="project-card__line"
        animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
          transformOrigin: "center",
        }}
      />
    </motion.div>
  );
}
