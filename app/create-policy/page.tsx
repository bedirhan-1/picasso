"use client";
import React, { useState } from "react";
import { Policy } from "../constants/policies";
import PolicyInput from "../(components)/inputs/PolicyInput";
import { InputTypesForInputBoxes } from "../constants/inputTypes";
import Button, { ButtonTypes } from "../(components)/buttons/Button";
import PhoneInput from "react-phone-input-2";
import { Form, Formik } from "formik";
import CountrySelect from "../(components)/inputs/CountrySelect";
import DateInput from "../(components)/inputs/DateInput";
import MeasurementInput from "../(components)/inputs/MeasurementInput";
import MultiOptionSelect from "../(components)/inputs/MultiOptionSelect";
import NumberInput from "../(components)/inputs/NumberInput";
import PassportInput from "../(components)/inputs/PassportInput";
import PercentageInput from "../(components)/inputs/PercentageInput";
import PlateInput from "../(components)/inputs/PlateInput";
import RegistrationNumberInput from "../(components)/inputs/RegistrationNumberInput";
import NumberSelect from "../(components)/inputs/SelectNumberInput";
import TCKNInput from "../(components)/inputs/TCKNInput";
import TextInput from "../(components)/inputs/TextInput";
import YearSelect from "../(components)/inputs/YearSelect";

interface PolicyOption {
  label: string;
  values: string[];
  requirements: string[];
}
interface formType {
  label: string,
  value: any
}

