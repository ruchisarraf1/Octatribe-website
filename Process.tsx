"use client";

import { useEffect, useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Loader2 } from 'lucide-react';

const Process = () => {
    const [steps, setSteps] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/process')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setSteps(data);
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
                            Our Process
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                            A proven methodology that{' '}
                            <span className="text-gradient">delivers results</span>, every time
                        </h2>
                    </div>
                </ScrollReveal>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <Loader2 className="w-10 h-10 text-primary animate-spin" />
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <ScrollReveal key={step.id} direction="up" delay={index * 0.1}>
                                <div className="relative group h-full">
                                    <div className="bg-card border border-border p-8 rounded-2xl h-full hover:border-primary/50 transition-colors duration-300">
                                        <div className="text-6xl font-display font-bold text-primary/10 mb-6 group-hover:text-primary/20 transition-colors">
                                            {step.order.toString().padStart(2, '0')}
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
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

export default Process;
