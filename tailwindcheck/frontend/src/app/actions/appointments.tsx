"use server";

import { prisma } from "@/lib/prisma";

export async function getAppointments() {
    return await prisma.contactSubmission.findMany({
        orderBy: { appointmentDate: "asc" },
    });
}