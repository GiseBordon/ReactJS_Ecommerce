import React from 'react'
import Item from "../Item/Item";


const ItemList = ({ productos = [] }) => {
  return (
    <div>
      <h3>Productos</h3>
      <div>
        {productos.map(prod => <Item key={prod.id}{...prod} />)}
      </div>
    </div>
  )
}

export default ItemList