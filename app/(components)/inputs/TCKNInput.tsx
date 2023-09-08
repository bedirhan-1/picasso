import React, { useState } from 'react';

interface TCKNInputProps {
    onChange: (selectedOption: string) => void;
    setIsValidTC: (isValid: boolean) => void;
}

const TCKNInput: React.FC<TCKNInputProps> = ({ onChange, setIsValidTC }) => {
    const [tckn, setTCKN] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    function TCNOKontrol(TCNO: string) {
        const hatali = ['11111111110', '22222222220', '33333333330', '44444444440', '55555555550', '66666666660', '7777777770', '88888888880', '99999999990'];

        if (TCNO.length !== 11) {
            setIsValid(false);
            setIsValidTC(false);
            setErrorMessage('TC Kimlik Numarası 11 haneli olmalıdır.');
            return false;
        }
        if (isNaN(Number(TCNO))) {
            setIsValid(false);
            setIsValidTC(false);
            setErrorMessage('TC Kimlik Numarası sadece rakamlardan oluşmalıdır.');
            return false;
        }
        if (TCNO[0] === '0') {
            setIsValid(false);
            setIsValidTC(false);
            setErrorMessage('TC Kimlik Numarası 0 ile başlayamaz.');
            return false;
        }

        let tek = 0;
        let cift = 0;

        for (let i = 0; i < 9; i++) {
            const digit = Number(TCNO[i]);
            if (i % 2 === 0) {
                tek += digit;
            } else {
                cift += digit;
            }
        }

        tek *= 7;
        const sonuc = Math.abs(tek - cift);

        if (sonuc % 10 !== Number(TCNO[9])) {
            setIsValid(false);
            setIsValidTC(false);
            setErrorMessage('Geçersiz TC Kimlik Numarası');
            return false;
        }

        let TCToplam = 0;
        for (let i = 0; i < 10; i++) {
            TCToplam += Number(TCNO[i]);
        }

        if (TCToplam % 10 !== Number(TCNO[10])) {
            setIsValid(false);
            setIsValidTC(false);
            setErrorMessage('Geçersiz TC Kimlik Numarası');
            return false;
        }

        if (hatali.includes(TCNO)) {
            setIsValid(false);
            setIsValidTC(false);
            setErrorMessage('Geçersiz TC Kimlik Numarası');
            return false;
        }

        setIsValid(true);
        setIsValidTC(true);
        setErrorMessage('');
        return true;
    }

    const handleTCKNChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTCKN = event.target.value;
        setTCKN(newTCKN);
        TCNOKontrol(newTCKN);
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
            {tckn.length >= 11 && <div className={`${isValid ? "text-green-700" : "text-red-500"} font-semibold text-xs mt-1`}>{errorMessage}</div>}
        </div>
    );
};

export default TCKNInput;
