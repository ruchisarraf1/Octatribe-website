import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding updated SiteSettings...');

    const settings = await prisma.siteSettings.upsert({
        where: { id: 1 },
        update: {
            email: 'mail@octatribe.com',
            phone: '+977 9820760120 / 130',
            location: '44300, Ghantaghar, Birgunj, Nepal | 44600, Thado Dhunga, Lalitpur, Nepal',
            facebook: 'https://facebook.com/octatribe',
            instagram: 'https://instagram.com/octatribe',
            linkedin: 'https://linkedin.com/company/octatribe',
            twitter: 'https://twitter.com/octatribe',
            metaTitle: 'OctaTribe | Building Brands in Digital Age',
            metaDescription: 'Empowering businesses through innovative digital solutions and strategic technology implementation.'
        },
        create: {
            email: 'mail@octatribe.com',
            phone: '+977 9820760120 / 130',
            location: '44300, Ghantaghar, Birgunj, Nepal | 44600, Thado Dhunga, Lalitpur, Nepal',
            facebook: 'https://facebook.com/octatribe',
            instagram: 'https://instagram.com/octatribe',
            linkedin: 'https://linkedin.com/company/octatribe',
            twitter: 'https://twitter.com/octatribe',
            metaTitle: 'OctaTribe | Building Brands in Digital Age',
            metaDescription: 'Empowering businesses through innovative digital solutions and strategic technology implementation.'
        },
    });

    console.log('SiteSettings updated:', settings);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
