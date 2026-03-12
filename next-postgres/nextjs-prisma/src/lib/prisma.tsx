
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
// Import from your custom output path
import {PrismaClient} from '../app/generated/prisma/client';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Pass the adapter into the constructor
export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;