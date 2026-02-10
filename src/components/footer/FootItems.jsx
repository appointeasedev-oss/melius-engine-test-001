```javascript
import React from 'react'

const FootItems = ({ item, onClick, className }) => {
  const itemClassName = `capitalize text-sm cursor-pointer hover:text-blue-500 transition-colors duration-200 ${className || ''}`

  return (
    <li
      className={itemClassName}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick()
        }
      }}
    >
      {item}
    </li>
  )
}

export default FootItems
```
# Auto improvement by Melius