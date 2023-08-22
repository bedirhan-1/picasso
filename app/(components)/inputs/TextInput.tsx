import { useState } from 'react';

interface TextInputProps {
    value: string;
    onChange: (newValue: string) => void;
    placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder = '' }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        onChange(newValue);
    };

    return (
        <input
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
    );
};

export default TextInput;
