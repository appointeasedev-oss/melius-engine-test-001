```javascript
import React from 'react'

const Page1Slider = ({ source }) => {
  return (
    <div className='w-full sm:w-[50%] lg:w-[40%] sm:mt-0 mt-10 p-4 pr-8 sm:overflow-hidden'>
      <img
        src={source}
        alt="Slider Image"
        className='sm:w-full object-cover h-96'
        loading="lazy"
        decoding="async"
        width={1920}
        height={1080}
        style={{ aspectRatio: '16/9' }}
      />
    </div>
  )
}

export default Page1Slider
```
# Auto improvement by Melius