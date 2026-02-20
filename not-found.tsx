import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Ghost, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Header />
            <div className="flex-grow flex items-center justify-center py-32 px-4">
                <div className="max-w-md w-full text-center space-y-8">
                    <div className="relative inline-block">
                        <Ghost className="w-24 h-24 text-primary animate-bounce opacity-20 mx-auto" />
                        <h1 className="text-9xl font-display font-black text-primary/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">404</h1>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-3xl font-display font-bold">Lost in the Tribe?</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The page you are looking for has been moved, deleted, or never existed in our digital ecosystem.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link href="/">
                            <Button className="w-full sm:w-auto h-12 px-8 rounded-full gap-2">
                                <Home className="w-4 h-4" /> Back Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
