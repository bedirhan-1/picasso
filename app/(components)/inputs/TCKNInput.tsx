import React, { useState } from 'react';

interface TCKNInputProps {
    onChange: (selectedOption: string) => void;
}

const TCKNInput: React.FC<TCKNInputProps> = ({ onChange }) => {
    const [tckn, setTCKN] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const validateTCKN = (tcknNumber: string) => {
        const tcknRegex = /^[0-9]{11}$/;

        if (tcknRegex.test(tcknNumber)) {
            if (isValidTCKN(tcknNumber)) {
                setIsValid(true);
                setErrorMessage('');
            } else {
                setIsValid(false);
                setErrorMessage('Geçersiz TC');
            }
        } else {
            setIsValid(false);
            setErrorMessage('Geçersiz TC formatı');
        }
    };

    const isValidTCKN = (tcknNumber: string) => {
        const lastDigit = parseInt(tcknNumber[10], 10);
        const digits = tcknNumber.split('').map((digit) => parseInt(digit, 10));

        const sum = digits.slice(0, 10).reduce((acc, digit, index) => {
            return acc + digit * (index % 2 === 0 ? 1 : 2);
        }, 0);

        const controlDigit = (sum % 10 === 0 ? 0 : 10 - (sum % 10)) % 10;

        return lastDigit === controlDigit;
    };

    const handleTCKNChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTCKN = event.target.value;
        setTCKN(newTCKN);
        validateTCKN(newTCKN);
        onChange(newTCKN);
    };

    return (
        <div className="my-4">
            <input
                className={"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                type="text"
                value={tckn}
                onChange={handleTCKNChange}
                placeholder="Örnek: 12345678901"
            />
            {tckn.length === 11 && !isValid && <div className="text-red-500 text-xs mt-1">{errorMessage}</div>}
        </div>
    );
};

export default TCKNInput;
