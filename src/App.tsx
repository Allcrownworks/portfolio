import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Testimonial from "./Pages/Testimonial";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";

const App = () => {
  return (
    <div className="overflow-hidden overflow-x-hidden">
        <BrowserRouter>
      <Header />
      <div className="min-h-screen overflow-hidden overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
    </div>
  
  );
};

export default App;
