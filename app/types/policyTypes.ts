// policyTypes.ts

// Temel poliçe tipi
interface Policy {
  policyNumber: string;
  startDate: Date;
  endDate: Date;
  insuredAmount: number;
  premium: number;
}

// Araç sigortası poliçesi
interface CarInsurancePolicy extends Policy {
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: number;
  licensePlate: string;
}

// Ev sigortası poliçesi
interface HomeInsurancePolicy extends Policy {
  propertyType: string;
  address: string;
  constructionYear: number;
  totalArea: number;
}

// Sağlık sigortası poliçesi
interface HealthInsurancePolicy extends Policy {
  insuredPersonName: string;
  dateOfBirth: Date;
  coverageType: string;
  monthlyPremium: number;
}

// Diğer poliçe tiplerini buraya ekleyebilirsiniz

// Tüm poliçe tiplerini içeren bir birleşik tip
type PolicyType =
  | CarInsurancePolicy
  | HomeInsurancePolicy
  | HealthInsurancePolicy;

export default PolicyType;
