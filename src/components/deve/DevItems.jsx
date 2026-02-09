```tsx
import React from 'react'

type DevItemsProps = {
  icons: string
  name: string
}

const DevItems: React.FC<DevItemsProps> = ({ icons, name }) => {
  const containerClasses = 'flex items-center flex-col gap-2 cursor-pointer hover:shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-200 py-2 px-4 rounded-lg'
  const iconClasses = 'w-12 h-12 object-contain'

  return (
    <div className={containerClasses} role='listitem'>
      <img
        className={iconClasses}
        src={icons}
        alt={`Icon for ${name}`}
      />
      <h5 className='capitalize text-md'>{name}</h5>
    </div>
  )
}

export default DevItems
```