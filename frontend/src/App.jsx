import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to ProShop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}
