const initialState = {
  basketProducts: {
    // 'someid': 0
  }
}
const ADD_PRODUCTS =    'store/basket/ADD_PRODUCTS'
// const REMOVE_PRODUCTS = 'store/basket/REMOVE_PRODUCTS'

export function addToBasket(itemId) {
  return (dispatch, getState) => {
    const store = getState()
    const basket = store.basket.basketProducts
    // const basket = getState().basket.basketProducts
    const newItemInBasket = (typeof basket?.[itemId] === 'undefined'
     ? {...basket,[itemId]: 1}
     : {...basket, [itemId]: basket[itemId] + 1} )
    dispatch({ type: ADD_PRODUCTS, addGoods: newItemInBasket })
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCTS:  {
      return {
        ...state,
        basketProducts: action.addGoods
      }
    }
    default:
      return state
  }
}