"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { siteData } from "@/data/site";
import { MagneticButton, Reveal } from "./UI";

export function Hero() {
  const reduced = useReducedMotion();
  const words = siteData.hero.headline.split(" ");
  return <section className="hero section-pad" id="top" aria-labelledby="hero-heading">
    <div className="hero-grid-lines" aria-hidden="true" />
    <motion.p className="hero-eyebrow mono" initial={reduced ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>{siteData.hero.eyebrow}</motion.p>
    <h1 id="hero-heading" aria-label={siteData.hero.headline}>{words.map((word, index) => <motion.span key={`${word}-${index}`} initial={reduced ? false : { opacity: 0, y: 80, rotateX: -70 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ delay: 1.14 + index * .065, duration: .75 }} className={index === 2 || index === 5 ? "accent-word" : ""}>{word}&nbsp;</motion.span>)}</h1>
    <div className="hero-lower"><motion.div className="hero-profile" initial={reduced ? false : { opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.45, duration: .8 }}><div className="avatar-frame"><Image src={siteData.personal.avatar} alt={`Portrait of ${siteData.personal.name}`} fill priority sizes="(max-width: 700px) 180px, 250px" /></div><div className="orbit-copy mono"><span>{siteData.hero.orbitText}</span></div></motion.div><motion.div className="hero-copy" initial={reduced ? false : { opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.55 }}><p>{siteData.hero.subheadline}</p><div className="hero-actions"><MagneticButton href="#projects" className="button button-primary">{siteData.hero.ctaPrimary}<ArrowDown size={16} /></MagneticButton><MagneticButton href="#contact" className="button button-ghost">{siteData.hero.ctaSecondary}<ArrowUpRight size={16} /></MagneticButton></div></motion.div></div>
    <div className="hero-side mono"><span>SCROLL TO DISCOVER</span><i /></div>
  </section>;
}

export function About() {
  return <section className="about section-pad" id="about"><div className="section-rule"><span>01 / ABOUT</span><span>{siteData.about.eyebrow}</span></div><div className="about-layout"><Reveal><h2>{siteData.about.headline}</h2></Reveal><div className="about-copy"><Reveal><p className="large-copy">{siteData.personal.bio}</p></Reveal><Reveal delay={.1}><p>{siteData.about.bioSecondary}</p><a className="text-link" href={siteData.personal.resume}>Download résumé <Download size={15} /></a></Reveal></div></div><div className="skills-grid">{siteData.skills.map((skill, index) => <Reveal key={skill.name} delay={index * .05} className="skill"><div><span>{skill.name}</span><small>{skill.level}%</small></div><i><b style={{ width: `${skill.level}%` }} /></i></Reveal>)}</div></section>;
}
