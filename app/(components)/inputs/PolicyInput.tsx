import PhoneInput from "react-phone-input-2";
import { InputTypesForInputBoxes } from "../../constants/inputTypes";

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
            case "number":
                return <input type="number" {...commonProps} />;
            case "date":
                return <input type="date" {...commonProps} />;

            case "text":
                return <input type="text" {...commonProps} />;
            case "booleanyn":
                return (
                    <div className="items-center flex">
                        <input type="radio" name="yesno" value="yes" />
                        <label className="ml-2">Evet</label>
                        <input type="radio" className="ml-6" name="yesno" value="no" />
                        <label className="ml-2">Hayır</label>
                    </div>
                );
            case "year":
                return <input type="yearpicker" {...commonProps} />;
            default:
                return null;
        }
    };

    return (
        <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
                {label}
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
                        width: "100%",
                    }}

                />
            )}

        </div>
    );
};

export default PolicyInput;
