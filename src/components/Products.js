import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Product } from './Product'

export function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                json = json.map((item, index)=> {
                    return {
                        ...item,
                        porcent_dolar: (index + 1) * 10
                    }
                })
                setProducts(json)
            }
            );
    },[])

    return (
        <div className="App card-q" >
            <Container>
                <div className="card-q" >
                    {
                        products.map((item, index) => 
                            <Product key= {index} item={item} />
                        )
                    }
                </div>
            </Container>
        </div>
    );
}

