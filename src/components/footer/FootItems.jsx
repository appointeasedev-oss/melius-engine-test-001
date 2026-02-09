```javascript
import React from 'react'

const FootItems = ({ item, onClick }) => {
  return (
    <li
      className='capitalize text-sm cursor-pointer hover:text-blue-500 transition-colors duration-200'
      onClick={onClick}
    >
      {item}
    </li>
  )
}

export default FootItems
```
# Auto improvement by Melius