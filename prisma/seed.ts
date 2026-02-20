import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const services = [
    {
        icon: 'Globe',
        title: 'Web Development',
        slug: 'web-development',
        description: 'Custom web applications built with cutting-edge technologies and best practices.',
        content: '# Web Development Services\n\nWe build high-performance, scalable web applications using modern frameworks.\n\n### Our Expertise\n- Next.js & React\n- Fullstack Applications\n- Performance Optimization',
        price: 'Starting at $1,500',
        features: 'Next.js/React,Scalable Architecture,SEO Optimized',
        order: 1
    },
    {
        icon: 'Smartphone',
        title: 'App Development',
        slug: 'app-development',
        description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
        content: '# App Development Services\n\nWe build high-performance mobile applications for iOS and Android.\n\n### Our Expertise\n- React Native\n- Flutter\n- Native iOS & Android',
        price: 'Starting at $2,500',
        features: 'Cross-platform,Performance Optimized,User-Centric Design',
        order: 2
    },
    {
        icon: 'Bot',
        title: 'AI Agent Development',
        slug: 'ai-agent-development',
        description: 'Intelligent AI agents that automate workflows and enhance your business operations.',
        content: '# AI Agent Development\n\nCustom AI agents designed to automate complex business processes.',
        price: 'Starting at $3,000',
        features: 'Workflow Automation,NLP integration,Custom Training',
        order: 3
    },
    {
        icon: 'Brain',
        title: 'AI Consulting',
        slug: 'ai-consulting',
        description: 'Strategic AI implementation guidance to leverage cutting-edge artificial intelligence.',
        content: '# AI Consulting Services\n\nStrategizing your path to AI integration and efficiency.',
        price: 'Starting at $1,500',
        features: 'Strategy Roadmap,Implementation Support,ROI Analysis',
        order: 4
    },
    {
        icon: 'Megaphone',
        title: 'Digital Marketing',
        slug: 'digital-marketing',
        description: 'Data-driven marketing strategies that boost visibility and drive conversions.',
        content: '# Digital Marketing Solutions\n\nScaling your business through targeted digital advertising and SEO.',
        price: 'Starting at $1,200/mo',
        features: 'Performance Marketing,SEO Optimization,Data Analytics',
        order: 5
    },
    {
        icon: 'Palette',
        title: 'Content Creation & Consulting',
        slug: 'content-creation-consulting',
        description: 'Compelling content strategies and creation that engage audiences and build brands.',
        content: '# Content Strategy & Creation\n\nStorytelling that resonates with your brand voice.',
        price: 'Starting at $1,000/mo',
        features: 'Copywriting,Visual Content,Content Strategy',
        order: 6
    }
];

const faqs = [
    {
        question: "What technologies do you specialize in?",
        answer: "We specialize in modern web technologies including React, TypeScript, Node.js, and cloud platforms like AWS and Azure.",
        order: 1
    },
    {
        question: "How long does a typical project take?",
        answer: "A standard web application typically takes 8-12 weeks from discovery to launch.",
        order: 2
    },
    {
        question: "Do you provide ongoing support after launch?",
        answer: "Yes! We offer comprehensive post-launch support including maintenance, monitoring, updates, and optimization. Our team ensures your application runs smoothly and evolves with your business needs.",
        order: 3
    },
    {
        question: "What is your pricing structure?",
        answer: "We offer flexible pricing models including fixed-price projects, time and materials, and retainer agreements. Pricing depends on project scope, complexity, and timeline. Contact us for a detailed proposal tailored to your needs.",
        order: 4
    },
    {
        question: "Can you work with our existing team?",
        answer: "Absolutely! We seamlessly integrate with existing teams and workflows. Whether you need full project ownership or augmentation of your current team, we adapt to your collaboration preferences.",
        order: 5
    }
];

const caseStudies = [
    {
        title: "E-Commerce Revenue Growth",
        client: "FashionBrand Inc.",
        description: "Revamped the entire digital presence and implemented a new e-commerce strategy.",
        image: "/images/case-study-1.jpg",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        mediaType: "video",
        category: "Digital Marketing",
        result: "+200% ROI"
    },
    {
        title: "SaaS Platform Launch",
        client: "TechStart",
        description: "Built a scalable SaaS platform from scratch using Next.js and Cloud Infrastructure.",
        image: "/images/case-study-2.jpg",
        mediaType: "image",
        category: "Web Development",
        result: "10k Users in 3 Months"
    }
];

