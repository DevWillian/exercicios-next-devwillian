import Titulo from "../../components/Titulo"

export default function usandoTitulo (){
      return (
           <div>
               <Titulo 
                  principal = "Página de Cdastro"
                  secundario = "Incluir, alterar e excluir coisas!"
                />
                <Titulo 
                  principal = "Página de Login"
                  secundario = "informe o seu email e senha"
                  pequeno={true}
                />
            
           </div>
      )
}      