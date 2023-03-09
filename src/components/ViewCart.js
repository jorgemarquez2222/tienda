import React, { useEffect } from 'react';
import { MyEstadoGlobalContext } from '../context/MyEstadoGlobalContext';
import Container from 'react-bootstrap/Container';
import { Product } from './Product';
import Button from 'react-bootstrap/Button';
export function ViewCart({ items = [] }) {
  const { products } = React.useContext(MyEstadoGlobalContext);

  const getTotal = () => {
    return products.reduce((total, product) => {
      return total + product.porcent_dolar * product.cantidad;
    }, 0);
  };

  const getCantidad = () => {
    return products.reduce((total, product) => {
      return total += product.cantidad;
    }, 0);
  };

  const pay = () => {
    console.log('Pagar', products)
    console.log('tortal a pagar', getTotal())
    alert("Vas a pagar en total " + getTotal() + "$")
  }

  useEffect(() => {

  }, [products])

  return (
    <div className="App card-q" >
      <Container>
        Total del carito: {getTotal()}$
        <br />
        Cantidad de productos: {getCantidad()}
        <br />
        {
          getCantidad() > 0 ?
            <Button variant="primary" onClick={() => pay()} >Pagar</Button>
            : null
        }
        <div className="card-q" >
          {
            products &&
            products.map((item, index) =>
              <Product key={index} item={item} />

            )
          }

        </div>
      </Container>
    </div>
  );
}