const InsuranceForm = () => {
  const [formArray, setFormArray] = useState<Array<formType>>([]);
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

  const createObjectArrayFromValues = (value: any, title: string) => {
    const index = formArray.findIndex((item: { label: string; }) => item.label === title);
    if (index !== -1) {
      formArray[index].value = value;
    } else {
      formArray.push({ label: title, value: value });
    }
    setFormData(formArray)
  }

  const getInputComponent = (inputType: string, label: string) => {
    switch (inputType) {
      case "tc":
        return (
          <div className=" mb-6">
            <TCKNInput
              onChange={(newValue: string) => createObjectArrayFromValues(newValue, label)}
            />
          </div>
        );
      case "multiselectfamily":
        return (
          <div className="mb-6">
            <MultiOptionSelect
              options={[""]}
              onSelect={(newValue: string) => createObjectArrayFromValues(newValue, label)}
            />
          </div>
        );
      case "multiSelectGender":
        return (
          <div className="items-center flex mb-6">
            <MultiOptionSelect
              options={["Erkek", "Kadın"]}
              onSelect={(newValue: string) => createObjectArrayFromValues(newValue, label)}
            />
          </div>
        );
      case "selectNumber":
        return (
          <div className="mb-6">
            <NumberSelect
              onChange={(newValue: number) => createObjectArrayFromValues(newValue, label)}
            />
          </div>
        );
      case "height":
        return (
          <div className="mb-6">
            <MeasurementInput
              label="Boy"
              unit="cm"
              onChange={(newValue: string) => createObjectArrayFromValues(newValue, label)}
            />
          </div>
        );
      case "registrationNumber":
        return (
          <div className="mb-6">
            <RegistrationNumberInput
              onChange={(newValue: string) => createObjectArrayFromValues(newValue, label)}
            />
          </div>
        );
      case "weight":
        return (
          <div className="mb-6">
            <MeasurementInput label="Kilo" unit="kg" onChange={
              (newValue: string) => createObjectArrayFromValues(newValue, label)
            } />
          </div>
        );
      case "number":
        return (
          <div className="mb-6">
            <NumberInput
              onChange={(newValue: number) => createObjectArrayFromValues(newValue, label)}
            />
          </div>
        );
      case "date":
        return (
          <div className="mb-6">
            <DateInput
              onDateSelect={(selectedDate: string) => createObjectArrayFromValues(selectedDate, label)}
            />
          </div>
        );
      case "text":
        return (
          <div className="mb-6">
            <TextInput
              onChange={(newValue: string) => createObjectArrayFromValues(newValue, label)}
            />
          </div>
        );
      case "multiSelectTenant":
        return (
          <div className=" mb-6">
            <MultiOptionSelect
              options={["Kiracı", "Mülk Sahibi"]}
              onSelect={(selectedOption: string) => createObjectArrayFromValues(selectedOption, label)}
            />
          </div>
        );
      case "multiSelectHomeUsage":
        return (
          <div className="mb-6">
            <MultiOptionSelect
              options={["Mesken", "İşyeri", "İkametgah", "Depo", "Diğer"]}
              onSelect={(selectedOption: string) => createObjectArrayFromValues(selectedOption, label)}
            />
          </div>
        );
      case "multiSelectBuildingType":
        return (
          <div className="mb-6">
            <MultiOptionSelect
              options={["Ahşap", "Betonarme", "Çelik", "Kargir", "Diğer"]}
              onSelect={(selectedOption: string) => createObjectArrayFromValues(selectedOption, label)}
            />
          </div>
        );
      case "multiselectHomeType":
        return (
          <div className="mb-6">
            <MultiOptionSelect
              options={["Apartman", "Müstakil Ev", "Yalı", "Diğer"]}
              onSelect={(selectedOption: string) => createObjectArrayFromValues(selectedOption, label)}
            />
          </div>
        );
      case "multiSelectFamily":
        return (
          <div className="mb-6">
            <MultiOptionSelect
              options={["Eş", "Çocuk", "Anne", "Baba", "Diğer"]}
              onSelect={(selectedOption: string) => createObjectArrayFromValues(selectedOption, label)}
            />
          </div>
        );
      case "multiSelectTravelPurpose":
        return (
          <div className="items-center flex mb-6">
            <MultiOptionSelect
              options={["Tatil", "İş", "Tedavi", "Eğitim", "Diğer"]}
              onSelect={(selectedOption: string) => createObjectArrayFromValues(selectedOption, label)}
            />
          </div>
        );
      case "multiselectyn":
        return (
          <div className="items-center flex mb-6">
            <MultiOptionSelect
              options={["Evet", "Hayır"]}
              onSelect={(selectedOption: string) => createObjectArrayFromValues(selectedOption, label)}
            />
          </div>
        );
      case "plate":
        return (
          <div className="mb-6">
            <PlateInput
              onChange={(selectedPlate: string) => createObjectArrayFromValues(selectedPlate, label)}
            />
          </div>
        );
      case "year":
        return (
          <div className="mb-6">
            <YearSelect
              onChange={(selectedYear: number) => createObjectArrayFromValues(selectedYear, label)}
            />
          </div >
        );
      case "percentage":
        return (
          <div className="mb-6">
            <PercentageInput
              onChange={(newValue: string) => createObjectArrayFromValues(newValue, label)}
            />
          </div>
        );
      case "passportNumber":
        return (
          <div className="mb-6">
            <PassportInput
              onInput={(selectedPassport: string) => createObjectArrayFromValues(selectedPassport, label)}
            />
          </div>
        );
      case "countrySelect":
        return (
          <div className="mb-6">
            <CountrySelect
              selectCountry={(selectedCountry: string) => createObjectArrayFromValues(selectedCountry, label)}
            />
          </div>
        );
      case "selectJob":
        return (
          <div className="mb-6">
            <TextInput
              onChange={(newValue: string) => createObjectArrayFromValues(newValue, label)}
            />
          </div>
        );

      case "phone":
        return (
          <PhoneInput
            country={"tr"}
            inputProps={{
              name: "phone",
              required: true,
            }}
            specialLabel=""
            inputStyle={{
              width: "100%",
              height: "40px",
              borderRadius: "5px",
              border: "none",
              paddingLeft: "10px",
            }}
            containerStyle={{
              width: "200px",
              marginBottom: "20px",
              border: "none"
            }}
            regions={"europe"}
            onChange={(phone: string) => {
              setPhoneNumber && setPhoneNumber(phone)
              createObjectArrayFromValues(phone, label)
            }}
            containerClass="shadow appearance-none border rounded text-gray-700 leading-tight"
          />
        );
      default:
        return null;
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
            <Formik
              initialValues={{
                ...selectedPolicy.requirements.reduce(
                  (acc, requirement) => ({ ...acc, [requirement]: "" }),
                  {}
                ),
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                {selectedPolicy.requirements.map((requirement) => (
                  <div key={requirement} className="mb-6">
                    <label className="block mb-2">{requirement}</label>
                    {getInputComponent(InputTypesForInputBoxes[requirement], requirement)}
                  </div>
                ))}
              </Form>
            </Formik>
          )}
          <Button
            text={"Form Gönder"}
            onClick={() => {
              console.log(formData)
            }}
            buttonType={ButtonTypes.Secondary}
            isDisabled={false} />
          <Button
            text={"Formu Temizle"}
            onClick={() => {
              setFormArray([])
              setFormData([])
            }}
            buttonType={ButtonTypes.Secondary}
            isDisabled={false}
          />
        </div>
      )}
    </div>
  );
}

export default InsuranceForm;
