
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { MyEstadoGlobalContext } from '../context/MyEstadoGlobalContext';


export function Product({ item }) {

    const { products, setProducts } = React.useContext(MyEstadoGlobalContext);

    const { id,
        title,
        thumbnailUrl } = item;

    const adddToCart = (item) => {
        const index = products.findIndex((p) => p.id === item.id);
        if (index === -1) {
            setProducts([...products, { ...item, cantidad: 1 }]);
        } else {
            const updatedCart = [...products];
            updatedCart[index].cantidad++;
            setProducts(updatedCart);
        }
    }
    const removeFromCart = (item) => {
        const index = products.findIndex((p) => p.id === item.id);
        if (index !== -1) {
          const updatedCart = [...products];
          if (updatedCart[index].cantidad > 1) {
            updatedCart[index].cantidad--;
            setProducts(updatedCart);
          } else {
            updatedCart.splice(index, 1);
            setProducts(updatedCart);
          }
        }
      };
    return (
        <Card style={{ width: '18rem', margin: 5 }}>
            <Card.Img variant="top" src={thumbnailUrl} />
            <Card.Body>
                <Card.Title> producto {id}</Card.Title>
                <Card.Text>
                    {title}
                    <br />
                    Precio: {item.porcent_dolar}$
                    <br />
                    Cantidad: {item.cantidad}
                </Card.Text>
                <Button variant="primary" onClick={() => adddToCart(item)} >Add to Cart</Button>
                <Button variant="danger" onClick={() => removeFromCart(item)} >Delete one</Button>
            </Card.Body>
        </Card>)
}
