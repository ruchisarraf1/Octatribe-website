"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const Clients = () => {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/clients')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setClients(data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Our Clients
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Trusted by <span className="text-gradient">Leading Brands</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We've partnered with forward-thinking companies to build impactful digital solutions.
            </p>
          </div>
        </ScrollReveal>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <ScrollReveal key={client.id} direction="up" delay={index * 0.05}>
                <div
                  className="bg-card/50 border border-border rounded-2xl p-6 flex flex-col items-center justify-center hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group h-32"
                >
                  <div className="relative w-full h-full">
                    {client.logoUrl ? (
                      <Image
                        src={client.logoUrl}
                        alt={client.name}
                        fill
                        className="object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      />
                    ) : (
                      <span className="text-sm font-bold text-muted-foreground">{client.name}</span>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Clients;
