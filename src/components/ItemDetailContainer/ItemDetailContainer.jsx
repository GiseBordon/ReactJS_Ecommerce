
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import { getProductos } from '../../data/productos';



const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})
  const { productoId } = useParams()
  console.log(productoId)

 

  useEffect(() => {
    getProductos(productoId)
      .then(response => setProduct(response))
      .catch(error => console.log(error))
  }, [productoId])


  return (

    <>
      <ItemDetail
      product={product}
      />

    </>

  )

}

export default ItemDetailContainer