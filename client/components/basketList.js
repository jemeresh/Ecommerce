import React  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeProduct } from '../redux/reducers/basket'

const BasketList = ({ item }) => {

  const dispatch = useDispatch()
  const product = useSelector((s) => s.products.goods?.[item.id])
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

  return (
    <div className=" flex flex-row space-x-4 m-1 ">
      <img alt="img" src={product.image} className=".product__image h-20 w-20"/>
      <div className=".product__tirle ">{product.title}</div>
      <div className=".product__price">{(product.price * rates()).toFixed(2)}</div>
      <div className=".product__amount">{item.amount}</div>
      <div className=".product__remove border px-2">
      <button type="button" onClick={() => {dispatch(removeProduct(item.id))}} >remove</button>
      </div>
    </div>
  )
}

BasketList.propTypes = {}

export default React.memo(BasketList)