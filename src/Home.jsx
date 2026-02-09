```jsx
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './index.css';
import Header from './Header';
import Footer from './components/footer/Footer';
import Dev from './components/deve/Dev';
import Solutions from './components/solution/Solutions';
import Service from './components/service/Service';
import Form from './components/form/Form';
import Card from './components/card/Card';
import Latest from './components/latest/Latest';
import Blog from './pages/Blog';
import About from './pages/about/About';
import ScrollToTop from './ScrollToTop';
import Hero from './components/Hero';

function Home() {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const service = useRef(null);
  const items = useRef(null);
  const outerDiv = useRef(null);
  const process = useRef(null);
  const proItems = useRef(null);
  const slideMenu = useRef(null);

  let serviceClick = () => {
    setToggle(!toggle);
  };

  let processClick = () => {
    setToggle2(!toggle2);
  };

  let menuClick = () => {
    setMenuToggle(!menuToggle);
  };

  useEffect(() => {
    if (service.current) {
      if (toggle) {
        service.current.style.borderBottom = "2px solid #FFB600";
        items.current.style.height = "fit-content";
        outerDiv.current.style.height = "70vh";
      } else {
        service.current.style.borderBottom = "2px solid transparent";
        items.current.style.height = "0px";
        outerDiv.current.style.height = "0px";
      }
    }

    if (process.current) {
      if (toggle2) {
        process.current.style.borderBottom = "2px solid #FFB600";
        proItems.current.style.height = "fit-content";
        proItems.current.style.paddingBottom = "5px";
      } else {
        process.current.style.borderBottom = "2px solid transparent";
        proItems.current.style.height = "0px";
        proItems.current.style.paddingBottom = "0px";
      }
    }

    if (slideMenu.current) {
      if (menuToggle) {
        slideMenu.current.style.height = "fit-content";
      } else {
        slideMenu.current.style.height = "0px";
      }
    }
  }, [toggle, toggle2, menuToggle]);

  return (
    <Router>
      <ScrollToTop />
      <div className="body">
        <Header menuClick={menuClick} />
        <div className="slide-menu" ref={slideMenu}>
          <div className="slide-items">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/process">Process</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/developments">Developments</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <Hero />
        <div className="service" ref={service}>
          <h1 onClick={serviceClick}>Services</h1>
          <div className="items" ref={items}>
            <div className="outer-div" ref={outerDiv}>
              <div className="item">
                <h3>Service 1</h3>
                <p>Description of Service 1</p>
              </div>
              <div className="item">
                <h3>Service 2</h3>
                <p>Description of Service 2</p>
              </div>
              <div className="item">
                <h3>Service 3</h3>
                <p>Description of Service 3</p>
              </div>
            </div>
          </div>
        </div>
        <div className="process" ref={process}>
          <h1 onClick={processClick}>Process</h1>
          <div className="pro-items" ref={proItems}>
            <div className="pro-item">
              <h3>Step 1</h3>
              <p>Description of Step 1</p>
            </div>
            <div className="pro-item">
              <h3>Step 2</h3>
              <p>Description of Step 2</p>
            </div>
            <div className="pro-item">
              <h3>Step 3</h3>
              <p>Description of Step 3</p>
            </div>
          </div>
        </div>
        <Solutions />
        <Dev />
        <Latest />
        <Card />
        <Form />
        <Footer />
      </div>
    </Router>
  );
}

export default Home;
```