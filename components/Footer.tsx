import { ArrowUp, Github, Linkedin, Send, Twitter } from "lucide-react";
import { siteData } from "@/data/site";

export function Footer() {
  return <footer className="footer section-pad"><div className="footer-top"><a className="logo" href="#top"><span>AS</span><i>●</i></a><p>Creative technology for<br />the next internet.</p><div className="footer-socials"><a href={siteData.social.twitter} aria-label="Twitter"><Twitter size={17} /></a><a href={siteData.social.github} aria-label="GitHub"><Github size={17} /></a><a href={siteData.social.linkedin} aria-label="LinkedIn"><Linkedin size={17} /></a><a href={siteData.social.telegram} aria-label="Telegram"><Send size={17} /></a></div><a className="back-top" href="#top" aria-label="Back to top"><ArrowUp size={18} /></a></div><div className="footer-bottom mono"><span>© {new Date().getFullYear()} {siteData.personal.name}</span><span>DESIGNED WITH INTENT · BUILT WITH CARE</span><span>ALL RIGHTS RESERVED</span></div></footer>;
}
