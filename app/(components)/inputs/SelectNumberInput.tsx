import { useState } from 'react';

interface SelectNumberInputProps {
    min: number;
    max: number;
    step: number;
    onSelect: (selectedValue: number) => void;
}

const SelectNumberInput: React.FC<SelectNumberInputProps> = ({
    min,
    max,
    step,
    onSelect,
}) => {
    const [selectedValue, setSelectedValue] = useState<number>(min);

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(event.target.value);
        if (!isNaN(newValue) && newValue >= min && newValue <= max) {
            setSelectedValue(newValue);
            onSelect(newValue);
        }
    };

    return (
        <div className="my-4">
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                min={min}
                max={max}
                step={step}
                value={selectedValue}
                onChange={handleValueChange}
            />
        </div>
    );
};

export default SelectNumberInput;
