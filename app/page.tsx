import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { AnimatedBackground, Cursor, LoadingScreen, Particles } from "@/components/Atmosphere";
import { Hero, About } from "@/components/HeroAbout";
import { Projects, Timeline, Achievements, Services, Testimonials, Journal, Contact } from "@/components/Sections";
import { Footer } from "@/components/Footer";

export default function Home() {
  return <Providers><LoadingScreen /><Cursor /><AnimatedBackground /><Particles /><Navbar /><main><Hero /><About /><Projects /><Timeline /><Achievements /><Services /><Testimonials /><Journal /><Contact /></main><Footer /></Providers>;
}
