import React from 'react'
import { useSelector } from 'react-redux'
import Head from './head'
import Header from './header'
import BasketList from './basketList'

// import { addToBasket } from '../redux/reducers/basket'

const Basket = () => {

  const BasketProducts = useSelector((store) => store.basket.basketProducts)

  return(
  <div>
    <Header />
    <Head title="Basket" />
    <div className="flex flex-col items-center bg-green-200 h-screen p-2">
      {Object.entries(BasketProducts).map((itemId) => {
        return (
        <div key={itemId}>
          <BasketProducts itemId={itemId} amount={BasketList[itemId]}/>
          {/* <BasketProducts itemId={id: itemId, amount: BasketList[itemId]}}/> */}
          </div>
        )
      })}
    </div>
  </div>
  )
  }

Basket.propTypes = {}

export default React.memo(Basket)
