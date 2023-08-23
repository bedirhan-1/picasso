import React, { useState } from 'react';

// Seri numarası doğrulama işlevi
const validateRegistrationNumber = (registrationNumber: string): boolean => {
    // Seri numarasının uzunluğunu kontrol edin (örneğin, 10 karakter olmalıdır).
    if (registrationNumber.length !== 10) {
        return false;
    }

    // Seri numarasının belirli bir deseni takip etmesini sağlayın
    const pattern = /^[A-Z0-9]{10}$/; // Örnek bir desen (büyük harf ve rakamlardan oluşan 10 karakter)

    return pattern.test(registrationNumber);
};

// Seri Numarası Girişi bileşeni
interface RegistrationNumberInputProps {
    onChange: (newValue: string, isValid: boolean) => void;
}

const RegistrationNumberInput: React.FC<RegistrationNumberInputProps> = ({ onChange }) => {
    const [value, setValue] = useState<string>('');
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        onChange(event.target.value, validateRegistrationNumber(event.target.value));
    };

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                className={`shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${value.length === 10 ? (validateRegistrationNumber(value) ? 'border-green-500' : 'border-red-500') : ''}`}
                placeholder="Tescil Belge Seri No"
            />
            {value.length === 10 && !validateRegistrationNumber(value) && <div className="text-red-500 text-xs mt-1">Geçersiz seri numarası</div>}
        </div>
    );
};

export default RegistrationNumberInput;
