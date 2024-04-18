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
  const { type, direction } = useSelector((store) => store.products.sort)

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
    <div className="flex flex-col bg-green-200 w-full h-screen p-2">
      {Object
      .values(basketList)
      .filter((good) => typeof basketList[good.id] !== 'undefined')
      .sort((a, b) => {
    if (type === 'title' && direction === 'ab') {
      return (a.title.localeCompare(b.title))
    }
    if (type === 'title' && direction === 'ba') {
      return (b.title.localeCompare(a.title))
    }
    if (type === 'price' && direction === 'ab') {
      return (a.price - b.price)
    }
      return (b.price - a.price)
    })
      .map((item) => {
        return (
        <div key={item.id} className="flex justify-around w-full  ">
          <BasketList item={{id: item.id, amount:item.amount }}/>
          </div>

        )
      })}
      <div>
        <div className=" flex justify-center">Total amount:{calculate}</div>
        <div className=" flex justify-center">Total price:{(price * rates()).toFixed(2)} {currency}</div>
      </div>

    </div>
  </div>
  )
  }

Basket.propTypes = {}

export default React.memo(Basket)
