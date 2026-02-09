```javascript
import React from 'react'

const ServiceItem = ({ item, icon = "ri-smartphone-fill" }) => {
  return (
    <div className='serPara flex gap-2 ml-3 mt-2 w-fit cursor-pointer'>
      <i className={icon}></i>
      <h4 className='text-sm text-[1.1rem]'>{item}</h4>
    </div>
  )
}

export default ServiceItem
```