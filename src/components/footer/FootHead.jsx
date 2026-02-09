```javascript
import React from 'react'

const FootHead = ({ head, className = '' }) => {
  return (
    <h3 className={`text-2xl uppercase font-semibold text-gray-800 dark:text-gray-100 ${className}`}>
      {head}
    </h3>
  )
}

export default FootHead
```
# Auto improvement by Melius