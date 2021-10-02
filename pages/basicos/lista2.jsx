function gerarLista() {
    const lista = [
        // eslint-disable-next-line react/jsx-key
        <span>1,</span>,
        // eslint-disable-next-line react/jsx-key
        <span>2,</span>,
        // eslint-disable-next-line react/jsx-key
        <span>3,</span>,
        // eslint-disable-next-line react/jsx-key
        <span>4,</span>,
        // eslint-disable-next-line react/jsx-key
        <span>5,</span>,
    ]
    return lista
}

export default function lista2() {
    return (
        <div>
            {gerarLista()}
        </div>
    )  
}