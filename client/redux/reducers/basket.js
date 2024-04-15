const initialState = {
  basketProducts: {},
  totalAmount: 0,
  totalPrice: 0
}
const CHANGE_PRODUCTS = 'store/basket/CHANGE_PRODUCTS'
const TOTAL_PRICE = 'store/basket/TOTAL_PRICE'

function totalCalculate(basket) {
    return Object.values(basket).reduce((acc,rec) =>  acc + rec, 0)
}

export function addToBasket(itemId) {
  return (dispatch, getState) => {
    const store = getState()
    const basket = store.basket.basketProducts
    // const basket = getState().basket.basketProducts
    const updateBasket = (typeof basket?.[itemId] === 'undefined'
     ? {...basket,[itemId]: 1}
     : {...basket, [itemId]: basket[itemId] + 1} )
     const totalAmount = totalCalculate(updateBasket)
    dispatch({ type: CHANGE_PRODUCTS, changeGoods: updateBasket, totalAmount  })
  }
}

export function totalPrice() {
  return (dispatch, getState) => {
    const basket = getState().basket.basketProducts
    const price = basket((acc,rec) => acc * rec, 0)
    dispatch({ type: TOTAL_PRICE, totalPrice: price})
  }
}

export function removeProduct(itemId) {
  return (dispatch, getState) => {
    const basket = getState().basket.basketProducts
    const updateBasket = {...basket, [itemId]: basket[itemId] - 1}
    if  (updateBasket[itemId] <= 0) {
        delete updateBasket[itemId]
    }
    // ? {...basket,[itemId]: undefineed}
    //  : {...basket, [itemId]: basket[itemId] - 1} )
    const totalAmount = totalCalculate(updateBasket)
    dispatch({ type: CHANGE_PRODUCTS, changeGoods: updateBasket, totalAmount  })
  }
}


export default (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_PRODUCTS:  {
      return {
        ...state,
        basketProducts: action.changeGoods,
        totalAmount: action.totalAmount
      }
    }
    case TOTAL_PRICE: {
      return {
        ...state,
        totalPrice: action.totalPrice
      }
    }
    default:
      return state
  }
}