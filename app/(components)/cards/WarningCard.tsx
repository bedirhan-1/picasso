import { IconType } from "react-icons";

interface WarningCardProps {
    title: string;
    description: string;
    icon?: IconType;
    iconColor: string;
    className?: string;
}

const WarningCard: React.FC<WarningCardProps> = ({ title, description, icon, iconColor, className }) => {
    return (
        <div className={`flex flex-col items-center justify-center w-full py-10 bg-white rounded-xl shadow-md border border-gray-100 my-5 ${icon ? "p-4" : null} ${className ?? ""}`}>
            {icon &&
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-100">
                    {icon ? icon({ size: 32, color: iconColor }) : null}
                </div>}
            <h1 className="text-2xl font-bold text-center">{title}</h1>
            <p className="text-sm text-center text-gray-500">{description}</p>
        </div>
    );
}

export default WarningCard;