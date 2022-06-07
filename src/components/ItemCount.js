import React, { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial);
    
    const sumar = () => {
        if (stock !== contador) {
        setContador(contador + 1 );
        }
    }

    const restar = () => {
        if (contador > 1) {
        setContador(contador - 1);
        }
    }
    return (
        <div className="contador">            
            <p className="botonC0">{contador}</p>
            <button className="botonC" onClick={restar}>-</button>
            <button className="botonC" onClick={sumar}>+</button>
            <button className="botonC1" onClick ={onAdd} >Confirmar</button>
        </div>
    )
}

export default ItemCount