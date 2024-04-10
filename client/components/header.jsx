import React, { useState } from 'react'
import  { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { history } from '../redux'

import { changeCurrency, getSortList } from "../redux/reducers/products"

const Header = () => {

  const [tog, setTog] = useState({
    'price': true,
    'title' : true
  }
  )
  const dispatch = useDispatch()
  // const historyPush = () => {
  //         history.push(`/basket`)
  // }
  const Click = (e) => {
    dispatch(changeCurrency(e.target.textContent))
  }

  const sortIt = (type) => {
    dispatch(getSortList(type, tog[type]? 'ab' : 'ba'))
    setTog(
      {...tog,
         [type]: !tog[type]
        })
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
    <nav className="flex mx-5 py-2">
          <button id="eur" className='p-2 mx-1 hover:bg-green-600 font-semibold hover:text-white px-2 rounded-full border hover:border-green-800' type="button" onClick={(e) => Click(e)}>EUR</button>
          <button id="usd" className='p-2 mx-1 hover:bg-green-600 font-semibold hover:text-white px-2 rounded-full border hover:border-green-800' type="button" onClick={(e) => Click(e)}>USD</button>
          <button id="cad" className='p-2 mx-1 hover:bg-green-600 font-semibold hover:text-white px-2 rounded-full border hover:border-green-800' type="button" onClick={(e) => Click(e)}>CAD</button>
    </nav>
    </nav>
    <nav className="flex justify-between border-green-700 pt-2 pb-3 m-h-screen">
         <nav className="flex mx-5">
             <button type="button" id="sort-price" className="flex bg-green-200 hover:bg-green-600 font-semibold hover:text-white px-2 rounded-full border hover:border-green-800"
              onClick={() => sortIt('price')}>Sort by price</button>
             <button type="button" id="sort-title" className="flex bg-green-200 hover:bg-green-600 font-semibold hover:text-white px-2 rounded-full border hover:border-green-800"
              onClick={() => sortIt('title')}>Sort by title</button>
        </nav>
        <nav id="order-count" className="flex px-8">
      <div className="flex items-center ">
        <div className="bg-indigo-200 mx-1">ddd</div>
        <button type="button" className=" hover:bg-green-600 font-semibold hover:text-white rounded-full px-6 border hover:border-green-800" onClick={()=>history.push(`/basket`)}>
          Basket
        </button>
      </div>
        {/* <div>
        <button type="button" onClick={historyPush}>Basket</button>
      </div> */}
          {/* <Link to="/basket">
            Basket
            <div>2856,34р</div>
          </Link> */}
        </nav>
    </nav>
    </nav>
   )
 }

Header.propTypes = {}

export default React.memo(Header)
