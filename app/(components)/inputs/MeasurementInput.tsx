import { useState } from 'react';

interface MeasurementInputProps {
    label: string;
    unit: string;
}

const MeasurementInput: React.FC<MeasurementInputProps> = ({ label, unit }) => {
    const [measurement, setMeasurement] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const validateMeasurement = (value: string) => {
        const numericValue = parseFloat(value);

        if (!isNaN(numericValue) && numericValue > 0) {
            setIsValid(true);
            setErrorMessage('');
        } else {
            setIsValid(false);
            setErrorMessage(`Geçersiz ${label} bilgisi`);
        }
    };

    const handleMeasurementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setMeasurement(newValue);
        validateMeasurement(newValue);
    };

    return (
        <div className="my-4">
            <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!isValid ? 'border-red-500' : ''
                    }`}
                type="number"
                step="0.01"
                value={measurement}
                onChange={handleMeasurementChange}
                placeholder={`Örnek: ${label === 'Kilo' ? 80 : 180} ${unit}`}
            />
            {!isValid && <div className="text-red-500 text-xs mt-1">{errorMessage}</div>}
        </div>
    );
};

export default MeasurementInput;
