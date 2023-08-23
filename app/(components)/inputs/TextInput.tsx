import { useState } from 'react';

interface TextInputProps {
    onChange: (text: string) => void;
    placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({ onChange, placeholder = '' }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        onChange(newValue);
    };

    return (
        <input
            type="text"
            onChange={handleInputChange}
            placeholder={placeholder}
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
    );
};

export default TextInput;
