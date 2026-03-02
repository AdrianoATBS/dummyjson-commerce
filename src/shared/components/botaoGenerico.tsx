interface BotaoGenericoProps{
    texto: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

export default function BotaoGenerico({texto, onClick, className, disabled } : BotaoGenericoProps )
{
    return(
        <button className={className} onClick={onClick} disabled={disabled}>{texto}
        </button>
    )

}