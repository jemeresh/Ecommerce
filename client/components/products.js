import React from 'react'
import { useSelector, useDispatch} from 'react-redux'

import { addToBasket } from '../redux/reducers/basket'


const Product = (props) => {

  const dispatch = useDispatch()
  const currency = useSelector((store) => store.products.currency)
  const amount = useSelector((store) => store.basket?.basketProducts?.[props.good.id]?.amount)
  //! const currentRate = useSelector((store) => store.products.rates)

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
    <div className=".card bg-green-800 p-1 text-center items-center m-4 ">
      <div>
        <div key="key" className="bg-green-200 flex justify-center p-2">
          <img alt={props.good.title} src={props.good.image} className=".card__image object-cover w-32 h-36"/>
        </div >
      </div >
      <div className="bg-green-200 p-3">
      <div className=".card__title">{props.good.title}</div>
      <div className="flex justify-center">
        <div className=".card__price px-1">{(props.good.price * rates()).toFixed(2)}</div>
        {/* <div className=".card__price px-1">{(props.good.price * currentRate[currency].toFixed(2)}</div> */}
        <div className=".currency px">{currency}</div>
        </div>
      <button type="button" onClick = {() => dispatch(addToBasket(props.good.id))}>add</button>
       <div className=".card__product-amount">{amount}</div>
    </div>
    </div>
  )
}
Product.propTypes = {}
export default Product