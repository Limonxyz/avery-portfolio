"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, Mail, MapPin, Send } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { siteData } from "@/data/site";
import { ProjectCard } from "./ProjectCard";
import { Reveal, SectionTitle } from "./UI";

export function Projects() { return <section className="projects section-pad" id="projects"><SectionTitle number="02" eyebrow="Selected transmissions" title="Work that moves culture forward." /><div className="project-grid">{siteData.projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div></section>; }

export function Timeline() { return <section className="timeline section-pad" id="experience"><SectionTitle number="03" eyebrow="Experience" title="Built by curiosity. Sharpened by practice." /><div className="timeline-list">{siteData.experience.map((item, index) => <article className="timeline-item" key={item.period}><span className="timeline-dot" /><p className="mono timeline-period">{item.period}</p><div><h3>{item.role}</h3><p className="timeline-company">{item.company}</p></div><p className="timeline-description">{item.description}</p><span className="timeline-index mono">0{index + 1}</span></article>)}</div></section>; }

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null); const inView = useInView(ref, { once: true }); const motionValue = useMotionValue(0); const spring = useSpring(motionValue, { damping: 30, stiffness: 90 });
  useEffect(() => { if (inView) motionValue.set(value); }, [inView, motionValue, value]);
  useEffect(() => spring.on("change", (latest) => { if (ref.current) ref.current.textContent = `${Math.round(latest)}${suffix}`; }), [spring, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export function Achievements() { return <section className="achievements section-pad" id="achievements"><div className="achievement-intro"><p className="mono">PROOF / NOT PROMISES</p><h2>Impact you can count. Craft you can feel.</h2></div><div className="achievement-grid">{siteData.achievements.map((item) => <article key={item.label}><Counter value={item.value} suffix={item.suffix} /><h3>{item.label}</h3><p>{item.description}</p></article>)}</div></section>; }

export function Services() { return <section className="services section-pad" id="services"><SectionTitle number="04" eyebrow="Capabilities" title="From first spark to full signal." /><div className="services-list">{siteData.services.map((service, index) => <motion.article key={service.title} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .12 }}><span className="mono">0{index + 1}</span><h3>{service.title}</h3><p>{service.description}</p><ul>{service.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul><ArrowUpRight className="service-arrow" /></motion.article>)}</div></section>; }

export function Testimonials() { const [active, setActive] = useState(0); const testimonial = siteData.testimonials[active]; return <section className="testimonials section-pad" id="testimonials"><div className="section-rule"><span>05 / KIND WORDS</span><span>What collaborators say</span></div><div className="testimonial-layout"><div className="quote-mark">“</div><motion.blockquote key={testimonial.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>{testimonial.quote}</motion.blockquote><div className="testimonial-person"><Image src={testimonial.avatar} alt="" width={52} height={52} /><div><strong>{testimonial.name}</strong><span>{testimonial.role}</span></div></div><div className="testimonial-tabs">{siteData.testimonials.map((item, index) => <button className={index === active ? "active" : ""} key={item.name} onClick={() => setActive(index)} aria-label={`View testimonial from ${item.name}`}>0{index + 1}</button>)}</div></div></section>; }

export function Journal() { return <section className="journal section-pad" id="journal"><SectionTitle number="06" eyebrow="Field notes" title="Thinking in public." /><div className="journal-list">{siteData.blog.map((post) => <a key={post.title} href={post.link}><span className="mono">{post.date}</span><h3>{post.title}</h3><small>{post.readTime} read</small><ArrowRight /></a>)}</div></section>; }

export function Contact() { return <section className="contact section-pad" id="contact"><div className="contact-glow" /><Reveal><p className="mono contact-kicker"><i />{siteData.personal.availability}</p><h2>Have an idea with <span>gravity?</span><br />{"Let's make it real."}</h2><a className="contact-email" href={`mailto:${siteData.personal.email}`}>{siteData.personal.email}<Send size={28} /></a></Reveal><div className="contact-meta"><p><MapPin size={15} />{siteData.personal.location}</p><p><Mail size={15} />{siteData.personal.email}</p></div></section>; }
