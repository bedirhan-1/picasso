import React, { useState } from 'react';

interface NumberInputProps {
    onChange: (newValue: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({ onChange }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(event.target.value);
        if (!isNaN(newValue)) {
            onChange(newValue);
        }
    };

    return (
        <div className="mb-4">
            <input
                className="w-24 p-2 border rounded focus:outline-none focus:border-blue-500"
                type="number"
                onChange={handleInputChange}
            />
        </div>
    );
};

export default NumberInput;
