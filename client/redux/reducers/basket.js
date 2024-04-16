const initialState = {
  basketProducts: {},
  totalAmount: 0,
  totalPrice: 0
}
const CHANGE_PRODUCTS = 'store/basket/CHANGE_PRODUCTS'

function totalCalculate(basket, products) {
  const total = Object.entries(basket).reduce((acc, goodArr) => {
    const amount = acc.amount + goodArr[1]
    const price = (acc.price +  (products?.[goodArr[0]].price || 0) * (basket?.[goodArr[0]] || 0) ) // || {} для исправления ошибки no-unsafe-optional-chaining
      return { amount, price }
    },{
      amount: 0,
       price: 0
    })
    return total
}

export function addToBasket(itemId) {
  return (dispatch, getState) => {
    const basket = getState().basket.basketProducts
    const products = getState().products.goods
    const updateBasket = typeof basket?.[itemId] === 'undefined'
     ? {...basket,[itemId]: 1}
     : {...basket, [itemId]: basket[itemId] + 1}
     const total = totalCalculate(updateBasket, products)
    dispatch({
       type: CHANGE_PRODUCTS,
       changeGoods: updateBasket,
       totalAmount: total.amount,
       totalPrice: total.price  })
  }
}


export function removeProduct(itemId) {
  return (dispatch, getState) => {
    const basket = getState().basket.basketProducts
    const products = getState().products.goods
    const updateBasket = {...basket, [itemId]: basket[itemId] - 1}
    if  (updateBasket[itemId] <= 0) {
        delete updateBasket[itemId]
    }
    // ? {...basket,[itemId]: undefineed}
    //  : {...basket, [itemId]: basket[itemId] - 1} )
    const total= totalCalculate(updateBasket, products)
    dispatch({
       type: CHANGE_PRODUCTS,
       changeGoods: updateBasket,
       totalAmount: total.amount,
       totalPrice: total.price  })
  }
}


export default (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_PRODUCTS:  {
      return {
        ...state,
        basketProducts: action.changeGoods,
        totalAmount: action.totalAmount,
        totalPrice: action.totalPrice
      }
    }
    default:
      return state
  }
}