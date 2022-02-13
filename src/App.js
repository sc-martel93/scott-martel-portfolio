import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <main className="App">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
