import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogoMarquee from '@/components/LogoMarquee';
import ToolsMarquee from '@/components/ToolsMarquee';
import About from '@/components/About';
import CaseStudies from '@/components/CaseStudies';
import Process from '@/components/Process';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <LogoMarquee />
      <ToolsMarquee />
      <About />
      <Services />
      <CaseStudies />
      <Process />
      <Clients />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}