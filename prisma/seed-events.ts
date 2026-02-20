import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding Sample Events...');

    // Clear existing events to avoid conflicts
    await prisma.event.deleteMany();
    console.log('Cleared existing events.');

    const events = [
        {
            title: 'Digital Transformation Workshop 2024',
            description: 'A comprehensive workshop focusing on the latest trends in digital strategy and brand building for local businesses. This intensive session covered everything from SEO to social media automation.',
            date: new Date('2024-01-15'),
            location: 'Lalitpur, Nepal',
            image: 'https://images.unsplash.com/photo-1540575861501-7ad060e39fe5?q=80&w=2070',
            category: 'Workshop',
            isFeatured: true,
            impact: 'Empowered over 50 local entrepreneurs with digital tools.',
            tags: 'digital, workshop, lalitpur',
            gallery: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4,https://images.unsplash.com/photo-1531482615713-2afd69097998,https://images.unsplash.com/photo-1552664730-d307ca884978,https://images.unsplash.com/photo-1522071820081-009f0129c71c,https://images.unsplash.com/photo-1523240795612-9a054b0db644,https://images.unsplash.com/photo-1517048676732-d65bc937f952,https://images.unsplash.com/photo-1522202176988-66273c2fd55f,https://images.unsplash.com/photo-1517245386807-bb43f82c33c4'
        },
        {
            title: 'OctaTribe Annual Conference',
            description: 'Bringing together industry leaders to discuss the future of AI and brand strategy in the digital age. Keynote speakers shared insights on human-AI collaboration.',
            date: new Date('2023-11-20'),
            location: 'Birgunj, Nepal',
            image: 'https://images.unsplash.com/photo-1505373633560-fa9a2f4ef7ec?q=80&w=2070',
            category: 'Conference',
            impact: 'Discussed emerging AI trends with 200+ delegates.',
            tags: 'AI, conference, networking',
            gallery: 'https://images.unsplash.com/photo-1540575861501-7ad060e39fe5,https://images.unsplash.com/photo-1582192732843-fb1acb99a71a'
        },
        {
            title: 'Tech Innovation Summit',
            description: 'Showcasing our latest breakthroughs in custom software development and AI-driven solutions. We presented our new line of autonomous productivity tools.',
            date: new Date('2023-09-10'),
            location: 'Kathmandu, Nepal',
            image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070',
            category: 'Summit',
            impact: 'Awarded "Most Innovative Tech Partner" 2023.',
            tags: 'tech, innovation, summit',
            gallery: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c,https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4'
        }
    ];

    for (const event of events) {
        await prisma.event.create({
            data: {
                ...event,
                date: event.date
            }
        });
    }

    console.log('Successfully seeded events!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
