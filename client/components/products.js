import React from 'react'
import { useSelector} from 'react-redux'


const Product = (props) => {

  const currency = useSelector((store) => store.products.currency)
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
    <div className=".card bg-green-800 p-1 text-center items-center m-6">
      <div className="">
        <div key="key" className="bg-green-200 flex justify-center p-2">
          <img alt="img" src={props.good.image} className=".card__image"/>
        </div >
      </div>
      <div className="bg-green-200 p-3">
      <div className=".card__title">{props.good.title}</div>
      <div className="flex justify-center">
        <div className=".card__price px-1">{(props.good.price * rates()).toFixed(2)}</div>
        {/* <div className=".card__price px-1">{(props.good.price * currentRate[currency].toFixed(2)}</div> */}
        <div className=".currency px">{currency}</div>
        </div>
      <button
       type="button">add</button>
       <div className=".card__product-amount">amount</div>
    </div>
    </div>
  )
}
Product.propTypes = {}
export default Product