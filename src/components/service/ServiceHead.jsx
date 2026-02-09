```javascript
import React from 'react';

const ServiceHead = ({ head, iconClass }) => {
  const iconMap = {
    smartphone: 'ri-smartphone-fill',
    laptop: 'ri-laptop-fill',
    tablet: 'ri-tablet-fill',
    desktop: 'ri-desktop-fill',
  };

  const icon = iconMap[iconClass] || 'ri-smartphone-fill';

  return (
    <div className='serHead flex gap-4 cursor-pointer w-fit'>
      <i className={icon}></i>
      <h4 className='text-md'>{head}</h4>
    </div>
  );
};

export default ServiceHead;
```