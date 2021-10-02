export default function repeticao1() {
    const listaAprovados = [
        "Jão",
        "Mary",
        "Anna",
        "Bya",
        "Carlão",
        "Danyel",
        "Lauurinha",
    ]

    function renderizarLista() {
        //mais facil do que a forma abaixo em comentario
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)

        }

        return (
            <ul>
                {renderizarLista()}
            </ul>
        )
    }

   // function renderizarLista() {

      //  const itens = []
       
     //   for (let i = 0; i < listaAprovados.length; i++) {
    //        itens.push(<li key={i}>{listaAprovados[i]}</li>)
            
    //    }