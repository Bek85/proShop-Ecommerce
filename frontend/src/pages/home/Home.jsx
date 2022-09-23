import { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import Product from '../../components/Product';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const getProducts = async () => {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      };
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}
