import React, { useState } from 'react';

interface PercentageInputProps {
    onChange: (newValue: string) => void; // Yüzdelik değerini güncellemek için geri çağrı işlevi
    placeholder?: string;
}

const PercentageInput: React.FC<PercentageInputProps> = ({ onChange, placeholder = '' }) => {
    const [inputValue, setInputValue] = useState<string>();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newInputValue = event.target.value;
        // Sadece rakam ve % işareti içeren değeri kabul eder
        const regex = /^[0-9%]*$/;
        if (regex.test(newInputValue)) {
            setInputValue(newInputValue);
            onChange(newInputValue);
        }
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <span className="text-gray-500">%</span>
            </div>
        </div>
    );
};

export default PercentageInput;
