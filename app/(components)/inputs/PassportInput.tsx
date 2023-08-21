import { useState } from 'react';

interface PassportInputProps {
    onInput: (passportNumber: string) => void;
}

const PassportInput: React.FC<PassportInputProps> = ({ onInput }) => {
    const [passportNumber, setPassportNumber] = useState<string>(''); // Pasaport numarasını saklar

    const handlePassportNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPassportNumber = event.target.value;
        setPassportNumber(newPassportNumber);
        onInput(newPassportNumber);
    };

    return (
        <div className="my-4">
            <input
                id="passport"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={passportNumber}
                onChange={handlePassportNumberChange}
                placeholder="Örnek: A1234567"
            />
        </div>
    );
};

export default PassportInput;
