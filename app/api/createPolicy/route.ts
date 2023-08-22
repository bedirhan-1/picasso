import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Politika (Policy) ekleme fonksiyonu
export async function createPolicy(
  policyNumber: string,
  type: string,
  startDate: Date,
  endDate: Date,
  premium: number,
  userId: string
): Promise<any> {
  try {
    const yeniPolitika = await prisma.policy.create({
      data: {
        policyNumber,
        type,
        startDate,
        endDate,
        premium,
        userId,
      },
    });

    return yeniPolitika;
  } catch (error) {
    throw new Error("Politika oluşturulurken bir hata oluştu: " + error);
  }
}

// Kullanıcıları ve politikaları almak için örnek bir fonksiyon
export async function getUserWithPolicies(userId: string): Promise<any> {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        policies: true, // Kullanıcının tüm politikalarını alır
      },
    });

    return user;
  } catch (error) {
    throw new Error(
      "Kullanıcı ve politikalarını alırken bir hata oluştu: " + error
    );
  }
}

export { prisma };
