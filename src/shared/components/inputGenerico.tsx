type Type = "text" | "email" | "password" | "number" | "search" | "tel" | "url";
interface InputGenericoProps {
    type?: Type;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;

}

export default function InputGenerico({ placeholder, value, onChange, type, className }: InputGenericoProps) {
    return(
        <>
            <input type={type || "text"} placeholder={placeholder} value={value} onChange={onChange} className={className} />
        </>
    )
}