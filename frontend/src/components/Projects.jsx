import { Database } from "lucide-react";
import { projects } from "../data/index.js";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  return (
    <section id="projetos" className="section section--dark">
      <div className="container">
        <div className="projects__header">
          <div className="section-tag">
            <Database size={12} /> Trabalhos recentes
          </div>
          <h2 className="section-title">
            Projetos que
            <br />
            <span>entregamos</span>
          </h2>
          <p className="section-desc">
            Cada projeto com métricas reais, tecnologias escolhidas para durar e código
            que a equipe do cliente consegue manter.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
