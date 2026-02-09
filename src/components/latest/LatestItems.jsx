```jsx
import React from 'react'

const LatestItems = ({ img, head, readMoreHandler }) => {
  return (
    <div className='flex latestCard gap-4 sm:w-[30rem] md:w-[35rem] lg:mx-0 lg:w-[25rem] py-3 pr-4 mx-8 shadow-[0_2px_10px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-300'>
      <img className='h-14 latestImg' src={img} alt='Latest Thoughts Image'/>
      <div className='flex flex-col gap-4'>
        <h3 className='text-lg font-semibold'>{head}</h3>
        <button onClick={readMoreHandler} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'>
          Read More
        </button>
      </div>
    </div>
  )
}
```
# Auto improvement by Melius