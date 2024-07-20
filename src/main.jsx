import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar.jsx";
import "./main.css";
import Container from "./Container.jsx";
import Footer from "./Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Container />
    <Footer />
  </React.StrictMode>
);
