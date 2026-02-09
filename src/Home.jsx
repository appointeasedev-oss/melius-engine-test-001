```javascript
import React, { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import "./index.css";
import Page1 from "./components/Page1";
import logo from "./assets/logo.png";
import ServiceHead from "./components/service/ServiceHead";
import ServiceItem from "./components/service/ServiceItem";
import menu from "./assets/menu.png";
import Footer from "./components/footer/Footer";
import CardPage from "./components/card/CardPage";
import FormPage from "./components/form/FormPage";
import Solutions from "./components/solution/Solutions";
import Dev from "./components/deve/Dev";
import Latest from "./components/latest/Latest";
import Header from './Header'

const Home = () => {
  const service = useRef();
  const items = useRef();
  const outerDiv = useRef();
  const [toggle, setToggle] = useState(false);

  const serviceClick = () => {
    const newToggle = !toggle;
    setToggle(newToggle);

    if (newToggle) {
      service.current.style.borderBottom = "2px solid #FFB600";
      items.current.style.height = "fit-content";
      outerDiv.current.style.height = "70vh";
    } else {
      service.current.style.borderBottom = "2px solid transparent";
      items.current.style.height = "0px";
      outerDiv.current.style.height = "0px";
    }
  };

  const [toggle2, setToggle2] = useState(false);
  const process = useRef();
  const proItems = useRef();

  const processClick = () => {
    const newToggle2 = !toggle2;
    setToggle2(newToggle2);

    if (newToggle2) {
      process.current.style.borderBottom = "2px solid #FFB600";
      proItems.current.style.height = "fit-content";
      proItems.current.style.paddingBottom = "5px";
    } else {
      process.current.style.borderBottom = "2px solid transparent";
      proItems.current.style.height = "0px";
      proItems.current.style.paddingBottom = "0px";
    }
  };

  const slideMenu = useRef();
  const [menuToggle, setMenuToggle] = useState(false);

  const menuClick = () => {
    const newMenuToggle = !menuToggle;
    setMenuToggle(newMenuToggle);
    if (newMenuToggle) {
      slideMenu.current.style.height = "fit-content";
    } else {
      slideMenu.current.style.height = "0px";
    }
  };

  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isProcessOpen, setIsProcessOpen] = useState(false);

  return (
    <div className="relative ">

      <div className="h-[100vh] w-[100vw]">
        <Hero />
      </div>
      <div className="main py-3 mx-auto max-w-[1700px]">
        <div className="header w-[100vw] pr-2">
          <Header />

          <Page1 />
          <Solutions />
          <Dev />
          <CardPage />
          <Latest />
        </div>
      </div>
      <div className="max-1700px mx-auto w-screen">
        <FormPage />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
```
# Auto improvement by Melius