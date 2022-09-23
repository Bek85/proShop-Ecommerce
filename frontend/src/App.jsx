import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/home/Home';

export default function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </>
  );
}
