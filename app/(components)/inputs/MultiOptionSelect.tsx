import { useState } from 'react';

interface MultiOptionSelectProps {
    options: string[];
    onSelect: (selectedOption: string) => void;
}

const MultiOptionSelect: React.FC<MultiOptionSelectProps> = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState<string>(''); // Seçilen seçeneği saklar

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value;
        setSelectedOption(newOption);
        onSelect(newOption);
    };

    return (
        <div>
            <select
                id="multiOption"
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={selectedOption}
                onChange={handleOptionChange}
            >
                <option value="" disabled hidden>Seçiniz ...</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default MultiOptionSelect;
