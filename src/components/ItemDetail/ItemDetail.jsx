
import { ItemCount } from "../ItemCount/ItemCount"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getProductos } from '../../data/productos.js'
import { Card } from 'react-bootstrap';


//este es un componente funcional que me muestra el detalle de cada card

const ItemDetail = (product) => {

  const { categoryId } = useParams()
  const [stock, setStock] = useState(0);
  const onAdd = (cantidad) => console.log('cantidad de productos seleccionados', cantidad)

  /* console.log(product) */

  useEffect(() => {
    getProductos(categoryId)
      .then(producto => setStock(producto.stock));
  }, [categoryId]);

  return (
    <div className="Row">
      <div className="Col">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.id}</Card.Text>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>Precio: ${product.price}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col">
        <ItemCount stock={stock} inicio={1} onAdd={onAdd} />
      </div>
    </div>

  )
}

export default ItemDetail;