"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useRouter } from 'next/navigation';

interface ContactFormProps {
    title?: string;
    subtitle?: string;
    className?: string;
}

export function ContactForm({ title, subtitle, className }: ContactFormProps) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [services, setServices] = useState<any[]>([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        website: '' // Honeypot field
    });

    useEffect(() => {
        fetch('/api/services')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setServices(data);
                }
            })
            .catch(err => console.error('Fetch error:', err));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: '',
                    website: ''
                });
                router.push('/thank-you');
            } else {
                toast.error(data.message || 'Something went wrong');
            }
        } catch (error) {
            toast.error('Failed to connect to backend.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={`bg-card/50 backdrop-blur-xl border border-border shadow-2xl rounded-3xl p-8 md:p-10 hover:border-primary/20 transition-all ${className}`}>
            {title && <h3 className="text-2xl font-display font-bold text-foreground mb-2">{title}</h3>}
            {subtitle && <p className="text-muted-foreground mb-8 text-sm">{subtitle}</p>}

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="hidden" aria-hidden="true">
                    <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                </div>

                <Input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-border h-12 text-foreground"
                />
                <Input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-border h-12 text-foreground"
                />
                <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background/50 border-border h-12 text-foreground"
                />
                <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                    <SelectTrigger className="w-full h-12 bg-background/50 border-border text-foreground">
                        <SelectValue placeholder="Select Service Interested In" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border text-foreground">
                        {services.map((s) => (
                            <SelectItem key={s.id} value={s.slug || s.title.toLowerCase().replace(/\s+/g, '-')}>
                                {s.title}
                            </SelectItem>
                        ))}
                        {services.length === 0 && (
                            <SelectItem value="general">General Inquiry</SelectItem>
                        )}
                    </SelectContent>
                </Select>
                <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <Button
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                    )}
                </Button>
            </form>
            <p className="text-center text-[10px] text-muted-foreground mt-4 uppercase tracking-widest font-bold">
                Privacy Guaranteed • Free Consultation
            </p>
        </div>
    );
}
