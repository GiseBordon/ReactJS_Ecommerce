
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//componente funcional que me muestra la card de cada producto
const Item = ({ id, title, price, image }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{id}</Card.Text>
                    <Card.Text>Precio: ${price}</Card.Text>
                    <Link to={`/detail/${id}`}>
                        <Button className='btn btn-outline-info'>
                            Ver detalles
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item