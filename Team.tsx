"use client";

import { useEffect, useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Loader2, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Team = () => {
    const [team, setTeam] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/team')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setTeam(data);
                } else {
                    setTeam([]);
                }
                setLoading(false);
            })
            .catch(() => {
                setTeam([]);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="flex justify-center p-20"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;

    return (
        <section className="py-20 bg-background" id="team">
            <div className="container mx-auto px-4">
                <ScrollReveal direction="up">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                            Our Team
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                            Meet the <span className="text-gradient">Innovators</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            The creative minds and technical experts behind OctaTribe's success.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-10">
                    {team.map((member, index) => (
                        <ScrollReveal key={member.id} direction="up" delay={index * 0.1}>
                            <div className="group block relative text-center">
                                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/10 group-hover:border-primary transition-colors duration-300">
                                    {member.image ? (
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-secondary flex items-center justify-center text-4xl font-bold text-muted-foreground">
                                            {member.name.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                                    <Link href={`/team/${member.id}`} className="after:absolute after:inset-0">
                                        {member.name}
                                    </Link>
                                </h3>
                                <p className="text-primary font-medium mb-3">{member.role}</p>
                                <p className="text-muted-foreground mb-4 text-sm px-4 line-clamp-2">{member.bio}</p>
                                <div className="flex justify-center gap-4 relative z-10">
                                    {member.linkedin && (
                                        <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors"><Linkedin className="w-5 h-5" /></a>
                                    )}
                                    {member.twitter && (
                                        <a href={member.twitter} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#1DA1F2] transition-colors"><Twitter className="w-5 h-5" /></a>
                                    )}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
