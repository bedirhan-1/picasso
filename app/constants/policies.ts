// Araç Sigortası
export const VehicleInsurance = {
  title: "Araç Sigortası",
  options: [
    "Kasko",
    "Trafik Sigortası",
    "Yangın Sigortası",
    "Hırsızlık Sigortası",
    "Kasko+Trafik Sigortası",
  ],
};

// Sağlık Sigortası
export const HealthInsurance = {
  title: "Sağlık Sigortası",
  options: [
    "Genel Sağlık Sigortası",
    "Tamamlayıcı Sağlık Sigortası",
    "Diş Sağlık Sigortası",
    "Göz Sağlığı Sigortası",
    "Kritik Hastalık Sigortası",
    "Hasta Nakil Sigortası",
    "Gebelik ve Doğum Sigortası",
    "Engelli Sağlık Sigortası",
    "Yurtdışı Seyahat Sağlık Sigortası",
    "Yurtiçi Seyahat Sağlık Sigortası",
  ],
};

// Konut Sigortası
export const HomeInsurance = {
  title: "Konut Sigortası",
  options: [
    "DASK (Doğal Afet Sigortası)",
    "Konut Yangın Sigortası",
    "Konut İçerik Sigortası",
    "Deprem Sigortası",
  ],
};

// Seyahat Sigortası
export const TravelInsurance = {
  title: "Seyahat Sigortası",
  options: ["Yurtiçi Seyahat Sigortası", "Yurtdışı Seyahat Sigortası"],
};

// İşyeri Sigortası
export const BusinessInsurance = {
  title: "İşyeri Sigortası",
  options: [
    "İşyeri Yangın Sigortası",
    "İşyeri Kasko Sigortası",
    "İşyeri Sorumluluk Sigortası",
  ],
};

// Hayat Sigortası
export const LifeInsurance = {
  title: "Hayat Sigortası",
  options: [
    "Bireysel Hayat Sigortası",
    "Grup Hayat Sigortası",
    "Kredi Hayat Sigortası",
  ],
};

// Kazanç Sigortası
export const IncomeInsurance = {
  title: "Kazanç Sigortası",
  options: ["Gelir Sigortası", "İşsizlik Sigortası"],
};

// Mal Sigortası
export const PropertyInsurance = {
  title: "Mal Sigortası",
  options: [
    "Makine Kırılması Sigortası",
    "Elektronik Cihaz Sigortası",
    "Yangın Sigortası",
    "Hırsızlık Sigortası",
  ],
};

// İnşaat Sigortası
export const ConstructionInsurance = {
  title: "İnşaat Sigortası",
  options: [
    "İnşaat All Risk Sigortası",
    "Montaj All Risk Sigortası",
    "Mühendislik Sigortası",
  ],
};

// Sorumluluk Sigortası
export const LiabilityInsurance = {
  title: "Sorumluluk Sigortası",
  options: [
    "Mesleki Sorumluluk Sigortası",
    "Üçüncü Şahıs Sorumluluk Sigortası",
    "İşveren Sorumluluk Sigortası",
  ],
};

// Genel Sigorta
export const GeneralInsuranceType = {
  VehicleInsurance,
  HealthInsurance,
  HomeInsurance,
  TravelInsurance,
  BusinessInsurance,
  LifeInsurance,
  IncomeInsurance,
  PropertyInsurance,
  ConstructionInsurance,
  LiabilityInsurance,
};

export const PolicyObj = {
  VehicleInsurance,
  HealthInsurance,
  HomeInsurance,
  TravelInsurance,
  BusinessInsurance,
  LifeInsurance,
  IncomeInsurance,
  PropertyInsurance,
  ConstructionInsurance,
  LiabilityInsurance,
  GeneralInsuranceType,
};

export const Policy = [
  {
    label: PolicyObj.BusinessInsurance.title,
    values: PolicyObj.BusinessInsurance.options,
  },
  {
    label: PolicyObj.ConstructionInsurance.title,
    values: PolicyObj.ConstructionInsurance.options,
  },
  {
    label: PolicyObj.HealthInsurance.title,
    values: PolicyObj.HealthInsurance.options,
  },
  {
    label: PolicyObj.HomeInsurance.title,
    values: PolicyObj.HomeInsurance.options,
  },
  {
    label: PolicyObj.IncomeInsurance.title,
    values: PolicyObj.IncomeInsurance.options,
  },
  {
    label: PolicyObj.LiabilityInsurance.title,
    values: PolicyObj.LiabilityInsurance.options,
  },
  {
    label: PolicyObj.LifeInsurance.title,
    values: PolicyObj.LifeInsurance.options,
  },
  {
    label: PolicyObj.PropertyInsurance.title,
    values: PolicyObj.PropertyInsurance.options,
  },
  {
    label: PolicyObj.TravelInsurance.title,
    values: PolicyObj.TravelInsurance.options,
  },
  {
    label: PolicyObj.VehicleInsurance.title,
    values: PolicyObj.VehicleInsurance.options,
  },
];
