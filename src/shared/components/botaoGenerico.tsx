interface BotaoGenericoProps{
    texto: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

export default function BotaoGenerico({texto, onClick, className, disabled, type } : BotaoGenericoProps )
{
    return(
        <button className={className} onClick={onClick} disabled={disabled} type={type}>
            {texto}
        </button>
    )

}