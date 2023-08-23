// Araç Sigortası
export const VehicleInsurance = {
  title: "Araç Sigortası",
  options: ["Kasko", "Trafik Sigortası", "İhtiyari mali mesuliyet sigortası"],
  requirements: [
    "TC",
    "Doğum Tarihi",
    "Telefon Numarası",
    "Araç Yeni tescil mi",
    "Araç Plakası",
    "Tescil Belge Seri No",
  ],
};

// Sağlık Sigortası
export const HealthInsurance = {
  title: "Sağlık Sigortası",
  options: ["Genel Sağlık Sigortası", "Tamamlayıcı Sağlık Sigortası"],
  requirements: [
    "TC",
    "Boy (cm)",
    "Kilo (kg)",
    "Telefon Numarası",
    "Sigortalı Sayısı",
    "Sigortalıların Doğum Tarihi",
    "Sigortalıların Cinsiyeti",
    "Sigortalıların Yakınlık Derecesi (Eş / Çocuk / Anne / Baba / Kardeş)",
  ],
};

// Konut Sigortası
export const HomeInsurance = {
  title: "Konut Sigortası",
  options: [
    "DASK (Doğal Afet Sigortası)",
    "Konut Yangın Sigortası",
    "Deprem Sigortası",
  ],
  requirements: [
    "TC",
    "Doğum Tarihi",
    "Telefon Numarası",
    "Konutun Açık Adres Bilgisi",
    "Konutun Yapım Yılı",
    "Konutun Bulunduğu Kat",
    "Konutun Bulunduğu Kat Sayısı",
    "Kiracı mısınız, mülk sahibi misiniz?",
    "DASK Sigortası Yaptırılmış mı?",
    "Konut Türü (Apartman / Müstakil Ev / Villa / Dubleks / Tripleks)",
    "Konutun Brüt Metrekare Bilgisi",
    "Binanın Yapı Tipi (Betonarme / Ahşap / Çelik)",
    "Konutun Boş Kalma Süresi (Ay)",
    "Konutun Kullanım Amacı (Mesken / İşyeri / İkametgah / Depo)",
    "Konutun Sigorta Bedeli",
    "Konutun İçindeki Eşyaların Sigorta Bedeli",
  ],
};

// Seyahat Sigortası
export const TravelInsurance = {
  title: "Seyahat Sigortası",
  options: ["Yurtiçi Seyahat Sigortası", "Yurtdışı Seyahat Sigortası"],
  requirements: [
    "TC",
    "Doğum Tarihi",
    "Telefon Numarası",
    "Seyahat Başlangıç Tarihi",
    "Seyahat Bitiş Tarihi",
    "Seyahat Edilecek Ülke",
    "Pasaport Numarası",
    "Seyahat Amacı (Tatil / İş / Tedavi / Eğitim)",
  ],
};

// İşyeri Sigortası
export const BusinessInsurance = {
  title: "İşyeri Sigortası",
  options: ["İşyeri Yangın Sigortası", "İşyeri Sorumluluk Sigortası"],
  requirements: [
    "TC",
    "Doğum Tarihi",
    "Telefon Numarası",
    "İşyerinin Açık Adres Bilgisi",
    "İşyerinin Bulunduğu Kat",
    "İşyerinin yapım yılı",
    "İşyerinin bulunduğu bina yapı tipi (Betonarme / Ahşap / Çelik)",
    "İşyerinin bulunduğu binanın kat sayısı",
    "Kiracı mısınız, mülk sahibi misiniz?",
    "DASK Sigortası Yaptırılmış mı?",
    "Faaliyet konusu",
    "İşyerinin bulunduğu bina sigorta bedeli",
    "İşyerinin bulunduğu bina içindeki emtia/demirbaş sigorta bedeli",
    "Bina içindeki makine ve tesisat sigorta bedeli",
  ],
};

// Hayat Sigortası
export const LifeInsurance = {
  title: "Hayat Sigortası",
  options: ["Kredi Hayat Sigortası"],
  requirements: [
    "TC",
    "Doğum Tarihi",
    "Telefon Numarası",
    "Faiz Oranı (%)",
    "Kredi Tutarı",
    "Kredi Vadesi",
  ],
};

// Sorumluluk Sigortası
export const LiabilityInsurance = {
  title: "Sorumluluk Sigortası",
  options: ["Mesleki Sorumluluk Sigortası"],
  requirements: [
    "TC",
    "Doğum Tarihi",
    "Telefon Numarası",
    "Meslek Grubu",
    "Çalıştığı Kurum",
    "Mesleki Sorumluluk Sigortası Yaptırılacak Kişi Sayısı",
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
  LiabilityInsurance,
};

export const PolicyObj = {
  VehicleInsurance,
  HealthInsurance,
  HomeInsurance,
  TravelInsurance,
  BusinessInsurance,
  LifeInsurance,
  LiabilityInsurance,
  GeneralInsuranceType,
};

export const Policy = [
  {
    label: PolicyObj.BusinessInsurance.title,
    values: PolicyObj.BusinessInsurance.options,
    requirements: PolicyObj.BusinessInsurance.requirements,
  },

  {
    label: PolicyObj.HealthInsurance.title,
    values: PolicyObj.HealthInsurance.options,
    requirements: PolicyObj.HealthInsurance.requirements,
  },
  {
    label: PolicyObj.HomeInsurance.title,
    values: PolicyObj.HomeInsurance.options,
    requirements: PolicyObj.HomeInsurance.requirements,
  },

  {
    label: PolicyObj.LiabilityInsurance.title,
    values: PolicyObj.LiabilityInsurance.options,
    requirements: PolicyObj.LiabilityInsurance.requirements,
  },
  {
    label: PolicyObj.LifeInsurance.title,
    values: PolicyObj.LifeInsurance.options,
    requirements: PolicyObj.LifeInsurance.requirements,
  },

  {
    label: PolicyObj.TravelInsurance.title,
    values: PolicyObj.TravelInsurance.options,
    requirements: PolicyObj.TravelInsurance.requirements,
  },
  {
    label: PolicyObj.VehicleInsurance.title,
    values: PolicyObj.VehicleInsurance.options,
    requirements: PolicyObj.VehicleInsurance.requirements,
  },
];
