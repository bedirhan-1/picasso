import { useState } from 'react';

interface DateInputProps {
    onDateSelect: (selectedDate: string) => void;
}

const DateInput: React.FC<DateInputProps> = ({ onDateSelect }) => {
    const [selectedDate, setSelectedDate] = useState<string>(''); // Seçilen tarihi saklar

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newDate = event.target.value;
        setSelectedDate(newDate);
        onDateSelect(newDate);
    };

    return (
        <div className="my-4">
            <input
                id="date"
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
            />
        </div>
    );
};

export default DateInput;
