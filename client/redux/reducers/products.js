
const initialState = {
  goods: {},
  rates: {},
  currency: 'USD',
  sort: {
    type:'title',
    direction: 'ab'
  }
}

const GET_PRODUCTS ='store/products/GET_PRODUCTS'
const GET_RATES = 'store/products/GET_RATES'
const SET_CURRENCY = 'store/products/SET_CURRENCY'
const SET_SORT = 'store/products/SET_SORT'

export function getSortList(sorttype = 'title', sortdirection = 'ab'){
  return(dispatch) => {
    fetch(`/api/v1/goods/${sorttype}/${sortdirection}`)
    .then(response => response.json())
    .then(result => {
      dispatch({type: GET_PRODUCTS, list: result })
    })
    dispatch({
    type: SET_SORT,
    sorttype,
    sortdirection
   })
  }
}


export function getProductsFromServer() {
  return (dispatch) => {
    fetch('/api/v1/goods')
   .then(response => response.json())
   .then((result) => {
    const newObj = result.reduce((acc, product) => {
      return {...acc, [product.id]:product }
    }, {})
    dispatch({ type: GET_PRODUCTS, list: newObj })
   })
  }
}

export function getRatesFromServer() {
  return(dispatch) => {
    fetch('/api/v1/rates')
    .then(response => response.json())
    .then(rates => {
      dispatch({ type:GET_RATES, rates })
    })
  }
}

export function changeCurrency(currencyName) {
  return { type:SET_CURRENCY, currencyName }
}

export function sortBytitle(list) {
  const titleList = list.map(item => item.sort())
  return { type:GET_PRODUCTS, titleList}
}

export default (state = initialState, action ) => {
  switch(action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        goods: action.list
      }
    }
    case GET_RATES: {
      return {
        ...state,
        rates: action.rates
      }
    }
      case SET_CURRENCY:{
        return {
          ...state,
          currency: action.currencyName
        }
      }
      case SET_SORT:{
        return {
          ...state,
          sort: {
            type: action.sorttype,
            direction: action.sortdirection
          }
        }
      }
    default:
      return state
  }
}
