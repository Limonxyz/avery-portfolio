"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { siteData } from "@/data/site";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <span className="theme-placeholder" aria-hidden="true" />;
  const light = resolvedTheme === "light";
  return <button className="icon-button" onClick={() => setTheme(light ? "dark" : "light")} aria-label={`Switch to ${light ? "dark" : "light"} mode`}>{light ? <Moon size={16} /> : <Sun size={16} />}</button>;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="navbar">
    <a className="logo magnetic" href="#top" aria-label={`${siteData.personal.name} home`}><span>AS</span><i>●</i></a>
    <nav className="nav-links" aria-label="Primary navigation">{siteData.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
    <div className="nav-actions"><ThemeToggle /><a className="nav-cta" href="#contact">{"Let's talk"} <ArrowUpRight size={14} /></a><button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={21} /> : <Menu size={21} />}</button></div>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">{siteData.navigation.map((item, index) => <a key={item.href} href={item.href} onClick={close}><span>0{index + 1}</span>{item.label}<ArrowUpRight size={20} /></a>)}</nav>}
  </header>;
}
