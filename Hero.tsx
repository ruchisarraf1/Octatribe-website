"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, Sparkles, ShieldCheck, Zap, Bot } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { ContactForm } from './ContactForm';

// Floating Card Component
const FloatingCard = ({ icon: Icon, title, value, delay }: { icon: any, title: string, value: string, delay: number }) => (
  <div
    className="absolute bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-4 shadow-2xl animate-float"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="text-lg font-bold text-foreground">{value}</p>
        <p className="text-xs text-muted-foreground">{title}</p>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <ScrollReveal direction="up">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                <span className="text-red-500 font-bold">Building Brands in Digital Age</span>
              </span>

              <h1 className="font-display font-bold leading-tight mb-6">
                <span className="text-foreground text-5xl md:text-6xl lg:text-7xl block">Empower Your Vision</span>
                <span className="text-gradient text-4xl md:text-5xl lg:text-6xl block mt-2">With Octatribe</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
                We bridge the gap between imagination and execution. Our tribe of experts delivers tailored digital solutions that drive real business growth.
              </p>

              <div className="flex flex-wrap gap-6 mb-12">
                <div className="flex items-center gap-3 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <TrendingUp className="w-6 h-6 text-primary group-hover:text-inherit" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">+45%</p>
                    <p className="text-sm text-muted-foreground whitespace-nowrap">Average Revenue Growth</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Users className="w-6 h-6 text-primary group-hover:text-inherit" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground whitespace-nowrap">Happy Clients</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="xl"
                  className="rounded-full px-8 group"
                  onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Launch Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="rounded-full px-8 border-border hover:bg-muted/50"
                  onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Case Studies
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Content - Form + Floating Cards */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="lg:pl-8 relative" id="consultation-form">
              {/* Floating Achievement Cards - visible on larger screens */}
              <div className="hidden lg:block">
                <div className="top-0 -left-16 z-20" style={{ position: 'absolute' }}>
                  <FloatingCard icon={Sparkles} title="AI Integrated" value="Smart" delay={0} />
                </div>
                <div className="top-24 -right-12 z-20" style={{ position: 'absolute' }}>
                  <FloatingCard icon={ShieldCheck} title="Secure & Fast" value="99.9%" delay={0.5} />
                </div>
                <div className="bottom-10 -left-20 z-20" style={{ position: 'absolute' }}>
                  <FloatingCard icon={Zap} title="Conversion Rate" value="+120%" delay={1} />
                </div>
              </div>

              <ContactForm
                title="Ready to scale?"
                subtitle="Get a 30-minute free consultation and discover your digital potential."
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
