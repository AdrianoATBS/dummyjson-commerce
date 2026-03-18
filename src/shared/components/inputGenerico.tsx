type Type = "text" | "email" | "password" | "number" | "search" | "tel" | "url" | "checkbox" | "radio" | "date" | "datetime-local" | "month" | "time" | "week";
interface InputGenericoProps {
    type?: Type;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    name?: string;

}

export default function InputGenerico({ placeholder, value, onChange, type, className }: InputGenericoProps) {
    return(
        <>
            <input type={type || "text"} placeholder={placeholder} value={value} onChange={onChange} className={className} />
        </>
    )
}