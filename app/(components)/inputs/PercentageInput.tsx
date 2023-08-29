import React from 'react';
interface PercentageInputProps {
    onChange: (newValue: string) => void; // Yüzdelik değerini güncellemek için geri çağrı işlevi
    placeholder?: string;
}

const PercentageInput: React.FC<PercentageInputProps> = ({ onChange, placeholder = '' }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newInputValue = event.target.value;
        onChange(newInputValue);
    };

    return (
        <div>
            <input
                type="text"
                onChange={handleInputChange}
                placeholder={placeholder}
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
            />
        </div>
    );
};

export default PercentageInput;
