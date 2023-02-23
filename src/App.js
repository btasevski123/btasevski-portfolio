import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Header, Work, Skills, Testimonial, Footer } from "./container";
import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
