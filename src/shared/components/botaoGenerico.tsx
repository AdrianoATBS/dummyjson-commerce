interface BotaoGenericoProps{
    texto: string;
    onClick: () => void;
    ClassName?: string;
    disabled?: boolean;
}

export default function BotaoGenerico({texto, onClick, ClassName, disabled } : BotaoGenericoProps )
{
    return(
        <button className={ClassName} onClick={onClick} disabled={disabled}>{texto}
        </button>
    )

}