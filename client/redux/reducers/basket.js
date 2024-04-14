const initialState = {
  basketProducts: {}
}
const CHANGE_PRODUCTS =    'store/basket/CHANGE_PRODUCTS'
// const REMOVE_PRODUCTS = 'store/basket/REMOVE_PRODUCTS'

export function addToBasket(itemId) {
  return (dispatch, getState) => {
    const store = getState()
    const basket = store.basket.basketProducts
    // const basket = getState().basket.basketProducts
    const newItemInBasket = (typeof basket?.[itemId] === 'undefined'
     ? {...basket,[itemId]: 1}
     : {...basket, [itemId]: basket[itemId] + 1} )
    dispatch({ type: CHANGE_PRODUCTS, changeGoods: newItemInBasket })
  }
}

export function removeProduct(itemId) {
  return (dispatch, getState) => {
    const basket = getState().basket.basketProducts
    const updateBasket = basket[itemId] <= 1
    ? {...basket, [itemId]: undefined}
    : {...basket, [itemId]: basket[itemId] - 1}
    dispatch({ type: CHANGE_PRODUCTS, changeGoods: updateBasket })
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_PRODUCTS:  {
      return {
        ...state,
        basketProducts: action.changeGoods
      }
    }
    default:
      return state
  }
}