const teamMembers = [
    {
        name: "Alex Rivera",
        role: "CEO & Founder",
        bio: "Visionary leader with 15+ years in digital transformation.",
        image: "/images/team-1.jpg",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
    }
];

const processSteps = [
    {
        title: "Discovery",
        description: "We dive deep into your business goals, challenges, and target audience to create a strategic roadmap.",
        icon: "Search",
        order: 1
    },
    {
        title: "Design & Planning",
        description: "Our team crafts detailed wireframes, prototypes, and technical specifications aligned with your vision.",
        icon: "Layout",
        order: 2
    },
    {
        title: "Development",
        description: "We build your solution using modern technologies with continuous testing and quality assurance.",
        icon: "Code",
        order: 3
    },
    {
        title: "Launch & Support",
        description: "Seamless deployment with ongoing maintenance, monitoring, and optimization for peak performance.",
        icon: "Rocket",
        order: 4
    }
];

const clientLogos = [
    { name: "TechCorp", logoUrl: "/images/clients/techcorp.svg", website: "#", order: 1 },
    { name: "GlobalSoft", logoUrl: "/images/clients/globalsoft.svg", website: "#", order: 2 },
    { name: "InnovateAds", logoUrl: "/images/clients/innovate.svg", website: "#", order: 3 },
    { name: "CloudStream", logoUrl: "/images/clients/cloudstream.svg", website: "#", order: 4 }
];

async function main() {
    console.log('Start seeding...');

    // Clear existing data
    await prisma.service.deleteMany();
    await prisma.fAQ.deleteMany();
    await prisma.caseStudy.deleteMany();
    await prisma.teamMember.deleteMany();
    await prisma.processStep.deleteMany();
    await prisma.clientLogo.deleteMany();
    await prisma.testimonial.deleteMany();
    await prisma.siteSettings.deleteMany();
    console.log('Cleared existing data.');

    // Create default settings
    await prisma.siteSettings.create({
        data: {
            id: 1,
            email: "info@octatribe.com",
            phone: "+977-9811247700",
            location: "Tripureshwor Kathmandu, Kathmandu, Nepal",
            facebook: "https://www.facebook.com/octatribe",
            twitter: "https://twitter.com/octatribe",
            instagram: "https://www.instagram.com/octatribe",
            linkedin: "https://www.linkedin.com/company/octa-tribe/",
            metaTitle: "OctaTribe | Digital Intelligence Agency",
            metaDescription: "Empowering businesses through innovative digital solutions and strategic technology implementation."
        }
    });

    const initialTestimonials = [
        {
            quote: "OctaTribe transformed our online presence completely. Our website traffic increased by 300% within 6 months!",
            author: "Rajesh Kumar",
            role: "CEO",
            company: "Royal Motors Nepal",
            order: 1
        },
        {
            quote: "The team at OctaTribe is incredibly professional. They understood our brand vision and delivered beyond expectations.",
            author: "Sunita Sharma",
            role: "Marketing Director",
            company: "Alpine Academy",
            order: 2
        },
        {
            quote: "Best digital marketing agency we've worked with. Their PPC campaigns consistently deliver positive ROI.",
            author: "Bikram Thapa",
            role: "Founder",
            company: "TechStart Nepal",
            order: 3
        }
    ];

    for (const t of initialTestimonials) {
        await prisma.testimonial.create({ data: t });
    }

    for (const s of services) {
        await prisma.service.create({ data: s });
    }

    for (const f of faqs) {
        await prisma.fAQ.create({ data: f });
    }

    for (const c of caseStudies) {
        await prisma.caseStudy.create({ data: c });
    }

    for (const t of teamMembers) {
        await prisma.teamMember.create({ data: t });
    }

    for (const p of processSteps) {
        await prisma.processStep.create({ data: p });
    }

    for (const l of clientLogos) {
        await prisma.clientLogo.create({ data: l });
    }

    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
