import Footer from "./components/footer";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Projects from "./pages/projects";

function App() {
  return (
    <div className="bg-neutral-950">
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
