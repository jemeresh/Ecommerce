import React from 'react'
import  { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { history } from '../redux'

import CurrencyButton  from './currencyandsort'


const Header = () => {

  const total = useSelector((s) => s.basket.totalPrice)
  const currency = useSelector((s) => s.products.currency)
  const rates = () => {
    if (currency === 'USD') {
      return 1
    }
    if (currency === 'EUR') {
      return 0.92694
    }
      return 1.3542
  }



 return (
  <nav className="bg-green-200">
    <nav className="bg-green-200 font-mono">
      <Link to="/main">
         <div>
          <nav className="flex border-2 border-dotted justify-between border-green-600 hover:border-green-800 m-h-screen font-semibold p-4">
               <nav id="brand-name" className="text-xl  hover:text-lg ">Magazine</nav>
          </nav>
        </div>
      </Link>
    </nav >
    <nav className="flex justify-between">
        <CurrencyButton/>
        <nav className='flex px-20 '>
          <nav>{(total * rates()).toFixed(2)} {currency}
          <button type="button" className="hover:bg-green-600 font-semibold hover:text-white rounded-full border hover:border-green-800 px-6 my-8 mx-6" onClick={()=>history.push(`/basket`)}>Cart</button>
          </nav>
      </nav>
     </nav>
    </nav>

   )
 }

Header.propTypes = {}

export default React.memo(Header)
