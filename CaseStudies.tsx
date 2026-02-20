"use client";

import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from './ScrollReveal';
import { Loader2, ArrowRight, Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const CaseStudies = () => {
    const [caseStudies, setCaseStudies] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/case-studies')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setCaseStudies(data);
                } else {
                    setCaseStudies([]);
                }
                setLoading(false);
            })
            .catch(() => {
                setCaseStudies([]);
                setLoading(false);
            });
    }, []);

    return (
        <section id="case-studies" className="py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <ScrollReveal direction="up">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                            Success Stories
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                            <span className="text-foreground">Our Proven</span>{' '}
                            <span className="text-gradient">Track Record</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            See how we've helped businesses transform and grow through digital innovation.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                        <div className="col-span-full flex justify-center py-20">
                            <Loader2 className="w-10 h-10 text-primary animate-spin" />
                        </div>
                    ) : (
                        caseStudies.map((study, index) => (
                            <ScrollReveal key={study.id} direction="up" delay={index * 0.1}>
                                <Link href={`/case-studies/${study.id}`} className="block h-full">
                                    <div className="group h-full bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
                                        {/* Image/Video Container */}
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            {study.mediaType === 'video' && study.videoUrl ? (
                                                <div className="w-full h-full relative">
                                                    <iframe
                                                        className="w-full h-full pointer-events-none"
                                                        src={`${study.videoUrl}?autoplay=0&controls=0&mute=1`}
                                                        title={study.title}
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                                                        <div className="w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform">
                                                            <Play className="w-6 h-6 fill-current" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="relative h-full w-full">
                                                    {study.image ? (
                                                        <Image
                                                            src={study.image}
                                                            alt={study.title}
                                                            fill
                                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                        />
                                                    ) : (
                                                        <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                                                            <span className="text-4xl font-bold text-primary/20">{study.client.charAt(0)}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                            <div className="absolute top-4 left-4">
                                                <Badge className="bg-background/80 backdrop-blur-md text-foreground border-border hover:bg-background">
                                                    {study.category}
                                                </Badge>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 md:p-8">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-xl md:text-2xl font-display font-bold group-hover:text-primary transition-colors">
                                                    {study.title}
                                                </h3>
                                                <div className="p-2 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <ExternalLink className="w-5 h-5 text-primary" />
                                                </div>
                                            </div>
                                            <p className="text-muted-foreground mb-6 line-clamp-2">
                                                {study.description}
                                            </p>
                                            <div className="flex items-center justify-between pt-6 border-t border-border">
                                                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                                    {study.client}
                                                </span>
                                                <span className="text-lg font-bold text-primary">
                                                    {study.result}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
