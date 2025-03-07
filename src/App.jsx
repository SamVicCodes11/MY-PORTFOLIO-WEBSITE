import Nav from "./components/Nav";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Experience from "./pages/experience/Experience";
import Footer from "./pages/footer/Footer";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Services from "./pages/services/Services";
import Testimonials from "./pages/testimonials/Testimonials";


function App() {

  return (
    <div>
      <Home />

      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
