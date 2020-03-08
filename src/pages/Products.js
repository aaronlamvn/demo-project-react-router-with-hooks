import React, { useState, useEffect, useContext } from 'react';
import {
    Container, Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap'
import { CartContext } from '../contexts/Cart'

import axios from 'axios';

function Products(props) {

    const [products, setProducts] = useState([])
    const {addToCart} = useContext(CartContext);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('https://z4mu3.sse.codesandbox.io/products');
            setProducts(products.concat(res.data));       
        }
        fetchData();
    }, [])

    return (
        <Container>
            <h2>Products</h2>
            <Row>
                {products.map((product) => (
                    <Col sm={4}>
                        <Card>
                            <CardImg top width="100%"
                                src={product.imageUrl}
                                alt="Card image cap" />
                            <CardBody>
                                <CardTitle>{product.name}</CardTitle>
                                <CardText>{product.description}</CardText>
                                    <Button onClick={addToCart}>Add to cart</Button>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}


export default Products;