import React from 'react';
import { BsArrowUp, BsArrowUpShort } from 'react-icons/bs';

interface NumberSelectProps {
    onChange: (newNumber: number) => void;
}

const NumberSelect: React.FC<NumberSelectProps> = ({ onChange }) => {
    const handleNumberChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newNumber = parseInt(event.target.value);
        onChange(newNumber);
    };

    const options = Array.from({ length: 100 }, (_, index) => (
        <option key={index + 1} value={index + 1}>
            {index + 1}
        </option>
    ));

    return (
        <div className="flex">
            <select
                onChange={handleNumberChange}
                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
                {options}
            </select>
        </div>
    );
};

export default NumberSelect;
