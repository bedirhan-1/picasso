import PhoneInput from "react-phone-input-2";
import { InputTypesForInputBoxes } from "../../constants/inputTypes";
import PlateInput from "./PlateInput";
import TCKNInput from "./TCKNInput";
import MeasurementInput from "./MeasurementInput";
import SelectNumberInput from "./SelectNumberInput";
import GenderInput from "./GenderInput";
import CountryInput from "./CountryInput";
import PassportInput from "./PassportInput";
import DateInput from "./DateInput";
import CountrySelect from "./CountryInput";

interface PolicyOption {
    inputType: keyof typeof InputTypesForInputBoxes;
    options?: string[];
    label: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setPhoneNumber?: (phone: string) => void;
}

const PolicyInput = ({ inputType, label, onChange, setPhoneNumber }: PolicyOption) => {
    const commonProps = {
        className: "border rounded p-2 w-full",
        onChange: onChange,
    };

    const getInputComponent = () => {
        switch (inputType) {
            case "tc":
                return (
                    <div className=" w-[200px] mb-6">
                        <TCKNInput />
                    </div>
                );
            case "selectGender":
                return (
                    <div className="items-center flex mb-6">
                        <GenderInput
                            onSelect={(selectedGender: string) => console.log(selectedGender)}
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
                            onSelect={(selectedValue: any) => console.log(selectedValue)}
                        />
                    </div>
                );
            case "height":
                return (
                    <div className=" w-[200px] mb-6">
                        <MeasurementInput label="Boy" unit="cm" />
                    </div>
                );
            case "weight":
                return (
                    <div className=" w-[200px] mb-6">
                        <MeasurementInput label="Kilo" unit="kg" />
                    </div>
                );
            case "number":
                return (
                    <div className=" w-[200px] mb-6">
                        <input type="number" {...commonProps} />
                    </div>
                );
            case "date":
                return (
                    <div className=" w-[200px] mb-6">
                        <DateInput
                            onDateSelect={(selectedDate: string) => console.log(selectedDate)}
                        />
                    </div>
                );
            case "text":
                return (
                    <div className=" w-[50%] mb-6">
                        <input type="text" {...commonProps} />
                    </div>
                );
            case "booleanyn":
                return (
                    <div className="items-center flex mb-6">
                        <input type="radio" name="yesno" value="yes" />
                        <label className="ml-2">Evet</label>
                        <input type="radio" className="ml-6" name="yesno" value="no" />
                        <label className="ml-2">Hayır</label>
                    </div>
                );
            case "plate":
                return (
                    <div className="mb-6">
                        <PlateInput />
                    </div>
                );
            case "year":
                return (
                    <div className=" w-[200px]  mb-6">
                        <select>
                            <option value="" >Seçiniz...</option>
                            {/* get year from now - i */}
                            {Array.from(Array(200).keys()).map((i) => (
                                <option key={i} value={i} className="border rounded p-2">
                                    {new Date().getFullYear() - i}
                                </option>
                            ))}
                        </select>
                    </div>
                );
            case "passportNumber":
                return (
                    <div className=" w-[200px] mb-6">
                        <PassportInput
                            onInput={(selectedPassport: string) => console.log(selectedPassport)}
                        />
                    </div>
                );
            case "countrySelect":
                return (
                    <div className=" w-[200px] mb-6">
                        <CountrySelect
                            selectCountry={(selectedCountry: string) => console.log(selectedCountry)}
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
                        border: "1px solid #ced4da",
                        paddingLeft: "10px",
                    }}
                    containerStyle={{
                        width: "200px",
                        marginBottom: "20px",
                    }}

                />
            )}

        </div>
    );
};

export default PolicyInput;
