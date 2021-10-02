function acao1(){
    console.log("acao1")
}


export default function botao () {

    function acao2(){
        console.log("acao2")
    }
    
    function acao5 (e) {
        console.log(e)
    }

    function acao6 (e) {
        console.log(e)
    }

    return (
        <div>
            <button onClick= {acao1}>click 1</button>

            <button onClick= {acao2}>click 2</button>

            <button onClick= {function() {
                console.log("acao3")
            }}>click 3</button>

            <button onClick= {() => console.log("acao4")}>click 4</button>

            <button onClick= {acao5}>click 5</button>

            <button onClick= {e => acao6(e.altKey)}>click 6</button>
        </div>
    )
}