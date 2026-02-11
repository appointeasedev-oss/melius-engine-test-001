```javascript
import Hero from '../components/Hero';
import Page1 from '../components/Page1';
import Page1Slider from '../components/Page1Slider';
import Solutions from '../components/solution/Solutions';
import Service from '../components/service/Service';
import Card from '../components/card/Card';
import Form from '../components/form/Form';
import Latest from '../components/latest/Latest';
import Dev from '../components/deve/Dev';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <div className="container">
        <div className="home__content">
          <Page1 />
          <Page1Slider />
          <Solutions />
          <Service />
          <Card />
          <Form />
          <Latest />
          <Dev />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
```
# Auto improvement by Melius