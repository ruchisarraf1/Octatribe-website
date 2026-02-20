"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptConsent = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 z-[100] sm:left-auto sm:max-w-md">
            <Card className="p-6 bg-card/95 backdrop-blur-md border-primary/20 shadow-2xl animate-in fade-in slide-in-from-bottom-10 duration-500">
                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center">
                        <Cookie className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold">Cookie Policy</h3>
                            <button onClick={() => setIsVisible(false)} className="text-muted-foreground hover:text-foreground">
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            We use cookies to enhance your experience, analyze site traffic, and improve our digital tribe. By clicking "Accept", you agree to our use of cookies.
                        </p>
                        <div className="flex gap-3">
                            <Button size="sm" onClick={acceptConsent} className="flex-grow rounded-full">
                                Accept All
                            </Button>
                            <Button size="sm" variant="ghost" onClick={() => setIsVisible(false)} className="rounded-full">
                                Essential Only
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
