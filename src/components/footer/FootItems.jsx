```javascript
import React from 'react'

const FootItems = (props) => {
  return (
    <li className='capitalize text-sm cursor-pointer hover:text-blue-600 transition-colors duration-200'>
      {props.item}
    </li>
  )
}

export default FootItems
```