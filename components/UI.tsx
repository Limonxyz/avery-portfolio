"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SectionTitle({ number, eyebrow, title }: { number: string; eyebrow: string; title: string }) {
  const reduced = useReducedMotion();
  return <motion.div className="section-title" initial={reduced ? false : { opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: .75 }}>
    <div><span>{number}</span><p>{eyebrow}</p></div><h2>{title}</h2>
  </motion.div>;
}

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: .7, delay }}>{children}</motion.div>;
}

export function MagneticButton({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.a className={`magnetic ${className}`} href={href} onMouseMove={(event) => {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * .16}px, ${(event.clientY - rect.top - rect.height / 2) * .16}px)`;
  }} onMouseLeave={(event) => { event.currentTarget.style.transform = "translate(0,0)"; }}>{children}</motion.a>;
}
