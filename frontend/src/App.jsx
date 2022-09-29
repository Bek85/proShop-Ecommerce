import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Footer from 'pro-shop/components/Footer';
import Header from 'pro-shop/components/Header';
import HomeScreen from 'pro-shop/screens/home';
import ProductScreen from 'pro-shop/screens/product';
import CartScreen from 'pro-shop/screens/cart';
import LoginScreen from 'pro-shop/screens/login';
import RegisterScreen from 'pro-shop/screens/register';
import ProfileScreen from 'pro-shop/screens/profile';
import ShippingScreen from 'pro-shop/screens/shipping';

export default function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/cart/:id" element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}
