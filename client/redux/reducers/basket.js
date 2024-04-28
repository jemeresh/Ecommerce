import { LOGS_ADD_ITEM }from '../middleware/logs'

const initialState = {
  basketProducts: {
    // 'id' : 00000,
    // 'title' : 'aaaa',
    // 'amount': +
  },
  totalAmount: 0,
  totalPrice: 0
}
const CHANGE_PRODUCTS = 'store/basket/CHANGE_PRODUCTS'
export const SORT_BASKET = 'store/basket/SORT_BASKET' // export для того чтобы это иожно было опрокинуть в другой reducer

function totalCalculate(basket) {
  const total = Object.entries(basket).reduce((acc, goodArr) => {
    const amount = acc.amount + goodArr[1].amount
    const price = (acc.price +  (basket?.[goodArr[0]].price || 0) * (basket?.[goodArr[0]].amount || 0) ) // || {} для исправления ошибки no-unsafe-optional-chaining
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
     ? {...basket,[itemId]: {...products[itemId], amount: 1}}
     : {...basket, [itemId]: {...basket[itemId], amount: basket[itemId].amount + 1}}
     const total = totalCalculate(updateBasket, basket)
    dispatch({
       type: CHANGE_PRODUCTS,
       changeGoods: updateBasket,
       totalAmount: total.amount,
       totalPrice: total.price  })
       dispatch({
        type: LOGS_ADD_ITEM,
        payload: {
          itemTitle: updateBasket[itemId].title
        }
       })
  }
}


export function removeProduct(itemId) {
  return (dispatch, getState) => {
    const basket = getState().basket.basketProducts
    const updateBasket = {
      ...basket,
       [itemId]: { ...basket[itemId],
         amount: basket[itemId].amount- 1}}
    if  (updateBasket[itemId].amount <= 0) {
        delete updateBasket[itemId]
    }
    // ? {...basket,[itemId]: undefineed}
    //  : {...basket, [itemId]: basket[itemId] - 1} )
    const total= totalCalculate(updateBasket)
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
    case SORT_BASKET:  {
      return {
        ...state,
        basketProducts: action.sortBasket,
      }
    }
    default:
      return state
  }
}