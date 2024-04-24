export const LOGS_CHANGE_CURRENCY = 'middleware/logs/LOGS_CHANGE_CURRENCY'
/*
change currency from ${currency} to ${currency2}
add ${item-title} to the backet
remove ${item-title} from the basket
navigate to ${url} page
sort by ${title}
time of action in utc forma (+newData())
*/
const  logs = () => {
  return () => (next) => (action) => {
        switch(action.type) {
          case LOGS_CHANGE_CURRENCY : {
            fetch('/api/v1/logs', {
              method: 'POST',
              headers: {
                'Content-Type' : 'application/json'
              },
              body: JSON.stringify({
                text: `change currency from ${action.payload.lastcurrency} to ${action.payload.newCurrency}`
              })
            })
              .then((res) => {
                return res.json()
              })
              .then((result) => {
                console.log(result)
              })
               .catch((err) => {
                console.log(err)
               })
            break
          }
          default:
            return next(action)
        }
        return next(action)
      }
    }
export default logs()