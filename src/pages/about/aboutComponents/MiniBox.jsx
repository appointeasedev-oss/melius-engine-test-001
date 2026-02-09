```javascript
import React from 'react'

const MiniBox = ({ icon, head, para }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <img className='w-22 md:w-30 lg:w-22' src={icon} alt='Icon image'/>
        <div className='flex flex-col gap-3'>
          <h3 className='text-2xl text-center font-bold'>{head}</h3>
          <p className='text-center text-[0.9rem] text-gray-600'>{para}</p>
        </div>
    </div>
  )
}

export default MiniBox
```