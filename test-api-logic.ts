import prisma from './src/lib/prisma';

async function testApi() {
    try {
        const services = await prisma.service.findMany({
            orderBy: { order: 'asc' },
        });
        console.log('--- SERVICES ---');
        console.log(`Found: ${services.length}`);
        console.log(JSON.stringify(services, null, 2));

        const steps = await prisma.processStep.findMany({
            orderBy: { order: 'asc' }
        });
        console.log('\n--- PROCESS STEPS ---');
        console.log(`Found: ${steps.length}`);

        const clients = await prisma.clientLogo.findMany({
            orderBy: { order: 'asc' }
        });
        console.log('\n--- CLIENTS ---');
        console.log(`Found: ${clients.length}`);

    } catch (error) {
        console.error('API Test Error:', error);
    } finally {
        await prisma.$disconnect();
    }
}

testApi();
