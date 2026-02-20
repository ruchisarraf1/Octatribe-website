"use client";

import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from './ScrollReveal';
import { Loader2 } from 'lucide-react';

const FAQ = () => {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/faqs')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setFaqs(data);
        } else {
          setFaqs([]);
        }
        setLoading(false);
      })
      .catch(() => {
        setFaqs([]);
        setLoading(false);
      });
  }, []);

  return (
    <section id="faq" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about working with OctaTribe
              </p>
            </div>
          </ScrollReveal>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {loading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
              </div>
            ) : (
              faqs.map((faq, index) => (
                <ScrollReveal key={faq.id} direction="up" delay={index * 0.05}>
                  <Accordion type="single" collapsible>
                    <AccordionItem
                      value={`item-${index}`}
                      className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-all duration-300"
                    >
                      <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </ScrollReveal>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
