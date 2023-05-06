import React from 'react'
import { useState, useEffect } from 'react';
import { getProductos } from '../../data/productos'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()


  useEffect(() => {
    if (categoryId) {
      getProductos()
        .then(response => 
          setProductos(response.filter(productos => productos.category === categoryId))
        )
        .catch(error => 
          console.error(error)
        )
        .finally(() => setLoading(false))

    } else {
      getProductos()
        .then(response => 
          setProductos(response)
        )
        .catch(error => 
          console.error(error)
        )
        .finally(() => setLoading(false))

    }
  }, [categoryId])

   //console.log(categoryId)

  return (
    <div className='text-center'>
      <br />
      <h2>{greeting}</h2>
      {loading ? <h2> Cargando Productos ...</h2>
        :
        <ItemList productos={productos} />
      }
    </div>
  )

}

export default ItemListContainer