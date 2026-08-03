"use client";

import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteData } from "@/data/site";

export function Providers({ children }: { children: React.ReactNode }) {
  const colors = { "--primary": siteData.theme.primary, "--secondary": siteData.theme.secondary, "--bg": siteData.theme.background } as React.CSSProperties;
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);
    lenis.on("scroll", ScrollTrigger.update);
    const ticker = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        gsap.to(element, {
          yPercent: Number(element.dataset.parallax || 10),
          ease: "none",
          scrollTrigger: { trigger: element, scrub: 1.2 },
        });
      });
      gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item) => {
        gsap.from(item, { opacity: 0, x: -32, duration: 0.8, scrollTrigger: { trigger: item, start: "top 85%" } });
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      gsap.ticker.remove(ticker);
      context.revert();
    };
  }, []);

  return <ThemeProvider attribute="class" defaultTheme="system" enableSystem><div style={colors}>{children}</div></ThemeProvider>;
}
