import React from 'react'
import { useSelector } from 'react-redux'
import Head from './head'
import Header from './header'
import BasketList from './basketList'

// import { addToBasket } from '../redux/reducers/basket'

const Basket = () => {

  const basketList = useSelector((s) => s.basket.basketProducts)
  const calculate = useSelector((s) => s.basket.totalAmount)
  const price = useSelector((s) => s.basket.totalPrice)
  const currency = useSelector((store) => store.products.currency)

  const rates = () => {
    if (currency === 'USD') {
      return 1
    }
    if (currency === 'EUR') {
      return 0.92694
    }
      return 1.3542
  }

  return(
  <div>
    <Header />
    <Head title="Basket" />
    <div className="flex flex-col items-center bg-green-200 h-screen p-2">
      {Object
      .keys(basketList)
      .filter((id) => typeof basketList[id] !== 'undefined')
      .map((itemId) => {
        return (
        <div key={itemId}>
          <BasketList item={{id: itemId, amount: basketList[itemId].amount }}/>
          </div>

        )
      })}
      <div>
        <div>Total amount:{calculate}</div>
        <div>Total price:{(price * rates()).toFixed(2)} {currency}</div>
      </div>

    </div>
  </div>
  )
  }

Basket.propTypes = {}

export default React.memo(Basket)
