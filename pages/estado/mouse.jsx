import { useState } from "react"

export default function mouse () {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const arrayX = useState(0)
    let x = arrayX[0]
    const alterarX = arrayX[1]

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const arrayY = useState(0)
    let y = arrayY[0]
    const alterarY = arrayY[1]



    const estilo = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#222",
            color: "#fff",
            height: "100vh"
    }
    
    function quandoMover(ev) {
        alterarX(ev.clientX)
        alterarY(ev.clientY)
    }

    return (
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )

}