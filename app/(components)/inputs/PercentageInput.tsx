import React, { useState } from 'react';

interface PercentageInputProps {
    onChange: (newValue: string) => void; // Yüzdelik değerini güncellemek için geri çağrı işlevi
    placeholder?: string;
}

const PercentageInput: React.FC<PercentageInputProps> = ({ onChange, placeholder = '' }) => {
    const [inputValue, setInputValue] = useState<string>();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newInputValue = event.target.value;
        const regex = /^[0-9%]*$/;
        if (regex.test(newInputValue)) {
            setInputValue(newInputValue);
            onChange(newInputValue);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
            />
        </div>
    );
};

export default PercentageInput;
