import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import "./style/App.css";
import "./style/Header.css";
import "./style/Main.css";
import "./style/Footer.css";

function App() {
  return (
    <>
      <div className="app">
        <header>
          <Navbar />
          <Hero />
        </header>
        <main>
          <Services />
          <Banner />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
