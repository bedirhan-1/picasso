interface Country {
  name: string;
  code: string;
}

export async function fetchCountries(): Promise<Country[]> {
  try {
    const response = await fetch("https://restcountries.com/v2/all");
    if (!response.ok) {
      throw new Error("Ülke verileri alınamadı.");
    }
    const data = await response.json();
    const countryData = data.map((country: { name: any; alpha2Code: any }) => ({
      name: country.name,
      code: country.alpha2Code,
    }));
    return countryData;
  } catch (error) {
    console.error("Ülke verileri alınırken bir hata oluştu:", error);
    throw error;
  }
}

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export const makeNameStringCorrect = (e: string) => {
  return e.at(0)?.toUpperCase() + e.slice(1).toLowerCase();
};
