"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';

const LogoMarquee = () => {
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

    if (loading) {
        return (
            <div className="py-12 flex justify-center">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
        );
    }

    if (clients.length === 0) return null;

    // Duplicate for seamless loop
    const allClients = [...clients, ...clients];

    return (
        <section className="py-12 bg-background overflow-hidden border-y border-border/50">
            <div className="container mx-auto px-4 mb-6">
                <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                    Trusted by Leading Brands
                </p>
            </div>

            <div className="relative flex overflow-hidden">
                <div className="flex gap-16 animate-marquee whitespace-nowrap">
                    {allClients.map((client, index) => (
                        <div
                            key={`${client.id}-${index}`}
                            className="flex items-center justify-center w-32 h-16 flex-shrink-0"
                        >
                            {client.logoUrl ? (
                                <Image
                                    src={client.logoUrl}
                                    alt={client.name}
                                    width={120}
                                    height={60}
                                    className="object-contain filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                                />
                            ) : (
                                <span className="text-sm font-bold text-muted-foreground/50 hover:text-foreground transition-colors">
                                    {client.name}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoMarquee;
