
const LOGS_REDUCER = 'LOGS_REDUCER'

const initialState = {
  logs: []
}

export function getLogsFromServer () {
  return(dispatch) => {
    fetch('/api/v1/logs')
    .then((res) => res.json())
    .then((logs) => {
      dispatch({type:LOGS_REDUCER, logs })
    })
  }
}

export default (state = initialState, action) =>{
  switch(action.type) {
    case LOGS_REDUCER : {
      return {
        ...state,
       logs: action.logs.reverse()
      }
    }
    default:
      return state
  }
}

