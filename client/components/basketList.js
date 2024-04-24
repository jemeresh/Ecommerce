import React  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeProduct } from '../redux/reducers/basket'

const BasketList = ({ item }) => {

  const dispatch = useDispatch()
  const product = useSelector((s) => s.basket.basketProducts?.[item.id])
  const currency = useSelector((store) => store.products.currency)
  const rates = useSelector((s) => s.products.rates)
  const price = (product.price * rates[currency]).toFixed(2)

  return (
    <div className=" flex m-1 justify-between w-full">
      <img alt="img" src={product.image} className=".product__image h-20 w-20"/>
      <div className=".product__tirle ">{product.title}</div>
      <div className=".product__price">{price} {currency}</div>
      <div className=".product__amount">{product.amount}</div>
      <div className=".product__remove border px-2">
      <button type="button" onClick={() => {dispatch(removeProduct(product.id))}} >remove</button>
      </div>
      <div className=".products__price border">{(price * product.amount).toFixed(2)} {currency}</div>
    </div>

  )
}

BasketList.propTypes = {}

export default React.memo(BasketList)