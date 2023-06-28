import { NextResponse } from "next/server";
import prisma from "../../lib/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  const { policyNumber, type, startDate, endDate, premium, userId } = body;

  const policy = await prisma.policy.create({
    data: {
      policyNumber,
      type,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      premium,
      userId,
    },
  });

  return NextResponse.json(policy);
}
