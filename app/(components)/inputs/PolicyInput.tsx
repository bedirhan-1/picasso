import PhoneInput from "react-phone-input-2";
import { InputTypesForInputBoxes } from "../../constants/inputTypes";
import PlateInput from "./PlateInput";
import TCKNInput from "./TCKNInput";
import MeasurementInput from "./MeasurementInput";
import SelectNumberInput from "./SelectNumberInput";
import PassportInput from "./PassportInput";
import DateInput from "./DateInput";
import CountrySelect from "./CountrySelect";
import MultiOptionSelect from "./MultiOptionSelect";
import TextInput from "./TextInput";
import PercentageInput from "./PercentageInput";
import YearSelect from "./YearSelect";
import { useState } from "react";

interface formType {
    label: string,
    value: any
}

interface PolicyOption {
    inputType: keyof typeof InputTypesForInputBoxes;
    options?: string[];
    label: string;
    setPhoneNumber?: (phone: string) => void;
    setForm: (e: formType[]) => void;
}


const PolicyInput = ({ inputType, label, setPhoneNumber, setForm }: PolicyOption) => {
    const [formArray, setFormArray] = useState<Array<formType>>([]);
    const commonProps = {
        className: "border rounded p-2 w-full",
    };


    const createObjectArrayFromValues = (value: any, title: string) => {
        const index = formArray.findIndex((item: { label: string; }) => item.label === title);
        if (index !== -1) {
            formArray[index].value = value;
        } else {
            formArray.push(...formArray, { label: title, value: value });
        }
        setForm(formArray)
    }

    const getInputComponent = () => {
        switch (inputType) {
            case "tc":
                return (
                    <div className=" w-[200px] mb-6">
                        <TCKNInput
                            onChange={(newValue: string) => createObjectArrayFromValues(newValue, label)}
                        />
                    </div>
                );
            case "multiselectfamily":
                return (
                    <div className=" w-[200px] mb-6">
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
                    <div className=" w-[200px] mb-6">
                        <SelectNumberInput
                            min={1}
                            max={10}
                            step={1}
                            onSelect={(newValue: number) => createObjectArrayFromValues(newValue, label)}
                        />
                    </div>
                );
            case "height":
                return (
                    <div className=" w-[200px] mb-6">
                        <MeasurementInput label="Boy" unit="cm" onChange={
                            (newValue: string) => createObjectArrayFromValues(newValue, label)
                        } />
                    </div>
                );
            case "weight":
                return (
                    <div className=" w-[200px] mb-6">
                        <MeasurementInput label="Kilo" unit="kg" onChange={
                            (newValue: string) => createObjectArrayFromValues(newValue, label)
                        } />
                    </div>
                );
            case "number":
                return (
                    <div className=" w-[200px] mb-6">
                        <input type="number" {...commonProps}
                            onChange={(newValue) => createObjectArrayFromValues(newValue, label)}
                        />
                    </div>
                );
            case "date":
                return (
                    <div className=" w-[200px] mb-6">
                        <DateInput
                            onDateSelect={(selectedDate: string) => createObjectArrayFromValues(selectedDate, label)}
                        />
                    </div>
                );
            case "text":
                return (
                    <div className=" w-[50%] mb-6">
                        <TextInput
                            onChange={(newValue: string) => createObjectArrayFromValues(newValue, label)}
                        />
                    </div>
                );
            case "multiSelectTenant":
                return (
                    <div className=" w-[200px] mb-6">
                        <MultiOptionSelect
                            options={["Kiracı", "Mülk Sahibi"]}
                            onSelect={(selectedOption: string) => createObjectArrayFromValues(selectedOption, label)}
                        />
                    </div>
                );
            case "multiSelectHomeUsage":
                return (
                    <div className=" w-[200px] mb-6">
                        <MultiOptionSelect
                            options={["Mesken", "İşyeri", "İkametgah", "Depo", "Diğer"]}
                            onSelect={(selectedOption: string) => createObjectArrayFromValues(selectedOption, label)}
                        />
                    </div>
                );
            case "multiSelectBuildingType":
                return (
                    <div className=" w-[200px] mb-6">
                        <MultiOptionSelect
                            options={["Ahşap", "Betonarme", "Çelik", "Kargir", "Diğer"]}
                            onSelect={(selectedOption: string) => createObjectArrayFromValues(selectedOption, label)}
                        />
                    </div>
                );
            case "multiselectHomeType":
                return (
                    <div className=" w-[200px] mb-6">
                        <MultiOptionSelect
                            options={["Apartman", "Müstakil Ev", "Yalı", "Diğer"]}
                            onSelect={(selectedOption: string) => createObjectArrayFromValues(selectedOption, label)}
                        />
                    </div>
                );
            case "multiSelectFamily":
                return (
                    <div className=" w-[200px] mb-6">
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
                    <div className=" w-[200px]  mb-6">
                        <YearSelect
                            onChange={(selectedYear: number) => createObjectArrayFromValues(selectedYear, label)}
                        />
                    </div >
                );
            case "percentage":
                return (
                    <div className=" w-[200px] mb-6">
                        <PercentageInput
                            onChange={(newValue: string) => createObjectArrayFromValues(newValue, label)}
                        />
                    </div>
                );
            case "passportNumber":
                return (
                    <div className=" w-[200px] mb-6">
                        <PassportInput
                            onInput={(selectedPassport: string) => createObjectArrayFromValues(selectedPassport, label)}
                        />
                    </div>
                );
            case "countrySelect":
                return (
                    <div className=" w-[200px] mb-6">
                        <CountrySelect
                            selectCountry={(selectedCountry: string) => createObjectArrayFromValues(selectedCountry, label)}
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="">
            <label className="block mb-2 text-sm font-bold text-gray-700">
                {label} :
            </label>
            {getInputComponent()}
            {inputType === "phone" && (
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
                    onChange={(phone: string) => {
                        setPhoneNumber && setPhoneNumber(phone)
                        createObjectArrayFromValues(phone, label)
                    }}
                />
            )}
        </div>
    );
};

export default PolicyInput;

