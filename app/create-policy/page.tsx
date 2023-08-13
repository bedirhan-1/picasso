"use client";

import { useState } from "react";
import { Policy } from "../constants/policies";
import Button, { ButtonTypes } from "../(components)/buttons/Button";

const options = Policy;

const Selection = () => {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTitle(e.target.value);
    setSelectedValue(null);
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };

  const selectedValues = options.find(
    (option) => option.label === selectedTitle
  )?.values;

  const isButtonDisabled =
    !selectedTitle || (!selectedValue && selectedTitle !== null);
  const buttonText = isButtonDisabled
    ? "Lütfen Seçimlerinizi Tamamlayınız..."
    : "Devam Et";
  const buttonType = isButtonDisabled
    ? ButtonTypes.Secondary
    : ButtonTypes.Primary;

  const renderPlaceholderOption = () => {
    if (selectedTitle === null || selectedValue === null) {
      return (
        <option value='' disabled hidden>
          Seçiniz...
        </option>
      );
    }
    return null;
  };

  return (
    <div className='max-w-md mx-auto mt-4 p-4'>
      <h1 className='text-2xl font-bold mb-4'>Sigorta Türü Seçin</h1>
      <div>
        <select
          value={selectedTitle || ""}
          onChange={handleTitleChange}
          className='block w-full py-2 px-3 border border-gray-300 rounded-md mb-4'
        >
          {renderPlaceholderOption()}
          {options.map((option) => (
            <option key={option.label} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {selectedValues && (
        <div>
          <div>
            <select
              value={selectedValue || ""}
              onChange={handleValueChange}
              className='block w-full py-2 px-3 border border-gray-300 rounded-md mb-4'
            >
              {renderPlaceholderOption()}
              {selectedValues.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      <Button
        text={buttonText}
        onClick={() => {
          console.log(selectedTitle, selectedValue);
        }}
        isDisabled={isButtonDisabled}
        buttonType={buttonType}
      />
    </div>
  );
};

export default Selection;
