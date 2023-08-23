"use client";
import React, { useState } from "react";
import { Policy } from "../constants/policies";
import PolicyInput from "../(components)/inputs/PolicyInput";
import { InputTypesForInputBoxes } from "../constants/inputTypes";
import Button, { ButtonTypes } from "../(components)/buttons/Button";

interface PolicyOption {
  label: string;
  values: string[];
  requirements: string[];
}

const InsuranceForm = () => {
  const [formData, setFormData] = useState<{ label: string, value: any }[]>();
  const [selectedPolicy, setSelectedPolicy] = useState<PolicyOption | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");
  const handlePolicyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const policyLabel = event.target.value;
    const policy = Policy.find((p) => p.label === policyLabel);
    if (policy) {
      setSelectedPolicy(policy);
      setSelectedOption(null);
    }
  };



  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="p-8 justify-center">
      <h1 className="text-2xl font-semibold mb-4">Poliçe Formu Oluştur</h1>
      <div className="mb-4">
        <label className="block mb-2">Yaptırmak istediğiniz sigorta türünü seçiniz:</label>
        <select
          onChange={handlePolicyChange}
          value={selectedPolicy?.label || ""}
          className="border rounded p-2 "
        >
          <option value="">Seçiniz...</option>
          {Policy.map((policy) => (
            <option key={policy.label} value={policy.label}>
              {policy.label}
            </option>
          ))}
        </select>
        {!selectedPolicy && (
          <div className="bg-slate-300 my-2 rounded-[10px]">
            <div className="text-center text-cyan-800 text-xl py-6">
              Lütfen uygun tercihleri yapınız. Örneğin aracınıza kasko yaptırmak istediğiniz bir senaryo için:
              <br />
              Araç Sigortasını seçip devamında "Kasko" seçeneğini seçmeniz gerekmektedir.
            </div>
          </div>
        )}
      </div>
      {selectedPolicy && (
        <div className="mb-4">
          <label className="block mb-2">Hangi tür {selectedPolicy.label.toLocaleLowerCase()} yaptırmak istiyorsunuz?</label>
          <select
            value={selectedOption || ""}
            onChange={handleOptionChange}
            className="border rounded p-2"
          >
            <option value="">Birini seçiniz...</option>
            {selectedPolicy.values.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
      {selectedOption && selectedPolicy && (
        <div>
          {selectedOption !== "" && selectedPolicy.requirements.length > 0 && (
            <div>
              <ul className="list-disc">
                {selectedPolicy.requirements.map((requirementValue) => (
                  <div key={requirementValue}>
                    <PolicyInput
                      inputType={InputTypesForInputBoxes[requirementValue]}
                      label={requirementValue}
                      setPhoneNumber={setPhoneNumber}
                      setForm={setFormData}
                    />
                  </div>
                ))}
              </ul>
            </div>
          )}
          <Button text={"Form Gönder"} onClick={() => console.log(formData)} buttonType={ButtonTypes.Secondary} isDisabled={false} />
        </div>
      )}
    </div>
  );
}

export default InsuranceForm;
