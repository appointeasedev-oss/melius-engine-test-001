```javascript
import React from 'react'

const ServiceHead = (props) => {
  const { head, icon } = props;

  return (
    <div className='serHead flex gap-4 cursor-pointer w-fit'>
      <i className={icon}></i>
      <h4 className='text-md '>{head}</h4>
    </div>
  )
}

export default ServiceHead
```
# Auto improvement by Melius