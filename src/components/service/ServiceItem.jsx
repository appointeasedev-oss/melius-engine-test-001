```javascript
import React from 'react'

const ServiceItem = ({ item }) => {
  return (
    <div className='serPara flex gap-2 ml-3 mt-2 w-fit cursor-pointer'>
      <i className="ri-smartphone-fill"></i>
      <h4 className='text-sm text-[1.1rem] font-medium'>{item}</h4>
    </div>
  )
}

export default ServiceItem
```
# Auto improvement by Melius