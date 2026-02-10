```javascript
import React from 'react'

const FootItems = ({ item, onClick, className }) => {
  const itemClassName = `capitalize text-sm cursor-pointer hover:text-blue-500 transition-colors duration-200 ${className || ''}`

  const handleClick = () => {
    if (onClick) onClick()
  }

  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && onClick) {
      onClick()
    }
  }

  return (
    <li
      className={itemClassName}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={item}
    >
      {item}
    </li>
  )
}

export default FootItems
```
# Auto improvement by Melius