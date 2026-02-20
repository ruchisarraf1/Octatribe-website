import { CheckCircle, Zap, Target, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: Target,
    title: 'Performance-Focused Results',
    description: 'Every solution is built to generate measurable impact and real business value.',
  },
  {
    icon: Zap,
    title: 'Rapid & Reliable Delivery',
    description: 'We move fast while maintaining precision, quality, and consistency.',
  },
  {
    icon: TrendingUp,
    title: 'Future-Ready Scalability',
    description: 'Our solutions scale seamlessly as your business grows and market demands change.',
  },
];

import { ScrollReveal } from './ScrollReveal';

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-square bg-card rounded-3xl overflow-hidden border border-border group">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                <Image
                  src="/about-us.png"
                  alt="Our Team"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-8 left-8 z-20">
                  <div className="w-20 h-20 bg-primary/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-primary/20">
                    <span className="text-2xl font-bold text-primary">OT</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-1">Since 2019</h3>
                  <p className="text-white/70 text-sm">Transforming Businesses Digitally</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <ScrollReveal direction="right">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                About Us
              </span>

              <h2 className="font-display font-bold mb-6 leading-relaxed text-4xl md:text-5xl lg:text-6xl">
                <span className="text-foreground block">We create tailored</span>
                <span className="text-gradient inline-block pb-1">Digital Marketing Strategies</span>{' '}
                <span className="text-foreground text-3xl md:text-4xl lg:text-5xl">that drive growth.</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                OctaTribe delivers a clear, actionable digital roadmap—defining what you need, how every element works together, and how success is measured. While you focus on growing your business, we take full ownership of your digital marketing. Powered by a skilled team of strategists, designers, developers, content creators, and digital marketers, we are committed to driving measurable results.
              </p>

              <div className="space-y-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {['PPC', 'SEO', 'Web Development', 'Social Media', 'E-commerce'].map((service) => (
                  <span
                    key={service}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-primary" />
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
