import { useState } from 'react';

interface PlateInputProps {
    onChange: (selectedOption: string) => void;
}

const PlateInput: React.FC<PlateInputProps> = ({ onChange }) => {
    const [plate, setPlate] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const validatePlate = (plateNumber: string) => {
        const plateRegex = /^[0-9]{2}\s[A-Z]{1,3}\s[0-9]{3}$/;
        if (plateRegex.test(plateNumber)) {
            setIsValid(true);
            setErrorMessage('');
        } else {
            setIsValid(false);
            setErrorMessage('Geçersiz plaka formatı');
        }
    };

    const handlePlateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPlate = event.target.value;
        setPlate(newPlate);
        validatePlate(newPlate);
        onChange(newPlate);
    };

    return (
        <div className="">
            <input
                className={`shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!isValid ? 'border-red-500' : ''
                    }`}
                type="text"
                value={plate}
                onChange={handlePlateChange}
                placeholder="Örnek: 34 ABC 123"
            />
            {!isValid && <div className="text-red-500 text-xs mt-1">{errorMessage}</div>}
        </div>
    );
};

export default PlateInput;
