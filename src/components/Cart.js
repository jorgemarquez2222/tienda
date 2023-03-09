import React, {  useEffect } from 'react';
import { MyEstadoGlobalContext } from '../context/MyEstadoGlobalContext';
import { useNavigate } from 'react-router-dom';


export function Cart({ items = [] }) {
  const { products } = React.useContext(MyEstadoGlobalContext);
  const navigate = useNavigate();

  const getCantidad = () => {
    return products.reduce((total, product) => {
      return total += product.cantidad;
    }, 0);
  };

  const toCart = () => {
    console.log("Ir al carrito")
    navigate('/cart', { replace: true });
  }


  useEffect(() => {
  }, [products])

  return (
    <div>
      <span onClick={() => toCart()}>
        contenido del carrito: 
        {
          products &&
          getCantidad() 
        }
      </span>

    </div>
  );
}
