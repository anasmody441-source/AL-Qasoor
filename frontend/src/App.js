import React from "react";
import "./App.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CartProvider } from "./contexts/CartContext";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="App">
          <Header />
          <main>
            <Hero />
            <About />
            <Menu />
            <Reviews />
            <Gallery />
            <Contact />
          </main>
          <Footer />
          <Cart />
          <Toaster position="top-center" richColors />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
