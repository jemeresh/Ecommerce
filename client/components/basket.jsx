import React from 'react'
import { useSelector } from 'react-redux'
import Head from './head'
import Header from './header'
import BasketList from './basketList'

// import { addToBasket } from '../redux/reducers/basket'

const Basket = () => {

  const basketList = useSelector((s) => s.basket.basketProducts)
  return(
  <div>
    <Header />
    <Head title="Basket" />
    <div className="flex flex-col items-center bg-green-200 h-screen p-2">
      {Object.keys(basketList).filter((id) => typeof basketList[id] !== 'undefined').map((itemId) => {
        return (
        <div key={itemId}>
          {/* <BasketProducts itemId={itemId} amount={BasketList[itemId]}/> */}
          <BasketList item={{id: itemId, amount: basketList[itemId]}}/>
          </div>
        )
      })}
    </div>
  </div>
  )
  }

Basket.propTypes = {}

export default React.memo(Basket)
