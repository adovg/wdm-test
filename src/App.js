import "./App.css";
import { Container, Row } from "react-bootstrap";
import Header from "./Components/Header/Header";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Contact />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
