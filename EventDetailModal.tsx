"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, X, Play } from "lucide-react";
import Image from "next/image";

interface EventDetailModalProps {
    event: any | null;
    isOpen: boolean;
    onClose: () => void;
}

export function EventDetailModal({ event, isOpen, onClose }: EventDetailModalProps) {
    if (!event) return null;

    const gallery = event.gallery ? event.gallery.split(',').map((url: string) => url.trim()).filter(Boolean) : [];

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border p-0 gap-0">
                <DialogHeader className="sr-only">
                    <DialogTitle>{event.title}</DialogTitle>
                </DialogHeader>

                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-50 p-2 bg-background/50 backdrop-blur-md rounded-full border border-border hover:bg-background transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Cover Image/Video */}
                <div className="relative aspect-video w-full bg-muted overflow-hidden">
                    {event.image ? (
                        <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-secondary flex items-center justify-center text-muted-foreground">
                            No Image Available
                        </div>
                    )}
                    {event.videoUrl && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group">
                            <a
                                href={event.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-20 h-20 bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl"
                            >
                                <Play className="w-10 h-10 ml-1" />
                            </a>
                        </div>
                    )}
                    <div className="absolute bottom-6 left-6">
                        <Badge className="bg-primary text-primary-foreground text-sm px-4 py-1">
                            {event.category}
                        </Badge>
                    </div>
                </div>

                <div className="p-8 lg:p-12">
                    <div className="flex flex-col gap-8">
                        <div>
                            <div className="flex items-center gap-4 text-sm font-semibold text-primary mb-4">
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                </span>
                                {event.location && (
                                    <span className="flex items-center gap-1.5 text-muted-foreground">
                                        <MapPin className="w-4 h-4" />
                                        {event.location}
                                    </span>
                                )}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                                {event.title}
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                {event.description}
                            </p>
                        </div>

                        {/* Impact Section */}
                        {event.impact && (
                            <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8">
                                <div className="flex items-center gap-3 text-primary mb-4">
                                    <Trophy className="w-6 h-6" />
                                    <h3 className="text-xl font-display font-bold">Achievement & Impact</h3>
                                </div>
                                <p className="text-lg text-foreground/90 leading-relaxed font-medium">
                                    {event.impact}
                                </p>
                            </div>
                        )}

                        {/* Gallery Section */}
                        {gallery.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-display font-bold mb-6">Event Gallery</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {gallery.map((url: string, index: number) => (
                                        <div key={index} className="relative aspect-square rounded-2xl overflow-hidden group">
                                            {url ? (
                                                <Image
                                                    src={url}
                                                    alt={`${event.title} gallery ${index + 1}`}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-secondary flex items-center justify-center text-muted-foreground text-xs">
                                                    No Image
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {event.link && (
                            <div className="pt-4">
                                <a
                                    href={event.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-primary-foreground transition-all"
                                >
                                    Visit Official Page <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

// Helper icons
import { ArrowRight as ArrowRightIcon } from "lucide-react";
const ArrowRight = ArrowRightIcon;
