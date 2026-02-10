```javascript
import React from 'react'

const ServiceItem = ({ item }) => {
  return (
    <div className='serPara flex gap-2 ml-3 mt-2 w-fit cursor-pointer hover:scale-105 transition-transform'>
      <i className="ri-smartphone-fill text-xl"></i>
      <h4 className='text-sm text-[1.1rem] font-medium text-gray-700 dark:text-gray-300'>{item}</h4>
    </div>
  )
}

export default ServiceItem
```
# Auto improvement by Melius