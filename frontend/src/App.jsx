import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/home/Home';
import ProductPage from './pages/product/ProductPage';

export default function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}
