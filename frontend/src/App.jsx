import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Footer from 'pro-shop/components/Footer';
import Header from 'pro-shop/components/Header';
import HomeScreen from 'pro-shop/screens/home';
import ProductScreen from 'pro-shop/screens/product';
import CartScreen from 'pro-shop/screens/cart';

export default function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/cart/:id" element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}
