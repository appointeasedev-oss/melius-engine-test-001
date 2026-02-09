```javascript
import React from 'react';
import Slide from './Page1Slider';
import { slides } from './Page1Content';

const Page1 = () => {
  const slideCount = slides.length;
  const slideWidth = 100 / slideCount;

  return (
    <div className="page1">
      <div className="page1__slider">
        <div className="page1__slides" style={{ width: `${slideCount * 100}%` }}>
          {slides.map((slide, index) => (
            <Slide
              key={index}
              head={slide.head}
              para={slide.para}
              imgSrc={slide.imgSrc}
              style={{ width: `${slideWidth}%` }}
            />
          ))}
        </div>
      </div>
      <div className="page1__arrows">
        <button className="page1__arrow page1__arrow--left">←</button>
        <button className="page1__arrow page1__arrow--right">→</button>
      </div>
    </div>
  );
};

export default Page1;
```