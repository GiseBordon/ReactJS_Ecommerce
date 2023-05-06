
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

//este componente contiene el contador de compra

//chequear si el stock es mayor a 0, si es mayor a 0, mostrar el contador, si es menor a 0, mostrar el cartel de sin stock  y deshabilitar el boton de agregar al carrito   



export const ItemCount = ({ stock, inicio, onAdd }) => {

    const [counter, setCounter] = useState(inicio);

    const agregar = () => {
        if (counter < stock) {
            //console.log(counter)
            setCounter(counter + 1);
        }
    }
    const quitar = () => {
        if (counter > inicio) {
            setCounter(counter - 1)
        }
    }
    const handleOnAdd = () => onAdd(counter)

        return (

            <>
                <h5> Cantidad: {counter}</h5>
                <div className='botones'>
                    <Button onClick={quitar} variant="info"> - </Button>
                    <Button onClick={agregar} variant="info"> + </Button>
                </div>
                <div className='botones'>
                    <Button variant="outline-info" onClick={handleOnAdd} >Agregar al Carrito</Button>
                </div>

            </>
          )
      
}