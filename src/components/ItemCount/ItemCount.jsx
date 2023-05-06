
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

//este componente contiene el contador de compra

/* Este componente permite al usuario seleccionar una cantidad de artículos. 
El componente ItemCount recibe tres propiedades: stock, inicio y onAdd. 
La propiedad stock representa el número máximo de artículos que se pueden seleccionar. 
La propiedad inicio representa el valor inicial del contador. 
La propiedad onAdd es una función que se llama cuando se hace clic en el botón “Agregar al Carrito”.

El componente utiliza el hook useState para realizar un seguimiento del conteo actual. 
El conteo se puede incrementar haciendo clic en el botón “➕” y disminuir haciendo clic en el botón “➖”. 
El conteo se muestra utilizando un elemento <h5>. */

export const ItemCount = ({stock, inicio, onAdd}) => {

    const [counter, setCounter] = useState(inicio);

    const agregar = () => {
        if(counter < stock) {
            console.log(counter)
            setCounter(counter + 1);
        }
    }
    const quitar = () => {
        if(counter > inicio) {
            setCounter(counter - 1)
        }
    }
    const handleOnAdd = () => onAdd(counter)

    return (

        <>
            <h5> Cantidad: {counter}</h5>
            <div className='botones'>
                <Button onClick={quitar} variant="info">➖</Button>
                <Button onClick={agregar} variant="info">➕</Button>
            </div>
            <div className='botones'>
                <Button variant="outline-info" onClick={handleOnAdd} >Agregar al Carrito</Button>
            </div>

        </>

    )
}


