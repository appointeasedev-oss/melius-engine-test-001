import React from 'react';

const Page1Slider = () => {
  const sliderItems = [
    { id: 1, title: 'Slider Item 1', content: 'Content for slider item 1' },
    { id: 2, title: 'Slider Item 2', content: 'Content for slider item 2' },
    { id: 3, title: 'Slider Item 3', content: 'Content for slider item 3' }
  ];

  return (
    <div className="page1-slider">
      {sliderItems.map((item) => (
        <div key={item.id} className="slider-item">
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Page1Slider;
# Auto improvement by Melius