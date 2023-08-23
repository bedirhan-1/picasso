import { useEffect, useState } from 'react';

interface Country {
    name: string;
    code: string;
}

interface Props {
    selectCountry: (selectedCountry: string) => void;
}

const CountrySelect: React.FC<Props> = ({ selectCountry }) => {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then((response) => response.json())
            .then((data) => {
                const countryData = data.map((country: { name: any; alpha2Code: any; }) => ({
                    name: country.name,
                    code: country.alpha2Code,
                }));
                setCountries(countryData);
            })
            .catch((error) => {
                console.error('Ülke verileri alınırken bir hata oluştu:', error);
            });
    }, []);

    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newCountry = event.target.value;
        selectCountry(newCountry);
    };

    return (
        <div>
            <select
                onChange={handleCountryChange}
                className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            >
                <option value=''>Seçiniz</option>
                {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                        {country.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CountrySelect;
