"use client";

import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/site";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <motion.article className={`project-card ${index === 0 ? "featured-project" : ""}`} initial={{ opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: .7, delay: index * .1 }}>
    <div className="project-image-wrap"><Image className="project-image" src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 800px) 100vw, 62vw" /><span className="project-index">0{index + 1}</span><a className="project-arrow" href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live site`}><ArrowUpRight /></a></div>
    <div className="project-info"><div><p className="mono project-category">{project.category}</p><h3>{project.title}</h3></div><span className="mono project-year">{project.year}</span></div>
    <p className="project-description">{project.description}</p><div className="project-bottom"><div className="tech-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><a className="github-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source on GitHub`}><Github size={15} /> Source</a></div>
  </motion.article>;
}
