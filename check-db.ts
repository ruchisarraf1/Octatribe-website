import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function check() {
    const services = await prisma.service.count();
    const caseStudies = await prisma.caseStudy.count();
    const processSteps = await prisma.processStep.count();
    const clientLogos = await prisma.clientLogo.count();
    const team = await prisma.teamMember.count();
    const faqs = await prisma.fAQ.count();

    console.log({
        services,
        caseStudies,
        processSteps,
        clientLogos,
        team,
        faqs
    });
}

check().finally(() => prisma.$disconnect());
