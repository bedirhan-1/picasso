"use client";

import WarningCard from "../(components)/cards/WarningCard";
import { BsCheckLg } from "react-icons/bs";
import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { Policy } from "../constants/policies";
import { InputTypesForInputBoxes } from "../constants/inputTypes";
import {
  Button,
  CountrySelect,
  DateInput,
  MeasurementInput,
  MultiOptionSelect,
  NumberInput,
  PassportInput,
  PercentageInput,
  PlateInput,
  RegistrationNumberInput,
  NumberSelect,
  TCKNInput,
  TextInput,
  YearSelect,
} from "../(components)";
import { ButtonTypes } from "../(components)/buttons/Button";
import PhoneInput from "react-phone-input-2";

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

  const policyRequirements: { [key: string]: string } = {}

  const getPolicyRequirements = (policy: PolicyOption) => {
    if (policy) {
      for (let i = 0; i < policy.requirements.length; i++) {
        policyRequirements[policy.requirements[i]] = InputTypesForInputBoxes[policy.requirements[i]]
      }
    }
    return policyRequirements
  }



  const thisPolicyRequirements: { [key: string]: any } = getPolicyRequirements(selectedPolicy as PolicyOption);

  const formSchema = Yup.object().shape(
    Object.keys(thisPolicyRequirements).reduce((acc, requirement) => {
      return {
        ...acc,
        [requirement]: Yup.string().required(`${requirement} zorunludur.`),
      };
    }, {})
  );


  const handlePolicyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const policyLabel = event.target.value;
    const policy = Policy.find((p) => p.label === policyLabel);
    if (policy) {
      setSelectedPolicy(policy);
      setSelectedOption(null);

      // Seçilen poliçe türüne göre zorunlu alanları ayarla
      getPolicyRequirements(policy)
    } else {
      setSelectedPolicy(null);
      setSelectedOption(null);
    }
  };

  const formik = useFormik({
    initialValues: {
      ...thisPolicyRequirements,
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const getInputComponent = (inputType: string, label: string) => {
    switch (inputType) {
      case "tc":
        return (
          <div className=" mb-6">
            <TCKNInput
              onChange={(newValue: string) => formik.setFieldValue(label, newValue)}
            />
          </div>
        );
      case "multiselectfamily":
        return (
          <div className="mb-6">
            <MultiOptionSelect
              options={[""]}
              onSelect={(newValue: string) => formik.setFieldValue(label, newValue)}
            />
          </div>
        );
      case "multiSelectGender":
        return (
          <div className="items-center flex mb-6">
            <MultiOptionSelect
              options={["Erkek", "Kadın"]}
              onSelect={(newValue: string) => formik.setFieldValue(label, newValue)}
            />
          </div>
        );
      case "selectNumber":
        return (
          <div className="mb-6">
            <NumberSelect
              onChange={(newValue: number) => formik.setFieldValue(label, newValue)}
            />
          </div>
        );
      case "registrationNumber":
        return (
          <div className="mb-6">
            <RegistrationNumberInput
              onChange={(newValue: string) => formik.setFieldValue(label, newValue)}
            />
          </div>
        );
      case "height":
      case "weight":
        return (
          <div className="mb-6">
            <MeasurementInput
              label={inputType === "height" ? "Boy" : "Kilo"}
              unit={inputType === "height" ? "cm" : "kg"}
              onChange={(newValue: string) => formik.setFieldValue(label, newValue)}
            />
          </div>
        );
      case "number":
        return (
          <div className="mb-6">
            <NumberInput
              onChange={(newValue: number) => formik.setFieldValue(label, newValue)}
            />
          </div>
        );
      case "date":
        return (
          <div className="mb-6">
            <DateInput
              onDateSelect={(selectedDate: string) => formik.setFieldValue(label, selectedDate)}
            />
          </div>
        );
      case "text":
        return (
          <div className="mb-6">
            <TextInput
              onChange={(newValue: string) => formik.setFieldValue(label, newValue)}
            />
          </div>
        );
      case "multiSelectTenant":
        return (
          <div className=" mb-6">
            <MultiOptionSelect
              options={["Kiracı", "Mülk Sahibi"]}
              onSelect={(selectedOption: string) => formik.setFieldValue(label, selectedOption)}
            />
          </div>
        );
      case "multiSelectHomeUsage":
        return (
          <div className="mb-6">
            <MultiOptionSelect
              options={["Mesken", "İşyeri", "İkametgah", "Depo", "Diğer"]}
              onSelect={(selectedOption: string) => formik.setFieldValue(label, selectedOption)}
            />
          </div>
        );
      case "multiSelectBuildingType":
        return (
          <div className="mb-6">
            <MultiOptionSelect
              options={["Ahşap", "Betonarme", "Çelik", "Kargir", "Diğer"]}
              onSelect={(selectedOption: string) => formik.setFieldValue(label, selectedOption)}
            />
          </div>
        );
      case "multiselectHomeType":
        return (
          <div className="mb-6">
            <MultiOptionSelect
              options={["Apartman", "Müstakil Ev", "Yalı", "Diğer"]}
              onSelect={(selectedOption: string) => formik.setFieldValue(label, selectedOption)}
            />
          </div>
        );
      case "multiSelectFamily":
        return (
          <div className="mb-6">
            <MultiOptionSelect
              options={["Eş", "Çocuk", "Anne", "Baba", "Diğer"]}
              onSelect={(selectedOption: string) => formik.setFieldValue(label, selectedOption)}
            />
          </div>
        );
      case "multiSelectTravelPurpose":
        return (
          <div className="items-center flex mb-6">
            <MultiOptionSelect
              options={["Tatil", "İş", "Tedavi", "Eğitim", "Diğer"]}
              onSelect={(selectedOption: string) => formik.setFieldValue(label, selectedOption)}
            />
          </div>
        );
      case "multiselectyn":
        return (
          <div className="items-center flex mb-6">
            <MultiOptionSelect
              options={["Evet", "Hayır"]}
              onSelect={(selectedOption: string) => formik.setFieldValue(label, selectedOption)}
            />
          </div>
        );
      case "plate":
        return (
          <div className="mb-6">
            <PlateInput
              onChange={(selectedPlate: string) => formik.setFieldValue(label, selectedPlate)}
            />
          </div>
        );
      case "year":
        return (
          <div className="mb-6">
            <YearSelect
              onChange={(selectedYear: number) => formik.setFieldValue(label, selectedYear)}
            />
          </div >
        );
      case "percentage":
        return (
          <div className="mb-6">
            <PercentageInput
              onChange={(newValue: string) => formik.setFieldValue(label, newValue)}
            />
          </div>
        );
      case "passportNumber":
        return (
          <div className="mb-6">
            <PassportInput
              onInput={(selectedPassport: string) => formik.setFieldValue(label, selectedPassport)}
            />
          </div>
        );
      case "countrySelect":
        return (
          <div className="mb-6">
            <CountrySelect
              selectCountry={(selectedCountry: string) => formik.setFieldValue(label, selectedCountry)}
            />
          </div>
        );
      case "selectJob":
        return (
          <div className="mb-6">
            <TextInput
              onChange={(newValue: string) => formik.setFieldValue(label, newValue)}
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
            onChange={(newValue: string) => {
              formik.setFieldValue(label, newValue)
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
    formik.setFieldValue("Poliçe Türü", event.target.value)
  };

  return (
    <div className="flex">
      <div className="p-8 w-[50%]" >
        <h1 className="text-2xl font-semibold bg-blue-500 p-4 text-white inline-block">Poliçe Formu Oluştur</h1>
        <div className="">
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
            <div>
              <WarningCard
                title="Lütfen yaptırmak istediğiniz sigorta türünü seçiniz"
                description="Örneğin Kasko için Kasko veya Araç Sigortası seçeneğini, ardından kasko seçeneğini seçmeniz gerekiyor."
                iconColor="red"
                icon={() => <div className="text-red-500">
                  <BsCheckLg size={36} />
                </div>
                }
              />
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
        {selectedPolicy && !selectedOption && (
          <div key="warning" id="warning-div">
            <WarningCard
              title="Lütfen yaptırmak istediğiniz sigorta türünü seçiniz"
              description={`${selectedPolicy.label} için ${selectedPolicy.values[0]} veya ${selectedPolicy.values[1]} seçeneğini, ardından ${selectedPolicy.label} seçeneğini seçmeniz gerekiyor.`}
              iconColor="red"
              icon={() => (
                <div className="text-red-500">
                  <BsCheckLg size={36} />
                </div>
              )}
            />
          </div>
        )}

        {selectedOption && selectedPolicy && (
          <>
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
                validationSchema={formSchema}
              >
                <form onSubmit={formik.handleSubmit}>
                  {selectedPolicy.requirements.map((requirement) => (
                    <div key={requirement} className="mb-6 text-black">
                      <label className="block mb-2">{requirement}:</label>
                      {getInputComponent(InputTypesForInputBoxes[requirement], requirement)}
                    </div>
                  ))}
                  <Button
                    text={"Form Gönder"}
                    buttonType={ButtonTypes.Primary}
                    isDisabled={!formik.isValid}
                    onClick={() => {
                      console.log(formik.values)
                    }}
                    type="submit"
                  />
                </form>
              </Formik>
            )}
            <Button
              text={"Formu doldurmak istemiyorum beni arayın"}
              buttonType={ButtonTypes.Tertiary}
              isDisabled={false}
              onClick={() => {
                console.log(formik.values)
                // setFormArray([])
                // setFormData([])
                // setSelectedPolicy(null)
                // window.scrollTo(0, 0)
              }}
              className="mt-4 underline text-blue-500"
            />
          </>
        )
        }
      </div>
      <div className="w-[50%] p-8">
        <div className="min-h-screen flex ">
          <div className="flex-grow p-4">
          </div>
          <div className="fixed top-50 right-10 p-4 w-[48%] shadow-md bg-blue-500 text-white">
            {formik.values && Object.keys(formik.values).map((key, index) => (
              <div key={index} className="flex justify-between border-b m-2">
                <div className="">{key}</div>
                <div className="max-w-[60%]">{formik.values[key]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default InsuranceForm;
