import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col} from "react-bootstrap";

import photo from './images/BatuhanOzturk-CV-Photo.png';
import Projects from "./components/projects";
import Header from "./components/header";
import About from "./components/about";
import Footer from "./components/footer"

function App() {
  return (
      <>
        <Header />
        <About />
        <Projects />
        <Footer />
      </>
  );
}

export default App;
