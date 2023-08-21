import { useState } from "react";

interface GenderInputProps {
  onSelect: (selectedGender: string) => void;
}

const GenderInput: React.FC<GenderInputProps> = ({ onSelect }) => {
  const [selectedGender, setSelectedGender] = useState<string>(""); // Seçilen cinsiyeti saklar

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newGender = event.target.value;
    setSelectedGender(newGender);
    onSelect(newGender);
  };

  return (
    <div>
      <select
        id='gender'
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        value={selectedGender}
        onChange={handleGenderChange}
      >
        <option value=''>Seçiniz</option>
        <option value='Erkek'>Erkek</option>
        <option value='Kadın'>Kadın</option>
      </select>
    </div>
  );
};

export default GenderInput;
