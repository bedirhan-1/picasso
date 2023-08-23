import React, { useState } from 'react';

interface YearSelectProps {
    onChange: (newYear: number) => void;
}

const YearSelect: React.FC<YearSelectProps> = ({ onChange }) => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1900 }, (_, index) => currentYear - index);
    const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newYear = parseInt(event.target.value);
        onChange(newYear);
    };

    return (
        <select
            onChange={handleYearChange}
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
            {years.map((year) => (
                <option key={year} value={year}>
                    {year}
                </option>
            ))}
        </select>
    );
};

export default YearSelect;
