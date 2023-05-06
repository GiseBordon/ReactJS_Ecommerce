import React from 'react'
import cart  from "../CartWidget/assets/cartWidget.png";

//aca esta el icono de carrito que informa la cantidad de productos agregados
export const CartWidget = () => {
  return (
    <>
    <img src={cart} width = {40} alt="carrito" />
    {/* contenido hardcodeado */}
    </>
    
  )
}
