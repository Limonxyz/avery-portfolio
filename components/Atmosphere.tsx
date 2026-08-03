"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedBackground() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (event: PointerEvent) => {
      ref.current?.style.setProperty("--mouse-x", `${event.clientX}px`);
      ref.current?.style.setProperty("--mouse-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <div ref={ref} className="animated-background" aria-hidden="true"><div className="mouse-glow" /><div className="gradient-orb orb-a" /><div className="gradient-orb orb-b" /></div>;
}

export function Particles() {
  return <div className="particles" aria-hidden="true">{Array.from({ length: 22 }, (_, index) => <i key={index} style={{ "--i": index } as React.CSSProperties} />)}</div>;
}

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let x = 0, y = 0, rx = 0, ry = 0, frame = 0;
    const move = (event: MouseEvent) => { x = event.clientX; y = event.clientY; if (dot.current) dot.current.style.transform = `translate3d(${x}px,${y}px,0)`; };
    const tick = () => { rx += (x - rx) * .14; ry += (y - ry) * .14; if (ring.current) ring.current.style.transform = `translate3d(${rx}px,${ry}px,0)`; frame = requestAnimationFrame(tick); };
    window.addEventListener("mousemove", move); tick();
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(frame); };
  }, []);
  return <><div ref={dot} className="cursor-dot" /><div ref={ring} className="cursor-ring" /></>;
}

export function LoadingScreen() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const id = window.setTimeout(() => setLoaded(true), 1100); return () => clearTimeout(id); }, []);
  return <div className={`loader ${loaded ? "loader-done" : ""}`} aria-hidden="true"><span>AS</span><div><i /></div><small>Building the signal</small></div>;
}
