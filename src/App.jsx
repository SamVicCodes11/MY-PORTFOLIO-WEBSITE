import Nav from "./components/Nav";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Experience from "./pages/experience/Experience";
import Footer from "./pages/footer/Footer";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Services from "./pages/services/Services";
import Testimonials from "./pages/testimonials/Testimonials";

import { motion } from "framer-motion";

function App() {
  return (
    <div>
      <Home />
      <motion.div
         initial="hidden"
         whileInView="visible"
         animate="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 0.5, delay: 0.5 }}
         variants={{
           hidden: { opacity: 0, y: 50, scale: 0.95 },
           visible: { opacity: 1, y: 0,scale: 1 },
         }}
      // initial={{ opacity: 0, y: 100 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.5, delay: 0.25 }}
      
      >
        <Nav />
      </motion.div>
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
