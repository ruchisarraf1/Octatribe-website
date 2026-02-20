"use client";

import { useEffect, useState } from 'react';
import {
  Globe,
  Palette,
  Search,
  Share2,
  Target,
  Megaphone,
  Smartphone,
  Bot,
  Brain,
  BarChart3,
  ArrowRight,
  Settings,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from './ScrollReveal';
import Link from 'next/link';

const ICON_MAP: Record<string, any> = {
  Globe,
  Palette,
  Search,
  Share2,
  Target,
  Megaphone,
  Smartphone,
  Bot,
  Brain,
  BarChart3,
  Settings
};

const Services = ({ showAll = false }: { showAll?: boolean }) => {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setServices(data);
        } else {
          setServices([]);
        }
        setLoading(false);
      })
      .catch(() => {
        setServices([]);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              <span className="text-foreground">What We</span>{' '}
              <span className="text-gradient">Deliver</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions designed to transform your business and drive measurable results
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-full flex justify-center py-20">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
            </div>
          ) : (
            services.map((service, index) => {
              const IconComponent = ICON_MAP[service.icon] || Settings;
              const features = service.features.split(',').map((f: string) => f.trim());

              return (
                <ScrollReveal key={service.id} direction="up" delay={index * 0.1}>
                  <Link href={`/services/${service.slug}`} className="block h-full group">
                    <div
                      className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-8 hover-lift transition-all duration-300 group-hover:border-primary/50 h-full flex flex-col shadow-lg"
                    >
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>

                      <h3 className="text-xl font-display font-bold text-foreground mb-3">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 line-clamp-2">
                        {service.description}
                      </p>

                      <ul className="space-y-2 mb-6 flex-grow">
                        {features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4 mt-auto border-t border-border/10 group-hover:border-primary/20 transition-colors">
                        <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:bg-transparent">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
