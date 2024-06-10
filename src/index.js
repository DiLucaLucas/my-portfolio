import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/navbar";
import Content from "./components/content";
import Footer from "./components/footer";
import Skills from "./components/skills";
import Projects from "./components/projects";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar />
    <Content />
    <Skills />
    <Projects />
    <Footer />
  </>
);
