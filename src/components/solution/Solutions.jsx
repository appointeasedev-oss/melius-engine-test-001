```javascript
import React from 'react'
import SoluCards from './SoluCards'
import dev1 from '../../assets/dev1.png'
import dev2 from '../../assets/dev2.png'
import dev3 from '../../assets/dev3.png'
import dev4 from '../../assets/dev4.png'
import dev5 from '../../assets/dev5.png'
import dev6 from '../../assets/dev6.png'

const Solutions = () => {
  const solutionsData = [
    { icon: dev1, head: 'Mobile development', para: 'With the expertise of our development professionals, you can create intuitive mobile apps for iOS/Android or go cross-platform.' },
    { icon: dev2, head: 'Web development', para: 'With the aid of a responsive and dynamic company or eCommerce website, you may strengthen your online presence.' },
    { icon: dev3, head: 'Blockchain development', para: 'Cryptocurrency creation, wallet development, smart contract development, and multichain/hyperledger solutions are all possible with blockchain.' },
    { icon: dev4, head: 'Progressive Web Application', para: 'Tech startups, multinational corporations, and large-scale organisations can benefit from our progressive web app development services.' },
    { icon: dev5, head: 'E-commerce & CMS', para: 'To provide end-to-end Magento, Shopify, and WordPress development solutions, our eCommerce and CMS development specialists use best development techniques.' },
    { icon: dev6, head: 'Digital marketing', para: 'Our specialists will create digital marketing plans that will help you promote your business online.' }
  ]

  return (
    <div className='mt-10 px-2 max-w-[1600px] mx-auto'>
      <div className='flex flex-col gap-2 items-center'>
        <h6 className='text-sm uppercase '>Your choice of weapon</h6>
        <h2 className='text-center  text-[1.5rem] w-[98%] font-semibold leading-8'>Use our end-to-end digital solutions to grow your business.</h2>
      </div>
      <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-10 md:px-2 lg:px-4 xl:px-8'>
        {solutionsData.map((solution, index) => (
          <SoluCards key={index} {...solution} />
        ))}
      </div>
    </div>
  )
}

export default Solutions
```
# Auto improvement by Melius