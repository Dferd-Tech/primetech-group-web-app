import React from "react";
import "./App.css"; // ✅ integrate styling here

import Navbar from "./components/Navbar";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <h1>Welcome to PRIMETECH GROUP Web App</h1>
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
