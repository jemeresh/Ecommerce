import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeCurrency, getSortList } from "../redux/reducers/products"

const CurrencyButton = () => {

  const dispatch = useDispatch()
    // const historyPush = () => {
  //         history.push(`/basket`)
  // }

  const Click = (e) => {
    dispatch(changeCurrency(e.target.textContent))
  }

  const [tog, setTog] = useState({
    'price': true,
    'title' : true
  }
  )

   const sortIt = (type) => {
    dispatch(getSortList(type, tog[type]? 'ab' : 'ba'))
    setTog(
      {...tog,
         [type]: !tog[type]
        })
  }

  return (
  <nav className="flex justify-between border-green-700 pt-2 pb-3 m-h-screen">
    <nav>
    <nav className="flex mx-5 py-2">
          <button id="eur" className='p-2 mx-1 hover:bg-green-600 font-semibold hover:text-white px-2 rounded-full border hover:border-green-800' type="button" onClick={(e) => Click(e)}>EUR</button>
          <button id="usd" className='p-2 mx-1 hover:bg-green-600 font-semibold hover:text-white px-2 rounded-full border hover:border-green-800' type="button" onClick={(e) => Click(e)}>USD</button>
          <button id="cad" className='p-2 mx-1 hover:bg-green-600 font-semibold hover:text-white px-2 rounded-full border hover:border-green-800' type="button" onClick={(e) => Click(e)}>CAD</button>
    </nav>
     <nav className="flex mx-5">
            <button type="button" id="sort-price" className="flex bg-green-200 hover:bg-green-600 font-semibold hover:text-white px-2 rounded-full border hover:border-green-800"
            onClick={() => sortIt('price')}>Sort by price</button>
            <button type="button" id="sort-title" className="flex bg-green-200 hover:bg-green-600 font-semibold hover:text-white px-2 rounded-full border hover:border-green-800"
            onClick={() => sortIt('title')}>Sort by title</button>
    </nav>
    </nav>
    </nav>
  )
}

CurrencyButton.propTypes = {}

export default React.memo(CurrencyButton)